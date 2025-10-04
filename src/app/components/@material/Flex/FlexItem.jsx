import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
// import { classNameMerge } from "../../../utils/Tools/ComponentProps";
import { useClassNameMerge } from '../hooks/useClassNameMerge';

const propNames = [
  "align-self",
  "align-self-sm",
  "align-self-md",
  "align-self-lg",
  "align-self-xl",
  "flex-fill",
  "flex-sm-fill",
  "flex-md-fill",
  "flex-lg-fill",
  "flex-xl-fill",
  "flex-grow",
  "flex-shrink",
  "flex-sm-grow",
  "flex-sm-shrink",
  "flex-md-grow",
  "flex-md-shrink",
  "flex-lg-grow",
  "flex-lg-shrink",
  "flex-xl-grow",
  "flex-xl-shrink",
  "order",
  "order-sm",
  "order-md",
  "order-lg",
  "order-xl",
  "className",
];

export const FlexItem = (props) => {
  const [className, otherProps] = useClassNameMerge(propNames, props, "");
  return (
    <Box {...otherProps} className={className} />
  )
};

const alignSelfTypes = PropTypes.oneOf(["start", "end", "center", "baseline", "stretch"]);
const orderTypes = PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

FlexItem.propTypes = {
  "align-self": alignSelfTypes,
  "align-self-sm": alignSelfTypes,
  "align-self-md": alignSelfTypes,
  "align-self-lg": alignSelfTypes,
  "align-self-xl": alignSelfTypes,
  "flex-fill": PropTypes.bool,
  "flex-sm-fill": PropTypes.bool,
  "flex-md-fill": PropTypes.bool,
  "flex-lg-fill": PropTypes.bool,
  "flex-xl-fill": PropTypes.bool,
  "flex-grow": PropTypes.string,
  "flex-shrink": PropTypes.string,
  "flex-sm-grow": PropTypes.string,
  "flex-sm-shrink": PropTypes.string,
  "flex-md-grow": PropTypes.string,
  "flex-md-shrink": PropTypes.string,
  "flex-lg-grow": PropTypes.string,
  "flex-lg-shrink": PropTypes.string,
  "flex-xl-grow": PropTypes.string,
  "flex-xl-shrink": PropTypes.string,
  "order": orderTypes,
  "order-sm": orderTypes,
  "order-md": orderTypes,
  "order-lg": orderTypes,
  "order-xl": orderTypes,
};

export default FlexItem;
