import PropTypes from 'prop-types';
import { CardGroup as CardGroupStrap } from 'reactstrap';

export const CardGroup = CardGroupStrap;

CardGroup.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

export default CardGroup;