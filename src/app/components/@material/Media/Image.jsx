import React from 'react'
import Img from '../Base/Image';
import { useClassNameMerge } from '../hooks/useClassNameMerge';

const propNames =
  [
    "img-thumbnail",
    "rounded",
    "img-fluid",
    "className"
  ];

export const Image = ({src, size, style,width,height, ...props }) => {
  const [className, otherProps] = useClassNameMerge(propNames, props, "")
  return (
      <Img  
        src={src}
        style={{
          ...style,
          width: size|| width || 100,
          height: size|| height || 100,
        }}
        {...otherProps}
        className={className}
      />
  )
};

export default Image;
