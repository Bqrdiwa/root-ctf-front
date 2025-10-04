import React from 'react';
import PropTypes from 'prop-types';
import { classNameMerge } from './app/utils/Tools/classNameMerge';

const propName =
  [
    "text-justify",
    "text-left",
    "text-right",
    "text-center",
    "text-wrap",
    "text-nowrap",
    "text-break",
    "text-lowercase",
    "text-uppercase",
    "text-capitalize",
    "font-weight-bold",
    "font-weight-bolder",
    "font-weight-normal",
    "font-weight-light",
    "font-weight-lighter",
    "font-italic",
    "className",
  ];

export const TextUtils = (props) => {

  const [className, otherProps] = classNameMerge(propName, props, "");

  return (
    <div {...otherProps} className={className} />
  );
};

TextUtils.propTypes = {
  children: PropTypes.string,
};

export default TextUtils;