import React from 'react';
import PropTypes from 'prop-types';
import {NavbarText as NavbarTextStrap} from 'reactstrap';

export const NavbarText=NavbarTextStrap;

NavbarText.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

export default NavbarText;