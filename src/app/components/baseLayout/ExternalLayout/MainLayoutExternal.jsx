import React from 'react';
import MainBox from './MainExternal/MainExternal';
import HeadNav from '../ExternalLayout/Navigation/HeadNav';
import Content from '../ExternalLayout/Content/Content';

export const ExternalLayout = (props) => {
  return (
    <>
      <MainBox color="white" height="100vh">
        <HeadNav />
        <Content />
      </MainBox>
    </>

  );
};

export default ExternalLayout;
