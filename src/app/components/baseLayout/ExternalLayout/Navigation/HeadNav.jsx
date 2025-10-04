import React from 'react';
import Nav from '../../../@material/Nav/Nav';
import HeadBrand from './HeadBrand';
import HeadNavigation from './HeadNavigation';
import InLink from '../../../@material/Link/InLink';
import { createClasses } from '../../../@material/Theme';
import CounterTime from '../Navigation/counter';
import { useSelector } from 'react-redux';
import { A, Div } from '../../../@material/Base';


const useStyle = createClasses({
  CounterBox: {
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export const HeadNav = (props) => {

  const classes = useStyle();
  const lang = useSelector(state => state.language.trans);

  return (
    <Nav className="Nav flex flex-nowrap position-relative">
      <div className={classes.CounterBox}>
        <div>{lang.StartTime}</div>
        <CounterTime />
      </div>
      <InLink to="register"><HeadBrand /></InLink>
      <HeadNavigation className="flex" />
    </Nav>
  );
};

export default HeadNav;