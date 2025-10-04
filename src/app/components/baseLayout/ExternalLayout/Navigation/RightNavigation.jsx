import React from 'react';
import PropTypes from 'prop-types';
import Div from '../../../@material/Base/Div';
import { useClassNameMerge } from '../../../@material/hooks/useClassNameMerge';

const propNames = [
  "className"
];

export const RightNavigation=(props)=>{
  
  const [className, otherProps] = useClassNameMerge(propNames, props, "RightNavigationExternal")
  
  return (
    <Div {...otherProps} className={className} >     
    </Div>
  );
};

RightNavigation.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

export default RightNavigation;
