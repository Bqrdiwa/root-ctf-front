import PropTypes from 'prop-types';
import { NavItem as NavItemStrap } from 'reactstrap';

export const NavItem = NavItemStrap;

NavItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
};

export default NavItem;