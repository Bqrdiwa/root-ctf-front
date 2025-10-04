import React from 'react'
import PropTypes from 'prop-types'
import {Jumbotron as JumbotronStrap} from 'reactstrap';

export const Jumbotron=JumbotronStrap;
 
Jumbotron.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
}

export default Jumbotron;

