import React from 'react';
import HeadNav from './Navigation/HeadNav';
import Content from './Content/Content';
import SideNav from './Sidbar/SideNav';

import { Div } from '../../@material/Base';
export const InternalLayout = (props) => {
  return (
    <Div className="MainLayout">
      <HeadNav />
      <Div className="Content">
        <SideNav />
        <Content/>
      </Div>
    </Div>
  );
};

export default InternalLayout;
