import React from 'react';
import PropTypes from 'prop-types';
import { Div } from "../Base";
import { useClassNameMerge } from '../hooks/useClassNameMerge';

const propNames = [
  "px", "py", "pt", "pb", "pr", "pl", "p",
  "px-xs", "py-xs", "pt-xs", "pb-xs", "pr-xs", "pl-xs", "p-xs",
  "px-sm", "py-sm", "pt-sm", "pb-sm", "pr-sm", "pl-sm", "p-sm",
  "px-md", "py-md", "pt-md", "pb-md", "pr-md", "pl-md", "p-md",
  "px-lg", "py-lg", "pt-lg", "pb-lg", "pr-lg", "pl-lg", "p-lg",
  "px-xl", "py-xl", "pt-xl", "pb-xl", "pr-xl", "pl-xl", "p-xl",
  "mx", "my", "mt", "mb", "mr", "ml", "m",
  "mx-xs", "my-xs", "mt-xs", "mb-xs", "mr-xs", "ml-xs", "m-xs",
  "mx-sm", "my-sm", "mt-sm", "mb-sm", "mr-sm", "ml-sm", "m-sm",
  "mx-md", "my-md", "mt-md", "mb-md", "mr-md", "ml-md", "m-md",
  "mx-lg", "my-lg", "mt-lg", "mb-lg", "mr-lg", "ml-lg", "m-lg",
  "mx-xl", "my-xl", "mt-xl", "mb-xl", "mr-xl", "ml-xl", "m-xl",
  "d", "d-xs", "d-sm", "d-md", "d-lg", "d-xl",
  "w", "h"
]

export const Box = ({ style, size,width,height, backgroundColor, tag, ...props }) => {

  const [className, otherProps] = useClassNameMerge(propNames, props, "");

  const Tag = tag || Div;

  return (
    <Tag
      style={{
        ...style,
        width: size||width,
        height: size||height,
        backgroundColor: backgroundColor,
      }}
      {...otherProps}
      className={className}
    />
  )
};

const spacingTypes = PropTypes.string;
const displayTypes = PropTypes.string;


Box.propTypes = {
  "px": spacingTypes,
  "py": spacingTypes,
  "pt": spacingTypes,
  "pb": spacingTypes,
  "pr": spacingTypes,
  "pl": spacingTypes,
  "p": spacingTypes,
  "mx": spacingTypes,
  "my": spacingTypes,
  "mt": spacingTypes,
  "mb": spacingTypes,
  "mr": spacingTypes,
  "ml": spacingTypes,
  "m": spacingTypes,
  "px-xs": spacingTypes,
  "py-xs": spacingTypes,
  "pt-xs": spacingTypes,
  "pb-xs": spacingTypes,
  "pr-xs": spacingTypes,
  "pl-xs": spacingTypes,
  "p-xs": spacingTypes,
  "mx-xs": spacingTypes,
  "my-xs": spacingTypes,
  "mt-xs": spacingTypes,
  "mb-xs": spacingTypes,
  "mr-xs": spacingTypes,
  "ml-xs": spacingTypes,
  "m-xs": spacingTypes,
  "px-sm": spacingTypes,
  "py-sm": spacingTypes,
  "pt-sm": spacingTypes,
  "pb-sm": spacingTypes,
  "pr-sm": spacingTypes,
  "pl-sm": spacingTypes,
  "p-sm": spacingTypes,
  "mx-sm": spacingTypes,
  "my-sm": spacingTypes,
  "mt-sm": spacingTypes,
  "mb-sm": spacingTypes,
  "mr-sm": spacingTypes,
  "ml-sm": spacingTypes,
  "m-sm": spacingTypes,
  "px-md": spacingTypes,
  "py-md": spacingTypes,
  "pt-md": spacingTypes,
  "pb-md": spacingTypes,
  "pr-md": spacingTypes,
  "pl-md": spacingTypes,
  "p-md": spacingTypes,
  "mx-md": spacingTypes,
  "my-md": spacingTypes,
  "mt-md": spacingTypes,
  "mb-md": spacingTypes,
  "mr-md": spacingTypes,
  "ml-md": spacingTypes,
  "m-md": spacingTypes,
  "px-lg": spacingTypes,
  "py-lg": spacingTypes,
  "pt-lg": spacingTypes,
  "pb-lg": spacingTypes,
  "pr-lg": spacingTypes,
  "pl-lg": spacingTypes,
  "p-lg": spacingTypes,
  "mx-lg": spacingTypes,
  "my-lg": spacingTypes,
  "mt-lg": spacingTypes,
  "mb-lg": spacingTypes,
  "mr-lg": spacingTypes,
  "ml-lg": spacingTypes,
  "m-lg": spacingTypes,
  "px-xl": spacingTypes,
  "py-xl": spacingTypes,
  "pt-xl": spacingTypes,
  "pb-xl": spacingTypes,
  "pr-xl": spacingTypes,
  "pl-xl": spacingTypes,
  "p-xl": spacingTypes,
  "mx-xl": spacingTypes,
  "my-xl": spacingTypes,
  "mt-xl": spacingTypes,
  "mb-xl": spacingTypes,
  "mr-xl": spacingTypes,
  "ml-xl": spacingTypes,
  "m-xl": spacingTypes,
  "d": displayTypes,
  "d-xs": displayTypes,
  "d-sm": displayTypes,
  "d-md": displayTypes,
  "d-lg": displayTypes,
  "d-xl": displayTypes,
};

export default Box;