import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from '../../@material/Card';
import { Form, FormGroup, Label, Input } from '../../@material/Form';
import { Button } from '../../@material/Button/Button';
import { Div } from '../../@material/Base';
import Icon from '../../@material/Icon/Icon';
import Axios from 'axios';
import { fullError } from '../../../store/function/error_handling/fullError';
import InLink from '../../@material/Link/InLink';
import FlexItem from '../../@material/Flex/FlexItem';
import { connect } from 'react-redux';
import { API_register } from '../../../store/constant/Api/api';
import { remountOnLanguage } from '../../@material/HOC/remountOnLanguage';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state =
    {
      fields: {},
      statuscod: '',
      registerState: true,
      errors: {},
      messageArray: [],
      nationalityList: [],
      activated: '',
    }

  }

  componentDidMount() {
    this.getNationalityList();
  }


  /* get data from form*/
  handleChange = (event) => {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({ fields })
  }


  /*handle registration form*/
  handleRegister = (event) => {
    event.preventDefault();
    const { username, email, password, confirm_password, nationality, organization } = this.state.fields;
    let userContent = {
      "username": username,
      "email": email,
      "password": password,
      "confirm_password": confirm_password,
      "nationality": nationality,
      "organization": organization,
    }
    var self = this;
    Axios.post(API_register(),
      {
        "username": userContent.username,
        "email": userContent.email,
        "password": userContent.password,
        "confirm_password": userContent.confirm_password,
        "nationality": userContent.nationality,
        "organization": userContent.organization,
      })
      .then(response => {
        self.setState({
          registerState: false,
          fields: {},
        });
        if (response.status === 201) {
          self.setState({
            activated: response.data.activated,
          })
        }

      })
      .catch(function (error) {
        if (error.response) {
          self.setState({
            statuscod: error.response.status,
          });

          const ErrorArry = fullError(error.response.data);
          self.setState({
            messageArray: fullError(error.response.data)
          });

          for (var x in ErrorArry) {
            self.setState({
              [ErrorArry[x].stems[x]]: ErrorArry[x].value,
            })
          }
        }
      })
  }

  /** get nationality list */
  getNationalityList = () => {
    var self = this;
    Axios({
      method: 'get',
      url: API_register(),
    })
      .then(response => {
        self.setState({
          nationalityList: response.data.countries,
        })
      })
  }


  render() {
    const { lang } = this.props;
    return (
      <FlexItem py="5" px="5" flex-grow="1" className="account-form">
        {
          this.state.registerState ?
            <Card>
              <CardHeader><Icon name="lock" size="30" />{lang.createAccount}</CardHeader>
              <CardBody>
                <Form form-control="true" onSubmit={this.handleRegister}>
                  <FormGroup className="py-2">
                    <Label className="star-requierd py-0 px-1">{lang.enterYourTeamName}</Label>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      value={this.state.fields.username || ''}
                      onChange={this.handleChange}
                    />
                  </FormGroup>

                  <FormGroup className="py-2">
                    <Label className="star-requierd py-0 px-1">{lang.enterYourMail}</Label>
                    <p style={{ color: 'red', fontSize: '12px' }}>{lang.register_email}</p>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.fields.email || ''}
                      onChange={this.handleChange}
                    />
                  </FormGroup>

                  <FormGroup className="py-2">
                    <Label className="star-requierd py-0 px-1">{lang.password}</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      value={this.state.fields.password || ''}
                      onChange={this.handleChange}
                    />
                  </FormGroup>

                  <FormGroup className="py-2">
                    <Label className="star-requierd py-0 px-1">{lang.rePassword}</Label>
                    <Input
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
                      value={this.state.fields.confirm_password || ''}
                      onChange={this.handleChange}
                    />
                  </FormGroup>


                  <FormGroup className="py-2">
                    <Label className=" py-0 px-1">{lang.nationality}</Label>
                    <Input type="select" name="nationality"
                      value={this.state.fields.nationality || ''}
                      onChange={this.handleChange}
                    >
                      <option>{lang.selectAnOption}</option>
                      {this.state.nationalityList.map((index) => (
                        <option key={index.name} value={index.code} style={{ fontSize: '10px' }}>{index.name}</option>
                      ))}
                    </Input>
                  </FormGroup>

                  <FormGroup className="py-2">
                    <Label className="py-0 px-1">{lang.organ}</Label>
                    <Input
                      type="text"
                      name="organization"
                      id="organization"
                      value={this.state.fields.organization || ''}
                      onChange={this.handleChange}
                    />
                  </FormGroup>


                  {
                    this.state.messageArray !== '' ?
                      this.state.messageArray.map((index) => (
                        <li key={index.value} className="errorMsg" style={{ fontSize: '12px', listStyle: 'circle' }}>{index.value}</li>
                      ))
                      :
                      null
                  }

                  <Div className="py-3 btn-center">
                    <Button formNoValidate outline color="primary" block >{lang.createAccount}</Button>
                  </Div>

                </Form>
              </CardBody>
            </Card>
            :
            <div>
              {this.state.activated === true ?
                <div className="alert alert-success" >
                  <p>{lang.registeractivated1}</p>
                  <p>{lang.registeractivated2}</p>
                </div>
                :
                <div className="alert alert-success" >
                  <p>{lang.registerSuccess}</p>
                  <p>{lang.registerSuccess2}</p>
                </div>
              }
            </div>
        }


      </FlexItem>
    );
  }
}




const mapStateToProps = (state) => ({
  lang: state.language.trans,

})

export default connect(mapStateToProps)(remountOnLanguage(Register))


