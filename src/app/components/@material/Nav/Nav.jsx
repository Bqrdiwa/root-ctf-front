import React from 'react';
import PropTypes from 'prop-types';
import { Nav as NavStrap } from 'reactstrap';
import { useClassNameMerge } from '../hooks/useClassNameMerge';

const propNames = [
  "className"
];

export const Nav = ({size,style,...props}) => {

  const [className, otherProps] = useClassNameMerge(propNames, props, "vertical")

  return (
    <NavStrap 
    style={{
      ...style,
      width:size,
      height:size,
    }}
    {...otherProps} 
    className={className}>
    </NavStrap>
  );
}


Nav.propTypes = {
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  card: PropTypes.bool,
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  horizontal: PropTypes.string,
  navbar: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])

}

export default Nav;