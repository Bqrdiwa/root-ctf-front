import React from 'react'
import PropTypes from 'prop-types'
import { ButtonDropdown as ButtonDropdownStrap } from 'reactstrap';

export const ButtonDropdown = ButtonDropdownStrap;

ButtonDropdown.propTypes = {
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  toggle: PropTypes.func
}

export default ButtonDropdown;

