import React from 'react'
import PropTypes from 'prop-types'
import {DropdownToggle as DropdownToggleStrap} from 'reactstrap';

export const DropdownToggle=DropdownToggleStrap;


DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool
}

export default DropdownToggle;

