
import PropTypes from 'prop-types';
import { CardText as CardTextStrap } from 'reactstrap';

export const CardText = CardTextStrap;

CardText.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};


export default CardText;