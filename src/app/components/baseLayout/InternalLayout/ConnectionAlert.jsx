import React from 'react'
import { useSelector } from 'react-redux';
import { Box } from '../../@material/Box';
import { Alert } from 'reactstrap';

export const ConnectionAlert = ({ container }) => {

  const lost_connections = useSelector(state => state.app_attrs.lost_connections);
  const lang = useSelector(state => state.language.trans);
  const Container = container || Box;

  return lost_connections.length > 0
    ? (
      <Container>
        <Alert color="danger" className="m-0">
          {lang.pointSocketDown}
        </Alert>
      </Container>
    ) : null;
}
