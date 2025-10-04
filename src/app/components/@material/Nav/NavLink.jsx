
import PropTypes from 'prop-types';
import { NavLink as NavLinkStrap } from 'reactstrap';

export const NavLink = NavLinkStrap;

NavLink.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  // pass in custom element to use
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // ref will only get you a reference to the NavLink component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  href: PropTypes.string
};

export default NavLink;