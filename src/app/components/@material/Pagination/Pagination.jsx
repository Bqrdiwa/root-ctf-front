import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as PaginationStrap } from 'reactstrap';

export const Pagination = PaginationStrap;

Pagination.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  listClassName: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string
};

export default Pagination;