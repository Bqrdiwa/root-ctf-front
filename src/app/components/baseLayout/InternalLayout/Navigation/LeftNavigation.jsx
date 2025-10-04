import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import { useClassNameMerge } from '../../../@material/hooks/useClassNameMerge';
import FlexItem from '../../../@material/Flex/FlexItem';
import { ChangeLanguage } from '../../../language/ChangeLanguage';
import FlexContainer from '../../../@material/Flex/FlexContainer';
import Logout from '../../../account/logout/Logout';

const propNames = [
  "className"
];

export const LeftNavigation = ({ staticContext, ...props }) => {

  const [className, otherProps] = useClassNameMerge(propNames, props, "icon-navigation")
  return (
    <FlexContainer {...otherProps} className={className} align-items="center">
      <Avatar />
      <Logout />
      <FlexItem px="2">
        <ChangeLanguage />
      </FlexItem>
    </FlexContainer>
  );
}

LeftNavigation.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

export default LeftNavigation;