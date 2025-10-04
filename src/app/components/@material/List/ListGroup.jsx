import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup as ListGroupStrap } from 'reactstrap';

export const ListGroup = ({ className, ...props }) => {

  const { horizontal } = props;
  let combinedclass = "rootme-list";
  combinedclass += (horizontal) ? " horizontal" : "";
  combinedclass += (className) ? " " + className : "";

  return (
    <ListGroupStrap className={combinedclass} {...props}>
    </ListGroupStrap>
  );
}

ListGroup.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // boolean to render list group items edge-to-edge in a parent container
  flush: PropTypes.bool,
  // boolean to render list group items horizontal. string for specific breakpoint, or true to be always horizontal
  horizontal: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  href: PropTypes.string
}

export default ListGroup;