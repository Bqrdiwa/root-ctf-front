
import PropTypes from 'prop-types';
import { CardFooter as CardFooterStrap } from 'reactstrap';

export const CardFooter = CardFooterStrap;

CardFooter.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

export default CardFooter;