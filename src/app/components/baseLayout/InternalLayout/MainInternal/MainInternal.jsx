import React from 'react';
import Div from '../../../@material/Base/Div';
import { useClassNameMerge } from '../../../@material/hooks/useClassNameMerge';

const propNames =
  [
    "color",
    "height",
    "style",
    "className",
  ];
export const MainBox = ({ style,width,height,color,...props }) => {
  const [className, otherProps] = useClassNameMerge(propNames, props, "mainBox")
  return (
    <Div
      style={{
        ...style,
        backgroundColor: color || "white",
        flexGrow:1,
        minwidth:width,
        height:height,
        
      }}

      {...otherProps}
      className={className}
    >
    </Div>

  );
};

export default MainBox;
