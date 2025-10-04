
import PropTypes from 'prop-types';
import {FormText as FormTextStrap} from 'reactstrap';

export const FormText=FormTextStrap;

FormText.propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'small'
  color: PropTypes.string, // default: 'muted'
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

export default FormText;

