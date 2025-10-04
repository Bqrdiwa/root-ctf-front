import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from "react-router-dom";
import * as Routes from "../../../../store/constant/RoutesAndLink/routes";
import { Div } from '../../../@material/Base';
import SponserPart from '../../../landing/landingPart/sponserPart/SponserPart';
import FooterPart from '../../../landing/landingPart/footerPart/FooterPart';
import AccountPart from '../../../landing/landingPart/accountPart/AccountPart';
import Award from '../../../landing/landingPart/award/award';
import FinalStatistic from '../../../landing/landingPart/FinalStatistic/finalStatistic';
import Confidentiality from '../../../landing/landingPart/footerPart/notice/Confidentiality';
import LegalDisclaimer from '../../../landing/landingPart/footerPart/notice/LegalDisclaimer';
import TermsofService from '../../../landing/landingPart/footerPart/notice/TermsofService';
import Discord from '../../../landing/landingPart/discord';

export const Content = withRouter((props) => {
  return (
    <Div>
      <Switch>
        <Route path={`/${Routes.ROUTE_EXTERNAL}/${Routes.ROUTE_CONFIDENTIALITY}`} component={Confidentiality} />
        <Route path={`/${Routes.ROUTE_EXTERNAL}/${Routes.ROUTE_LEGALDISCLAIMING}`} component={LegalDisclaimer} />
        <Route path={`/${Routes.ROUTE_EXTERNAL}/${Routes.ROUTE_TERMOFSERVICE}`} component={TermsofService} />
        <Route path="/" render={() => (
          <>
            <AccountPart />
            <Discord/>
            <Award />
            <SponserPart />
            <FinalStatistic />
          </>
        )} />
      </Switch>
      <FooterPart />
    </Div>
  );
});

export default Content;