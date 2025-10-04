import React from 'react'
import PropTypes from 'prop-types'
import {DropdownItem as DropdownItemStrap} from 'reactstrap';

export const DropdownItem=DropdownItemStrap;

DropdownItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  header: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.bool // default: true
};

export default DropdownItem;

