import React from 'react';
import PropTypes from 'prop-types';

export const Nothing = ({ children }) => (
  <>
    {children}
  </>
);

Nothing.propTypes = {
  children: PropTypes.any,
};

export default Nothing;
