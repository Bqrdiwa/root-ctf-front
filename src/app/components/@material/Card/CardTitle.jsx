
import PropTypes from 'prop-types';
import { CardTitle as CardTitleStrap } from 'reactstrap';


export const CardTitle = CardTitleStrap;

CardTitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

export default CardTitle;