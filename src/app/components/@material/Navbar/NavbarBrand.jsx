import React from 'react';
import PropTypes from 'prop-types';
import {NavbarBrand as NavbarBrandStrap} from 'reactstrap';

export const NavbarBrand=NavbarBrandStrap;

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}
export default NavbarBrand;