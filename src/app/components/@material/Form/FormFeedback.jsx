
import PropTypes from 'prop-types'
import { FormFeedback as FormFeedbackStrap } from 'reactstrap';

export const FormFeedback = FormFeedbackStrap;

FormFeedback.propTypes = {
  children: PropTypes.node,
  // Pass in a Component to override default element
  tag: PropTypes.string, // default: 'div'
  className: PropTypes.string,
  cssModule: PropTypes.object,
  valid: PropTypes.bool, // default: undefined
  tooltip: PropTypes.bool
};

export default FormFeedback;

