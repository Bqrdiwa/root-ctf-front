import React, { useState } from 'react';
import Div from '../../../../../@material/Base/Div';
import Box from '../../../../../@material/Box/Box';
import { Nav, NavItem, NavLink } from '../../../../../@material/Nav';
import { TabContent, TabPane } from '../../../../../@material/Tabs';
import profile from './userprofile/ProfileUser';
import statistics from './userprofile/Statistic';
import Status from './userprofile/Status';
import { connect } from 'react-redux';




export const Tab = (props) => {

  const { lang } = props;

  const dataTab = [
    { id: 1, ActiveTab: '1', TabName: lang.profile, ContentPage: profile },
    { id: 2, ActiveTab: '2', TabName: lang.status, ContentPage: Status },
    { id: 3, ActiveTab: '3', TabName: lang.statistics, ContentPage: statistics },
  ];

  const [activeTab, setActiveTab] = useState(1);

  let pagetab = dataTab.find(tab => tab.id === activeTab);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);

  }


  return (
    <Div>
      <Box p="3" className="MainBox-font ">
        <Nav tabs>
          {
            dataTab.map((tab) => (
              <NavItem key={tab.id}>
                <NavLink
                  className={{ active: activeTab == tab.ActiveTab }}
                  onClick={() => { toggle(tab.id); }}
                >
                  {tab.TabName}
                </NavLink>
              </NavItem>
            ))
          }
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId={activeTab}>
            <pagetab.ContentPage />
          </TabPane>
        </TabContent>

      </Box>
    </Div>
  );
};





const mapStateToProps = (state) => ({
  lang: state.language.trans,
})

export default connect(mapStateToProps)(Tab)

