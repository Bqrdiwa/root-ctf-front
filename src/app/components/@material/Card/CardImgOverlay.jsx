
import PropTypes from 'prop-types';
import { CardImgOverlay as CardImgOverlayStrap } from 'reactstrap';

export const CardImgOverlay = CardImgOverlayStrap;

CardImgOverlay.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

export default CardImgOverlay;