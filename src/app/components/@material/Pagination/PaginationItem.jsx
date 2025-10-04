import React from 'react';
import PropTypes from 'prop-types';
import { PaginationItem as PaginationItemStrap } from 'reactstrap';

export const PaginationItem = PaginationItemStrap;

PaginationItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default PaginationItem;