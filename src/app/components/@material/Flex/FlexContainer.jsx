import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { useClassNameMerge } from '../hooks/useClassNameMerge';

const propNames = [
  { name: "inline-flex", prefix: "d" },
  "flex-row",
  "flex-row-reverse",
  "flex-column",
  "flex-column-reverse",
  "flex-sm-row",
  "flex-sm-row-reverse",
  "flex-sm-column",
  "flex-sm-column-reverse",
  "flex-md-row",
  "flex-md-row-reverse",
  "flex-md-column",
  "flex-md-column-reverse",
  "flex-lg-row",
  "flex-lg-row-reverse",
  "flex-lg-column",
  "flex-lg-column-reverse",
  "flex-xl-row",
  "flex-xl-row-reverse",
  "flex-xl-column",
  "flex-xl-column-reverse",
  "justify-content",
  "justify-content-sm",
  "justify-content-md",
  "justify-content-lg",
  "justify-content-xl",
  "align-items",
  "align-items-sm",
  "align-items-md",
  "align-items-lg",
  "align-items-xl",
  "flex-nowrap",
  "flex-wrap",
  "flex-wrap-reverse",
  "flex-sm-nowrap",
  "flex-sm-wrap",
  "flex-sm-wrap-reverse",
  "flex-md-nowrap",
  "flex-md-wrap",
  "flex-md-wrap-reverse",
  "flex-lg-nowrap",
  "flex-lg-wrap",
  "flex-lg-wrap-reverse",
  "flex-xl-nowrap",
  "flex-xl-wrap",
  "flex-xl-wrap-reverse",
  "align-content",
  "align-content-sm",
  "align-content-md",
  "align-content-lg",
  "align-content-xl",
  "className",
];



export const FlexContainer = (props) => {

  const [className, otherProps] = useClassNameMerge(propNames, props, "d-flex")

  return (
    <Box {...otherProps} className={className}/>
  )
};

const justifyContentTypes = PropTypes.oneOf(["start", "end", "center", "between", "around"]);
const alignItemTypes = PropTypes.oneOf(["start", "end", "center", "baseline", "stretch"]);
const alignContentTypes = PropTypes.oneOf(["start", "end", "center", "between", "around"]);

FlexContainer.propTypes = {

  "flex-row": PropTypes.bool,
  "flex-row-reverse": PropTypes.bool,
  "flex-column": PropTypes.bool,
  "flex-column-reverse": PropTypes.bool,
  "flex-sm-row": PropTypes.bool,
  "flex-sm-row-reverse": PropTypes.bool,
  "flex-sm-column": PropTypes.bool,
  "flex-sm-column-reverse": PropTypes.bool,
  "flex-md-row": PropTypes.bool,
  "flex-md-row-reverse": PropTypes.bool,
  "flex-md-column": PropTypes.bool,
  "flex-md-column-reverse": PropTypes.bool,
  "flex-lg-row": PropTypes.bool,
  "flex-lg-row-reverse": PropTypes.bool,
  "flex-lg-column": PropTypes.bool,
  "flex-lg-column-reverse": PropTypes.bool,
  "flex-xl-row": PropTypes.bool,
  "flex-xl-row-reverse": PropTypes.bool,
  "flex-xl-column": PropTypes.bool,
  "flex-xl-column-reverse": PropTypes.bool,
  "justify-content": justifyContentTypes,
  "justify-content-sm": justifyContentTypes,
  "justify-content-md": justifyContentTypes,
  "justify-content-lg": justifyContentTypes,
  "justify-content-xl": justifyContentTypes,
  "align-items": alignItemTypes,
  "align-items-sm": alignItemTypes,
  "align-items-md": alignItemTypes,
  "align-items-lg": alignItemTypes,
  "align-items-xl": alignItemTypes,
  "flex-nowrap": PropTypes.bool,
  "flex-wrap": PropTypes.bool,
  "flex-wrap-reverse": PropTypes.bool,
  "flex-sm-nowrap": PropTypes.bool,
  "flex-sm-wrap": PropTypes.bool,
  "flex-sm-wrap-reverse": PropTypes.bool,
  "flex-md-nowrap": PropTypes.bool,
  "flex-md-wrap": PropTypes.bool,
  "flex-md-wrap-reverse": PropTypes.bool,
  "flex-lg-nowrap": PropTypes.bool,
  "flex-lg-wrap": PropTypes.bool,
  "flex-lg-wrap-reverse": PropTypes.bool,
  "flex-xl-nowrap": PropTypes.bool,
  "flex-xl-wrap": PropTypes.bool,
  "flex-xl-wrap-reverse": PropTypes.bool,
  "align-content": alignContentTypes,
  "align-content-sm": alignContentTypes,
  "align-content-md": alignContentTypes,
  "align-content-lg": alignContentTypes,
  "align-content-xl": alignContentTypes,
};



export default FlexContainer;
