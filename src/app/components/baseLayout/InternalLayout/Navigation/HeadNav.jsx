import React from 'react';
import Nav from '../../../@material/Nav/Nav';
import HeadNavigation from './HeadNavigation';
import HeadBrand from './HeadBrand';
import Div from '../../../@material/Base/Div';
import InLink from '../../../@material/Link/InLink';
import ConterTime from '../Navigation/counterTime';
import { createClasses } from '../../../@material/Theme';
import { useSelector } from 'react-redux';
import { A } from '../../../@material/Base';

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
  },
});

export const HeadNav = (props) => {

  const classes = useStyle();
  const lang = useSelector(state => state.language.trans);

  return (
    <Div className=" Nav flex flex-nowrap position-relative">
        <div className={classes.CounterBox}>
          <div>{lang.EndTime}</div>
          <ConterTime />
        </div>
      
      <HeadNavigation className="flex" />
    </Div>

  );
};
export default HeadNav;

