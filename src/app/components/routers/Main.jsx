import React, { Component } from 'react';
import External from "../baseLayout/ExternalLayout/MainLayoutExternal";
import Internal from "../baseLayout/InternalLayout/MainLayoutInternal";
import { Switch, withRouter, Redirect } from 'react-router-dom';
import * as Routes from '../../store/constant/RoutesAndLink/routes';
import { Div } from '../@material/Base';
import { withStyle } from '../@material/Theme';
import { connect } from 'react-redux';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import guestUserRole from '../ProtectedRoute/Roles/guestUserRole';
import activeUserRole from '../ProtectedRoute/Roles/activeUserRole.js';
import Axios from 'axios';
import { API_refreshToken } from '../../store/constant/Api/api';
import { upload_Tokens } from '../../store/action/user';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../store/constant/locaStorageNames';
import CoverLoading from '../CoverLoading/CoverLoading';
import { finish_initial_process } from '../../store/action/app_attrs';

const style = (theme) => ({
  Main: {
    direction: theme.direction,
    fontFamily: theme.font
  }
})

class Main extends Component {
  constructor(props) {
    super(props);
  }

  getRefreshToken = () => {
    Axios.post(API_refreshToken(),
      { refresh: localStorage[REFRESH_TOKEN] }
    )
      .then(response => {
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        this.props.setToken(
          {
            accessToken: response.data.access,
            refreshToken: localStorage[REFRESH_TOKEN],
            loggedIn: true,
          }
        )
      })
      .catch((error) => {
        this.props.setToken(
          {
            accessToken: "",
            refreshToken: "",
            loggedIn: false,
          }
        )
      })
      .finally(() => {
        setTimeout(() => {
          this.props.finishInitialLoading()
        }, 1000);

      })

  }

  componentDidMount() {
    this.getRefreshToken();
  }

  render() {
    const { loggedIn, classes } = this.props;

    return (
      <Div className={classes.Main}>
        <CoverLoading />
        <Switch>
          <ProtectedRoute path={`/${Routes.ROUTE_INTERNAL}`} component={Internal} role={activeUserRole} />
          <ProtectedRoute path={`/`} component={External} role={guestUserRole} />
          <Redirect to={`/`} />
        </Switch>
      </Div>
    );
  };
};

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
})

const mapDispatchToProps = (dispatch) => ({
  setToken: payload => dispatch(upload_Tokens(payload)),
  finishInitialLoading: () => dispatch(finish_initial_process())
})

const MainWithrouter = withRouter(Main);
export default connect(mapStateToProps, mapDispatchToProps)(withStyle(style)(MainWithrouter));
