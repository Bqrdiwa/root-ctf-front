
import PropTypes from 'prop-types';
import { CardHeader as CardHeaderStrap } from 'reactstrap';

export const CardHeader = CardHeaderStrap;

CardHeader.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

export default CardHeader;
