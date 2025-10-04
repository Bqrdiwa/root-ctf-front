import React from 'react';
import PropTypes from 'prop-types';
import {NavbarToggler as NavbarTogglerStrap} from 'reactstrap';

export const NavbarToggler=NavbarTogglerStrap;

NavbarToggler.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

export default NavbarToggler;