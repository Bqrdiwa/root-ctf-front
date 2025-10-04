import React, { useEffect } from 'react'
import { createUseStyles, withTheme } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
import Icon from '../@material/Icon/Icon';

const useStyle = createUseStyles({
  CoverLoading: {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    background: "#191c22",
    zIndex: 1000
  },
  LoadingText: {
    fontSize: 24,
    color: "white"
  },
  SpinnerBox: {
    padding: 12
  },
  Spinner1: {
    height: 50,
    width: 50,
    animationDelay: 0,
    animationDuration: '2s',
    fill: "white",
    color: "white",
  },
  Spinner2: {
    height: 50,
    width: 50,
    animationDelay: '.25s',
    animationDuration: '2s',
    fill: "white",
    color: "white",
  },
  Spinner3: {
    height: 50,
    width: 50,
    animationDelay: '.5s',
    animationDuration: '2s',
    fill: "white",
    color: "white",
  },
  Spinner4: {
    height: 50,
    width: 50,
    animationDelay: '.75s',
    animationDuration: '2s',
    fill: "white",
    color: "white",
  },
})

const CoverLoading = () => {
  const classes = useStyle();
  const loading = useSelector(state => state.app_attrs.initial_loading_active);
  const lang = useSelector(state => state.language.trans);

  return loading
    ? (
      <div className={classes.CoverLoading}>
        <div className={classes.SpinnerBox}>
          <Spinner className={classes.Spinner1} type="grow" />
          <Spinner className={classes.Spinner2} type="grow" />
          <Spinner className={classes.Spinner3} type="grow" />
          <Spinner className={classes.Spinner4} type="grow" />
        </div>
        <div className={classes.LoadingText}>
          {lang.welcomeLoading}
        </div>
      </div>
    ) : null
}

export default CoverLoading;
