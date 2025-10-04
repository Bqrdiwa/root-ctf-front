import React,{Children} from 'react';
import PropTypes from 'prop-types';

import { classNameMerge } from '../../../utils/Tools/classNameMerge';
const propName =
  [
    "position-static",
    "position-relative",
    "position-absolute",
    "position-fixed",
    "position-sticky",
    "fixed-bottom",
    "sticky-top",
    "className",
  ]

export const Position = ({children,...props}) => {

  const [className, otherProps] = classNameMerge(propName, props, "");
  return (
  <div {...otherProps} className={className}>{children}</div>
  )

}

Position.propTypes = {
  children: PropTypes.string,
  className:PropTypes.string,
}

export default Position;