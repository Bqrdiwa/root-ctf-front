import React from 'react';
import PropTypes from 'prop-types';
import RightNavigation from './RightNavigation';
import LeftNavigation from './LeftNavigation';
import Div from '../../../@material/Base/Div';
import { useClassNameMerge } from '../../../@material/hooks/useClassNameMerge';

const propNames = [
  "className"
];

export const HeadNavigation = (props) => {

  const [className, otherProps] = useClassNameMerge(propNames, props, "HeadNavigationExternal");

  return (
    <Div {...otherProps} className={className}>
      <RightNavigation className="flex" />
      <LeftNavigation className="flex" />
    </Div>
  );
};

HeadNavigation.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default HeadNavigation;