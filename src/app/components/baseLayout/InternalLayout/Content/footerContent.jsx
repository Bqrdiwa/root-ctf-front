import React from 'react'
import { withRouter, Switch, Route } from 'react-router';
import * as Routes from '../../../../store/constant/RoutesAndLink/routes';
import Confidentiality from '../../../landing/landingPart/footerPart/notice/Confidentiality';
import TermsofService from '../../../landing/landingPart/footerPart/notice/TermsofService';
import LegalDisclaimer from '../../../landing/landingPart/footerPart/notice/LegalDisclaimer';
import MainBox from '../MainInternal/MainInternal';
import MainContent from '../MainInternal/MainContent';


export const footerContent = withRouter((props) => {
  return (
    <div>
      <MainBox >
        <MainContent color="lightgray">
          <Switch>
            <Route path={`${props.match.url}/${Routes.ROUTE_CONFIDENTIALITY}`} component={Confidentiality} />
            <Route path={`${props.match.url}/${Routes.ROUTE_LEGALDISCLAIMING}`} component={LegalDisclaimer} />
            <Route path={`${props.match.url}/${Routes.ROUTE_TERMOFSERVICE}`} component={TermsofService} />
          </Switch>
        </MainContent>
      </MainBox>

    </div>
  )
});

export default footerContent;
