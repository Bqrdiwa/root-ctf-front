import PropTypes from 'prop-types';
import { CardBody as CardBodyStrap } from 'reactstrap';

export const CardBody = CardBodyStrap;

CardBody.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

export default CardBody;