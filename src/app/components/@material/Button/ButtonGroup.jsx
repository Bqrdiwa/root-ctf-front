import React from 'react'
import PropTypes from 'prop-types'
import {ButtonGroup as ButtonGroupStrap} from 'reactstrap';
export const ButtonGroup=ButtonGroupStrap;


ButtonGroup.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.string,
  vertical: PropTypes.bool
}

export default ButtonGroup;

