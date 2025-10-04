import React from 'react';
import PropTypes from 'prop-types';
import { PaginationLink as PaginationLinkStrap } from 'reactstrap';

export const PaginationLink = PaginationLinkStrap;

PaginationLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  next: PropTypes.bool,
  previous: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string
};

export default PaginationLink;