import PropTypes from 'prop-types';
import { Container as ContainerStrap } from 'reactstrap';

export const Container = ContainerStrap;

Container.propTypes = {
  fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  background: PropTypes.string,
};

export default Container;