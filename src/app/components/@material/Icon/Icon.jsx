import React from 'react';
import * as AllIcons from "../../../store/constant/IconLoaders/Icon";
import { useClassNameMerge } from '../hooks/useClassNameMerge';
import Image from '../Media/Image';
const propNames = [
  "text",
  "className",
];

export const Icon = ({ name,color,size=24,fill,style,margin,padding,onClick, ...props}) => {

  const foundicon = AllIcons[name];

  const IconPresenter =
    Object.keys(AllIcons).includes(name)
      ? foundicon
      : AllIcons["info"]



  const [className, otherProps] = useClassNameMerge(propNames, props, "icon-box");
  const injectProps = {
    ...otherProps,
    className,
    onClick,
  }
  
  const injectStyle={
    ...style,
    fill:fill,
    margin:margin,
    padding:padding,
    width: size || 24,
    height: size || 24,
  }

  return (
    (!foundicon) ? 
    <Image src={name} {...injectProps} style={injectStyle} size={`${size}px`} /> 
    :
      <IconPresenter
        {...injectProps} 
        style={injectStyle}
      />
  );
};

export default Icon;
