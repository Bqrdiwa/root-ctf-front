import React from 'react';
import PropTypes from 'prop-types';
import Logo from './logo';
import {Div} from '../../../@material/Base/Div';
import { useClassNameMerge } from '../../../@material/hooks/useClassNameMerge';
const propNames = [
  "className"
];
export const HeadBrand = (props) => {
  const [className, otherProps] = useClassNameMerge(propNames, props, "HeadBrandExternal")
  return (
    <Div {...otherProps} className={className} >
      <Logo/>
    </Div>
  );
};

HeadBrand.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

export default HeadBrand;