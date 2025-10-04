import React from 'react';
import { Div, H } from '../../../@material/Base';
import MainBox from '../../../baseLayout/ExternalLayout/MainExternal/MainExternal';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Register from '../../../account/register/Register';
import Login from '../../../account/login/Login';
import ForgetPassword from '../../../account/forgetPassword/ForgetPassword';
import * as Routes from '../../../../store/constant/RoutesAndLink/routes';
import ResetPassword from '../../../account/resetPassword/ResetPassword';
import Layout from '../../../account/accountLayout/Layout';
import Active from '../../../account/register/Active';
import { connect } from 'react-redux';
import {LANGUAGE } from '../../../../store/constant/locaStorageNames';
import Icon from '../../../@material/Icon/Icon';


export const AccountPart = withRouter((props) => {
  const { lang } = props;
  return (
    <Div className="Content-External">
      <MainBox className="mainbox-external Content-External" color="black" width="50%" >
        <Switch>
          <Route path={`/${Routes.ROUTE_EXTERNAL}/${Routes.ROUTE_EXTERNAL_LOGIN}`} component={Login} />
          <Route path={`/${Routes.ROUTE_EXTERNAL}/${Routes.ROUTE_EXTERNAL_FORGETPASSWORD}`} component={ForgetPassword} />
          <Route path={`/${Routes.ROUTE_EXTERNAL}/${Routes.ROUTE_EXTERNAL_RESETPASSWORD}`} component={ResetPassword} />
          <Route path={`/${Routes.ROUTE_EXTERNAL}/${Routes.ROUTE_EXTERNAL_ACTIVATE}`} component={Active} />
          <Route path={`/${Routes.ROUTE_EXTERNAL}`} component={Register} />
          <Route path="/" component={Layout} />
          <Redirect to="/" />
        </Switch>
      </MainBox>

      <MainBox className="py-5 mainbox-external content-discription " color="black" width="50%">
        <Div className="content-text">
          {localStorage[LANGUAGE] === "en" ?
            <Icon name="apaEn" size="250px" className="content-image" />
            :
            <Icon name="apaFa" size="250px" className="content-image" />
          }
          <H priority="3" >{lang.accountpartMessage1}</H>
          <H priority="4" className="text-color-leftpart">{lang.accountpartMessage2}</H>
        </Div>
      </MainBox>
    </Div>
  )
});



const mapStateToProps = (state) => ({
  lang: state.language.trans,
})

export default connect(mapStateToProps)(AccountPart)
