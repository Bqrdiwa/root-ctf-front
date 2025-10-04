import React from 'react';
import PropTypes from 'prop-types';
import apaLog from '../../../landing/landingPart/accountPart/image/apa-new-logo.png';
import Div from '../../../@material/Base/Div';
import { useClassNameMerge } from '../../../@material/hooks/useClassNameMerge';
import Image from '../../../@material/Media/Image';

 const propNames = [
  "className"
];

export const Logo = (props) => {
  const [className, otherProps] = useClassNameMerge(propNames, props, "div-logo-External")
  return (
    <Div {...otherProps} className={className} >
      <Div className="logo1External">
        {/* <Image src={apaLog} size="auto"/> */}
      </Div>
    </Div>
  );
};

Logo.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}


export default Logo;