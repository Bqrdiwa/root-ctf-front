
import PropTypes from 'prop-types';
import { CardSubtitle as CardSubtitleStrap } from 'reactstrap';

export const CardSubtitle = CardSubtitleStrap;

CardSubtitle.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

export default CardSubtitle;