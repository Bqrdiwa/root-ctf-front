import React from 'react';
import PropTypes from 'prop-types';
import Div from '../../../@material/Base/Div';
import { useClassNameMerge } from '../../../@material/hooks/useClassNameMerge';
import IconComponenet from '../../../@material/Icon/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { toggle_sidenav } from '../../../../store/action/app_attrs';

const propNames = [
  "className"
];

export const RightNavigation = ({ staticContext, ...props }) => {

  const [className, otherProps] = useClassNameMerge(propNames, props, "RightNavigation")

  const isSidenavOpen = useSelector(state => state.app_attrs.sidenav);

  const dispatch = useDispatch();
  const toggleSideNav = () => dispatch(toggle_sidenav());

  return (
    <Div {...otherProps} className={className}>
      <Div className="openbtn" onClick={toggleSideNav}>
        {
          isSidenavOpen
            ? <IconComponenet name="close" />
            : <IconComponenet name="menu" />
        }

      </Div>
    </Div>
  );
};

RightNavigation.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

export default RightNavigation;
