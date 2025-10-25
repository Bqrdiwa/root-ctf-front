import React from "react";
import PropTypes from "prop-types";
import RightNavigation from "./RightNavigation";
import LeftNavigation from "./LeftNavigation";
import Div from "../../../@material/Base/Div";
import { useClassNameMerge } from "../../../@material/hooks/useClassNameMerge";
import Icon from "../../../@material/Icon/Icon";

const propNames = ["className"];

export const HeadNavigation = (props) => {
  const [className, otherProps] = useClassNameMerge(
    propNames,
    props,
    "HeadNavigation"
  );

  return (
    <Div {...otherProps} className={className}>
      <div style={{ height: "100%", padding: "6px" }}>
        <Icon name="apaLogoEng" size="100%" />
      </div>
      <RightNavigation className="flex" />
      <LeftNavigation className="flex" />
    </Div>
  );
};

HeadNavigation.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default HeadNavigation;
