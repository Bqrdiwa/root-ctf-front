import PropTypes from 'prop-types';
import { CardImg as CardImgStrap } from 'reactstrap';

export const CardImg = CardImgStrap;

CardImg.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
    top: PropTypes.bool,
    bottom: PropTypes.bool
};

export default CardImg;