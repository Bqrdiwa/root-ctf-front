import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as LINKS from "../../../store/constant/RoutesAndLink/links";


export const InLink = ({ to, params, search, hash, onRoute,direct,...rest} ) => {
  
  const handleClick = useCallback(
    () => onRoute && onRoute(),
    [onRoute],
  
  );

  const href =
  direct
    ? 
    to
    :
    Object.keys(LINKS).includes(to.toUpperCase())
    ?
    LINKS[to.toUpperCase()](params, search, hash)
      :
      "";
    
  return (
    <Link  to={href} onClick={handleClick} {...rest} />
  );
};

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.any,
  onRoute: PropTypes.func,
  params: PropTypes.arrayOf(
    PropTypes.string
  ),
  serach: PropTypes.arrayOf(
    PropTypes.string
  ),
  hash: PropTypes.string,
};

export default InLink;
