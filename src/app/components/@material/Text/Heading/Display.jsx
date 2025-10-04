import React from 'react';
import PropTypes from 'prop-types';


export const Display = ({ priority, ...props }) => {
    
  const className = [props.className, 'display-' + priority].join(" ").trim();
  
  return (
    <h1 {...props} classname={className}  />
  );
};

Display.propTypes = {
  priority: PropTypes.string,
};

export default Display;