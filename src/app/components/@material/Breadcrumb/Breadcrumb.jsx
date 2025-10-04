import React from 'react'
import PropTypes from 'prop-types'
import {Breadcrumb as BreadcrumbStrap} from 'reactstrap';

export const Breadcrumb=BreadcrumbStrap;

Breadcrumb.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  listClassName: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  'aria-label': PropTypes.string
};

export default Breadcrumb;

