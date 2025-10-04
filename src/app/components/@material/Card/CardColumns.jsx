import PropTypes from 'prop-types';
import { CardColumns as CardColumnsStrap } from 'reactstrap';

export const CardColumns = CardColumnsStrap;


CardColumns.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

export default CardColumns;