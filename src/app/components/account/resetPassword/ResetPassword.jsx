import React, { Component } from 'react'
import Card from '../../@material/Card/Card';
import CardBody from '../../@material/Card/CardBody';

import Label from '../../@material/Form/Label';
import Form from '../../@material/Form/Form';
import FormGroup from '../../@material/Form/FormGroup';
import Button from '../../@material/Button/Button';
import Input from '../../@material/Form/Input';
import { withRouter } from 'react-router-dom';
import { CardHeader } from '../../@material/Card/CardHeader';
import { Div, H } from '../../@material/Base';
import Icon from '../../@material/Icon/Icon';
import Axios from 'axios';
import TokenError from '../../../store/function/error_handling/token_validation';
import Login from '../login/Login';
import { fullError } from '../../../store/function/error_handling/fullError';
import FlexItem from '../../@material/Flex/FlexItem';
import { connect } from 'react-redux';
import {API_resetpassword} from '../../../store/constant/Api/api';
import { remountOnLanguage } from '../../@material/HOC/remountOnLanguage';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      tokenvalid: false,
      stringone: '',
      stringtwo: '',
      error: '',
      error_message: '',
    }



  }


  componentDidMount() {
    const string_one = this.props.match.params.stringOne;
    const string_two = this.props.match.params.stringTwo;
    this.setState({ stringone: string_one, stringtwo: string_two });

    Axios({
      method: 'get',
      url:API_resetpassword(string_one,string_two),
    })
      .then(response => {
        TokenError(response.status,this.props.lang);
        this.setState({ tokenvalid: true })
      })
      .catch(function (error) {
        if(error.response){
        TokenError(error.response.status,this.props.lang)
        }
      });
  }


  handleChange = (event) => {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({ fields })
  }


  handleResetpassword = (event) => {
    event.preventDefault();
    const string_one = this.props.match.params.stringOne;
    const string_two = this.props.match.params.stringTwo;
    var self = this;
    const { newPassword, confirmPassword } = self.state.fields;

    let userContent = {
      "newPassword": newPassword,
      "confirmPassword": confirmPassword,
    }

    Axios.put(API_resetpassword(string_one,string_two),
      {
        "password": userContent.newPassword,
        "confirm_password": userContent.confirmPassword,
      }
    )
      .then(response => {

        if (response.status === 200) {
          self.props.history.push("/accounts/login");
        }
      })
      .catch(function (error) {
        if(error.response){
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
    const { lang } = this.props;
    return (
      <FlexItem py="5" px="5" flex-grow="1" className="account-form">
        {
          this.state.non_field_errors && this.state.non_field_errors !== '' ?
            <div className="errorMsg">{this.state.non_field_errors}</div>
            :
            null
        }
        {this.state.tokenvalid ?
          <Card >
            <CardHeader><Icon name="lock" size="30" />{lang.passwordRecovery}</CardHeader>
            <CardBody >
              <Form form-control onSubmit={this.handleResetpassword}>
                <FormGroup>
                  <Label className="py-1 px-1">{lang.newPassword}</Label>
                  <Input
                    type="password"
                    name="newPassword"
                    id="newpassword"
                    value={this.state.fields.newPassword || ''}
                    onChange={this.handleChange}
                  />
                  {
                    this.state.password !== '' ?
                      <div className="errorMsg">{this.state.password}</div>
                      :
                      null
                  }
                </FormGroup>

                <FormGroup >
                  <Label className="py-1 px-1">{lang.confirmNewPassword}</Label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    id="confirmpassword"
                    value={this.state.fields.confirmPassword || ''}
                    onChange={this.handleChange}
                  />
                  {
                    this.state.confirm_password !== '' ?
                      <div className="errorMsg">{this.state.confirm_password}</div>
                      :
                      null
                  }
                </FormGroup>

                <Div className="py-3 btn-center">
                  <Button outline block color="primary">{lang.save}</Button>
                </Div>

              </Form>
            </CardBody>
          </Card>
          :
          <Login />
        }
      </FlexItem>
    );
  };
};



const mapStateToProps = (state) => ({
  lang: state.language.trans,
})

const ResetPasswordwithrouter = withRouter(ResetPassword);
export default connect(mapStateToProps)(remountOnLanguage(ResetPasswordwithrouter));


