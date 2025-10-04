import PropTypes from 'prop-types';
import { CardDeck as CardDeckStrap } from 'reactstrap';

export const CardDeck = CardDeckStrap;

CardDeck.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

export default CardDeck;