import React from 'react'
import PropTypes from 'prop-types'
import { DropdownMenu as DropdownMenuStrap } from 'reactstrap';

export const DropdownMenu = DropdownMenuStrap;

DropdownMenu.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  flip: PropTypes.bool, // default: true,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  // Custom modifiers that are passed to DropdownMenu.js, see https://popper.js.org/popper-documentation.html#modifiers
  modifiers: PropTypes.object,
  persist: PropTypes.bool // presist the popper, even when closed. See #779 for reasoning
};

export default DropdownMenu;

