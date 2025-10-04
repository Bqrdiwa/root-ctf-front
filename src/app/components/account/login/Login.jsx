import React, { Component } from 'react'
import Card from '../../@material/Card/Card';
import CardBody from '../../@material/Card/CardBody';
import Label from '../../@material/Form/Label';
import Form from '../../@material/Form/Form';
import FormGroup from '../../@material/Form/FormGroup';
import Axios from 'axios';
import Icon from "../../@material/Icon/Icon";
import Col from '../../@material/Layout/Col';
import Button from '../../@material/Button/Button';
import Input from '../../@material/Form/Input';
import { withRouter } from 'react-router-dom';
import { FlexContainer } from '../../@material/Flex/FlexContainer';
import { CardHeader } from '../../@material/Card/CardHeader';
import Div from '../../@material/Base/Div';
import InLink from '../../@material/Link/InLink';
import { fullError } from '../../../store/function/error_handling/fullError';
import FlexItem from '../../@material/Flex/FlexItem';
import { connect } from 'react-redux';
import { API_login, API_refreshToken } from '../../../store/constant/Api/api';
import { remountOnLanguage } from '../../@material/HOC/remountOnLanguage';
import {
  upload_Tokens,
} from '../../../store/action/user';
import { ACCESS_TOKEN, REFRESH_TOKEN, USER_AVATAR, USER_ID, USER_NAME, USER_ROLE } from '../../../store/constant/locaStorageNames';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      logedIn: false,
      statuscod: '',
      errors: {},
      messageArray: [],
      serverError: false,
    }

  }


  handleChange = (event) => {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({ fields })
  }


  handlelogin = (event) => {
    event.preventDefault();
    var self = this;
    const { email, password } = self.state.fields;
    let userContent = {
      "email": email,
      "password": password,
    }

    Axios.post(API_login(),
      {
        "email": userContent.email,
        "password": userContent.password,
      })
      .then(response => {
        self.setState({
          statuscod: response.status,
          fields: {}
        })

        if (response.status === 200) {
          localStorage.setItem(USER_NAME, response.data.user_full_name);
          localStorage.setItem(USER_ROLE, response.data.user_role);
          localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
          localStorage.setItem(ACCESS_TOKEN, response.data.access);
          localStorage.setItem(USER_ID, response.data.id);
          localStorage.setItem(USER_AVATAR, response.data.avatar);


          self.props.Tokens({
            accessToken: response.data.access,
            refreshToken: response.data.refresh,
            loggedIn: true,
          })


        }

      })
      .catch(function (error) {
        if (error.response) {

          self.setState({
            statuscod: error.response.status,
          });

          if (error.response.status !== 500 || 501 || 502 || 503 || 504 || 505 || 511) {

            self.setState({
              messageArray: fullError(error.response.data)
            });

          } else {

            self.setState({
              serverError: true,
            });
          }


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
    const { lang, } = this.props;
    return (
      <FlexItem py="5" px="5" flex-grow="1" className="account-form">
        <Card>
          <CardHeader><Icon name="login" size="30" /><span>{lang.login_title}</span></CardHeader>
          <CardBody >
            <Form form-control="true" onSubmit={this.handlelogin}>
              <FormGroup className="py-2">
                <Label className="py-0 px-1">{lang.login_Email}</Label>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  value={this.state.fields.email || ''}
                  onChange={this.handleChange}
                  placeholder={lang.email}
                />

              </FormGroup>

              <FormGroup className="py-2">
                <Label className="py-0 px-1">{lang.login_pass}</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.fields.password || ''}
                  onChange={this.handleChange}
                  placeholder={lang.login_pass}
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

              {
                this.state.serverError ?
                  <div className="alert alert-danger" style={{ fontSize: '12px' }}>{lang.servererror}</div>
                  :
                  null
              }

              <Div className="py-4  btn-center">
                <Button formNoValidate outline color="primary" block>{lang.login_btn}</Button>
              </Div>

              <InLink to="forgetpassword" className="py-2 px-2" style={{ textDecoration: 'none' }}>{lang.login_link}</InLink>
            </Form>
          </CardBody>
        </Card>
      </FlexItem>
    )
  };
};


const mapStateToProps = (state) => ({
  lang: state.language.trans,
  accessToken: state.user.accessToken,
  refreshToken: state.user.refreshToken,
  loggedIn: state.user.loggedIn,
})


const mapDispatchToProps = (dispatch) => ({
  Tokens: (results) => dispatch(upload_Tokens(results)),
})


const loginWithroute = withRouter(Login);
export default connect(mapStateToProps, mapDispatchToProps)(remountOnLanguage(loginWithroute))



