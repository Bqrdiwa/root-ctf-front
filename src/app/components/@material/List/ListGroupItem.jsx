import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem as ListGroupItemStrap } from 'reactstrap';

export const ListGroupItem = ListGroupItemStrap;


ListGroupItem.propTypes = {
  children: PropTypes.node,
};

export default ListGroupItem;
