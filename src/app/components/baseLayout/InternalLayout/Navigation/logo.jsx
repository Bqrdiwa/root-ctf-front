import React from 'react';
import apalogo from '../Image/apa-new-logo.png';
import PropTypes from 'prop-types';
import rootme from '../Image/poster-title-en-ctf.png';
import Div from '../../../@material/Base/Div';
import Image from '../../../@material/Media/Image';
import { useClassNameMerge } from '../../../@material/hooks/useClassNameMerge';

const propNames = [
  "className"
];

export const Logo = (props) => {
  const [className, otherProps] = useClassNameMerge(propNames, props, "div-logo")
  return (
    <Div {...otherProps} className={className} >
      {/* <Div className="logo3">
        <Image src={apalogo}/>
      </Div>
      <Div className="logo2">
        <Image src={apalogo} />
      </Div> */}
    </Div>
  );
};

Logo.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}


export default Logo;