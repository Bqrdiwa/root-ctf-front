import React from 'react';
import PropTypes from 'prop-types';
import Div from '../../../@material/Base/Div';
import { useClassNameMerge } from '../../../@material/hooks/useClassNameMerge';
import { FlexContainer } from '../.././../@material/Flex/FlexContainer';
import { FlexItem } from '../../../@material/Flex/FlexItem';
import { withRouter } from 'react-router-dom';
import InLink from '../../../@material/Link/InLink';
import { connect } from 'react-redux';
import { ChangeLanguage } from '../../../language/ChangeLanguage';
const propNames = [
  "className"
];

export const LeftNavigation = withRouter(({ staticContext, ...props }) => {
  const { lang } = props;
  const [className, otherProps] = useClassNameMerge(propNames, props, "leftNavigationExternal")
  return (
    <Div {...otherProps} className={className} >
      <FlexContainer p="3" align-items="center">
        <FlexItem>
          <InLink to="login">
            {lang.signIn}
          </InLink>
          {' '}{"/"}{' '}
          <InLink to="register">
            {lang.signUp}
          </InLink>
        </FlexItem>
        <FlexItem px="2">
          <ChangeLanguage />
        </FlexItem>
      </FlexContainer>
    </Div>
  );
});

LeftNavigation.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}




const mapStateToProps = (state) => ({
  lang: state.language.trans,
})

export default connect(mapStateToProps)(LeftNavigation)

