import React from 'react';
import PropTypes from 'prop-types';


export const Head = ({ priority, ...props }) => {
    
  let Tag = `h${priority}`;
  
  return (
    <Tag {...props} />
  );
};

Head.propTypes = {
  priority: PropTypes.string,
};

export default Head;