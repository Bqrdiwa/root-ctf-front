import PropTypes from 'prop-types';
import { Card as CardStrap } from 'reactstrap';

export const Card = CardStrap;


Card.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    inverse: PropTypes.bool,
    color: PropTypes.string,
    body: PropTypes.bool,
    className: PropTypes.string
};

export default Card;