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
export const MainBox = ({ style,color,height,width,...props }) => {
  const [className, otherProps] = useClassNameMerge(propNames, props, "")

  return (
    <Div
      style={{
        ...style,
        height:height,
        minWidth:width,
        backgroundColor: color
      }}
      {...otherProps}
      className={className}
    >

    </Div>

  );
};

export default MainBox;
