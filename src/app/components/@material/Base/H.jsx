import React from 'react';
import PropTypes from 'prop-types';

export const H = ({ priority, ...props }) => {

  const Tag = `h${priority}`;

  return (
    <Tag {...props} />
  )
};

H.propTypes = {
  priority: PropTypes.any,
  children: PropTypes.any,
};

export default H;
