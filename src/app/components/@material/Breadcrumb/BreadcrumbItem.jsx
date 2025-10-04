import React from 'react'
import PropTypes from 'prop-types'
import {BreadcrumbItem as BreadcrumbItemStrap} from 'reactstrap';

export const BreadcrumbItem=BreadcrumbItemStrap;

BreadcrumbItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

export default BreadcrumbItem;

