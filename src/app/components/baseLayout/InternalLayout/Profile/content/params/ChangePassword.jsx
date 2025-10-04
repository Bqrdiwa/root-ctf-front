import React, { Component } from 'react'
import { Div, H } from '../../../../../@material/Base';
import { Form, FormGroup, Label, Input } from '../../../../../@material/Form';
import Button from '../../../../../@material/Button/Button';
import Axios from 'axios';
import { Card, CardBody, CardSubtitle, } from '../../../../../@material/Card';
import Icon from '../../../../../@material/Icon/Icon';
import { Box } from '../../../../../@material/Box';
import { fullError } from '../../../../../../store/function/error_handling/fullError';
import { connect } from 'react-redux';
import {API_changepassword} from '../../../../../../store/constant/Api/api';
import { remountOnLanguage } from '../../../../../@material/HOC/remountOnLanguage';
import { ACCESS_TOKEN } from '../../../../../../store/constant/locaStorageNames';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      statuscod: '',
    }
    this.handleChangepassword = this.handleChangepassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({ fields })
  }


  handleChangepassword = (event) => {
    event.preventDefault();
    const token = localStorage[ACCESS_TOKEN];
    const { new_password, confirm_password, current_password } = this.state.fields;

    let userContent = {
      "Password": new_password,
      "confirm_Password": confirm_password,
      "current_Password": current_password,
    }
    var self = this;
    Axios({
      method: 'post',
      url:API_changepassword(),
      data: {
        "password": userContent.Password,
        "confirm_password": userContent.confirm_Password,
        "current_password": userContent.current_Password,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        self.setState({
          statuscod: response.status,
          fields: {},
        });

      })
      .catch(function (error) {
        if (error.response) {
          const ErrorArry = fullError(error.response.data);
          for (var x in ErrorArry) {
            self.setState({
              [ErrorArry[x].stems[0]]: ErrorArry[x].value,
            })
          }
        }

      });
  }

  

  render() {
    const success = this.state.statuscod == 200;
    const { lang } = this.props;
    return (
      <Box p="2" className="MainBox-font">
        <Card>
          <CardBody>
            <CardSubtitle>
              <H priority="5"><Icon name="lock" size="50" />{lang.changepassTitle}:</H>
              {success ?
                <div className="alert alert-success" >
                  <p>{lang.changepassSuccess}</p>
                </div>
                :
                ''
              }
            </CardSubtitle>
            <Div>
              <Form form-control="true" onSubmit={this.handleChangepassword} >
                <FormGroup className="py-2">
                  <Label> {lang.currentpass}:</Label>
                  <Input
                    type="password"
                    name="current_password"
                    id="currentPassword"
                    value={this.state.fields.current_password || ''}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup className="py-2">
                  <Label > {lang.newpass}:</Label>
                  <Input
                    type="password"
                    name="new_password"
                    id="newpassword"
                    value={this.state.fields.new_password || ''}
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup className="py-2">
                  <Label> {lang.confirmpass}:</Label>
                  <Input
                    type="password"
                    name="confirm_password"
                    id="confirmpassword"
                    value={this.state.fields.confirm_password || ''}
                    onChange={this.handleChange}
                  />

                </FormGroup>
                {
                  this.state.non_field_errors !== '' ?
                    <p className="errorMsg">{this.state.non_field_errors}</p>
                    :
                    null
                }
                <Div className="py-2 btn-center">
                  <Button formNoValidate outline color="success" >{lang.save}</Button>
                </Div>
              </Form>
            </Div>
          </CardBody>
        </Card>
      </Box>
    )
  };
};


const mapStateToProps = (state) => ({
  lang: state.language.trans,
})

export default connect(mapStateToProps)(remountOnLanguage(ChangePassword))

