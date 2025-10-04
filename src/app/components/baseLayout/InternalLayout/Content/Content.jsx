import React, { useEffect } from 'react';
import MainBox from '../MainInternal/MainInternal';
import { Route, withRouter, Switch, Redirect, useLocation, browserHistory } from 'react-router';
import Profile from '../Profile/Profile';
import MainContent from '../MainInternal/MainContent';
import * as Routes from '../../../../store/constant/RoutesAndLink/routes';

import FooterPart from '../../../landing/landingPart/footerPart/FooterPart';
import Member from '../Sidbar/pages/members/Member';
import Ranking from '../Sidbar/pages/ranking/Ranking';

import Challenges from '../Sidbar/pages/challenges/Challenges';
import Challenge from '../Sidbar/pages/challenges/Challange';
import AskQuestion from '../Navigation/askQuestion/AskQuestion';
import UserProfile from '../Sidbar/pages/ranking/UserProfile';
import ChallengeTest from '../Sidbar/pages/challenges/test';
import UnderConstrucion from '../../../underConstruction/UnderConstruction';

import ReportChallenge from '../../InternalLayout/Sidbar/pages/report/reportChallenge';
import ReportMember from '../../InternalLayout/Sidbar/pages/report/reportMember';
import ReportSource from '../../InternalLayout/Sidbar/pages/report/reportSource';
import ReportRanking from '../../InternalLayout/Sidbar/pages/report/reportRanking';
import rulesPage from '../../InternalLayout/Sidbar/pages/Rules/rules';
import { Box } from '../../../@material/Box';
import { ConnectionAlert } from '../ConnectionAlert';
import Confidentiality from '../../../landing/landingPart/footerPart/notice/Confidentiality';
import LegalDisclaimer from '../../../landing/landingPart/footerPart/notice/LegalDisclaimer';
import TermsofService from '../../../landing/landingPart/footerPart/notice/TermsofService';


export const Content = withRouter((props) => {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <MainBox >
        <MainContent color="lightgray">
          <ConnectionAlert
            container={({ children }) => <Box pt="3" px="3">{children}</Box>}
          />
          <Switch>
            <Route path={`${props.match.url}/${Routes.ROUTE_CONFIDENTIALITY}`} component={Confidentiality} />
            <Route path={`${props.match.url}/${Routes.ROUTE_LEGALDISCLAIMING}`} component={LegalDisclaimer} />
            <Route path={`${props.match.url}/${Routes.ROUTE_TERMOFSERVICE}`} component={TermsofService} />
            <Route path={`${props.match.url}/${Routes.ROUTE_INTERNAL_PROFILE}`} component={Profile} />

            <Route path={`${props.match.url}/${Routes.ROUTE_MEMBER}`} component={Member} />
            <Route path={`${props.match.url}/${Routes.ROUTE_RANKING}`} component={Ranking} />
            <Route path={`${props.match.url}/${Routes.ROUTE_USERPROFILE}`} component={UserProfile} />
          
            <Route path={`${props.match.url}/${Routes.ROUTE_ASK_QUESTION}`} component={AskQuestion} />
            <Route path={`${props.match.url}/${Routes.ROUTE_CHALLENGES}`} component={Challenges} />{/* call challenges/:challenge_id(submenu) */}
            <Route path={`${props.match.url}/${Routes.ROUTE_CHALLENGE}`} component={Challenge} />{/* call summery of challenge(menu)*/}
            <Route path={`${props.match.url}/${Routes.ROUTE_TEST}`} component={ChallengeTest} />{/* call challenge_test/challenge_id(category of challenges for start challenge)*/}
            <Route path={`${props.match.url}/${Routes.ROUTE_REPORT_SOURCE}`} component={ReportSource} />{/*report source*/}
            <Route path={`${props.match.url}/${Routes.ROUTE_REPORT_CHALLENEG}`} component={ReportChallenge} />{/*report challenge*/}
            <Route path={`${props.match.url}/${Routes.ROUTE_REPORT_MEMBER}`} component={ReportMember} />{/*report member*/}
            <Route path={`${props.match.url}/${Routes.ROUTE_REPORT_RANKING}`} component={ReportRanking} />{/*report ranking*/}
            <Route path={`${props.match.url}/${Routes.ROUTE_RULES}`} component={rulesPage} />
            <Route path={`${props.match.url}/${Routes.ROUTE_UNDER_CONSTRUCTION}`} component={UnderConstrucion} />
            <Redirect to={`/${Routes.ROUTE_INTERNAL}/${Routes.ROUTE_CHALLENGE}`} />
          </Switch>
        </MainContent>

        <FooterPart />

      </MainBox>
    </>

  );
});

export default Content;

