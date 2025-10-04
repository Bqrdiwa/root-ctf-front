import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

export const BorderRadius = (props) => {

  let className = "rounded";  // default border radius if none were declared
  let style = "";             // used for storing border-radius style if size prop is custom
  let children = "";          // used for passing prop to parent component's children
  let isCustom = false;       // is always false and changed to true only when size prop is custom 

  // determine which border radius size was inputted in size prop
  // use plain css for custome size and bootstarp classes for others
  if(props.size === "none"){
    className = "rounded-0";
  }else if (props.size === "low") {
    className = "rounded-sm";
  }else if (props.size === "normal") {
    className = "rounded";
  }else if (props.size === "high") {
    className = "rounded-lg";
  }else if (props.size === "circle") {
    className = "rounded-circle";
  }else{
    isCustom = true;
    style = {"border-radius": props.size};
  }

  // if size props is custom, pass 'style' to children, else pass 'className'
  // passing data to children, uses maping and cloning
  if(isCustom){
    children = React.Children.map(props.children, child => {
      return React.cloneElement(child, {
        style
      });
    });
  }else{
    children = React.Children.map(props.children, child => {
      return React.cloneElement(child, {
        className
      });
    });
  }

  return (
    <div>
       { children }
    </div>
  )
}

BorderRadius.propTypes = {
  size: PropTypes.string,
}

export default BorderRadius;

