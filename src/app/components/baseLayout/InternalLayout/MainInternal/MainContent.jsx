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
export const MainContent = ({ style,color,...props }) => {
  const [className, otherProps] = useClassNameMerge(propNames, props, "mainContent")
  return (
    <Div
      style={{
        ...style,
        backgroundColor: color || "white",
        flexGrow:1,
      }}

      {...otherProps}
      className={className}
    >
    </Div>

  );
};

export default MainContent;
