import React from 'react';
import PropTypes from 'prop-types';
import Div from '../../../@material/Base/Div';
import { useClassNameMerge } from '../../../@material/hooks/useClassNameMerge';
import InLink from '../../../@material/Link/InLink';
import Logout from '../../../account/logout/Logout';
import ImageAvatar from './ImageAvatar';

const propNames = [
  "className"
];

export const Avatar = (props) => {

  const [className, otherProps] = useClassNameMerge(propNames, props, "icon-navigation")

  return (
    <Div {...otherProps} className={className}>
      <Div className="avater-dropdown avatar pl-1 pr-1">
        <InLink to="profile"><ImageAvatar/></InLink>
      </Div>
    </Div>

  );
};

Avatar.propTypes = {
  className: PropTypes.string,
};

export default Avatar;