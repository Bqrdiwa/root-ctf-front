import React from 'react';
import PropTypes from 'prop-types';
import { classNameMerge } from './app/utils/Tools/classNameMerge';



const propName =
  [
    "text-primary",
    "text-secondary",
    "text-success",
    "text-dange",
    "text-warning",
    "text-info",
    "text-light",
    "text-dark",
    "text-body",
    "text-muted",
    "text-white",
    "text-black-50",
    "text-white-50",
    "className",
  ];

export const TextColor = (props) => {

  const [className, otherProps] = classNameMerge(propName, props, "");
  

  return (
    <div {...otherProps} className={className} />
  );

};

TextColor.propTypes = {
  children: PropTypes.string,
};

export default TextColor;