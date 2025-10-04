import React, { Component } from 'react'
import Box from '../../../../@material/Box/Box';
import PersonalInfornation from './params/PersonalInfornation';
import ChangePassword from './params/ChangePassword';

import { Card, CardBody} from '../../../../@material/Card';
import { Div } from '../../../../@material/Base';

export class MyParams extends Component {
  render() {
    return (
      <Box className="Box-dashboard">
        <Card>
        <CardBody>
          <Div>
            <PersonalInfornation />
            <ChangePassword/>
          </Div>
        </CardBody>
      </Card>
      </Box>
      
    )
  }
};

export default MyParams;
