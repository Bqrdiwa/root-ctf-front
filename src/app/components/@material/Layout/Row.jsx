import PropTypes from 'prop-types';
import { Row as RowStrap } from 'reactstrap';

export const Row = RowStrap;

Row.propTypes = {
  noGutters: PropTypes.bool,
  form: PropTypes.bool,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Row;