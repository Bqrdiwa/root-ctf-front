import React from 'react';
import PropTypes from 'prop-types';
import Div from '../../../@material/Base/Div';
import { Icon as Icons } from '../../../@material/Icon/Icon';
import { useClassNameMerge } from '../../../@material/hooks/useClassNameMerge';
import { InLink } from '../../../@material/Link/InLink';

const propNames = [
  "className"
];


export const Icon = (props) => {
  const [className, otherProps] = useClassNameMerge(propNames, props,"icon-navigation")

  return (
    <Div {...otherProps} className={className}>
      
    </Div>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
};

export default Icon;