import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from '../../@material/Card';
import FlexContainer from '../../@material/Flex/FlexContainer';
import { Col } from '../../@material/Layout';
import { Form, FormGroup, Label, Input } from '../../@material/Form';
import { Button } from '../../@material/Button/Button';
import { Div } from '../../@material/Base';
import Icon from '../../@material/Icon/Icon';
import Axios from 'axios';
import { fullError } from '../../../store/function/error_handling/fullError';
import { Box } from '../../@material/Box';
import FlexItem from '../../@material/Flex/FlexItem';
import { connect } from 'react-redux';
import { API_forgetpassword } from '../../../store/constant/Api/api';
import { remountOnLanguage } from '../../@material/HOC/remountOnLanguage';


class ForgetPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      message: '',
      messageArray: [],
      forgetpasswordState: true,
    }

  }

  handleChange = (event) => {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({ fields })
  }


  handleforgetpassword = (event) => {
    event.preventDefault();
    var self = this;
    const { email } = self.state.fields;
    let userContent = {
      "email": email,
    }
    Axios.post(API_forgetpassword(),
      {
        "email": userContent.email,
      })
      .then(response => {
        self.setState({
          statuscod: response.status,
          forgetpasswordState: false,
          fields: {}
        })
      })
      .catch(function (error) {
        if (error.response) {
          const ErrorArry = fullError(error.response.data);
          self.setState({
            messageArray: fullError(error.response.data)
          });

          for (var x in ErrorArry) {
            self.setState({
              [ErrorArry[x].stems[0]]: ErrorArry[x].value,
            })
          }
        }

      });
  }



  render() {
    const { lang } = this.props;
    const success = this.state.statuscod == 201;

    return (
      <FlexItem py="5" px="5" flex-grow="1" className="account-form">

        <div className="py-5 px-5">
          {success ?
            <div className="alert alert-success " >
              <p>{lang.messageforgetpass}</p>
            </div>
            :
            null
          }
        </div>

        {
          this.state.forgetpasswordState ?
            <Card>
              <CardHeader><Icon name="lock" size="30" />{lang.forgetpassword}</CardHeader>
              <CardBody>
                <Form form-control="true" onSubmit={this.handleforgetpassword}>
                  <FormGroup >
                    <Label className="py-2 px-2">{lang.enterYourMail}</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.fields.email || ''}
                      onChange={this.handleChange}
                      placeholder={lang.email}
                    />
                  </FormGroup>
                  {
                    this.state.messageArray !== '' ?
                      this.state.messageArray.map((index) => (
                        <p key={index.value} className="errorMsg" style={{ fontSize: '12px', }}>{index.value}</p>
                      ))
                      :
                      null
                  }
                  <Div className="py-3 btn-center">
                    <Button outline formNoValidate block color="primary">{lang.send}</Button>
                  </Div>
                  <br />
                </Form>
              </CardBody>
            </Card>
            :
            null
        }
      </FlexItem>
    )
  }
}



const mapStateToProps = (state) => ({
  lang: state.language.trans,
})



export default connect(mapStateToProps)(remountOnLanguage(ForgetPassword))



