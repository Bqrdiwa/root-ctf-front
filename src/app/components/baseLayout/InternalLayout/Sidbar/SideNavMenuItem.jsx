import React, { useCallback, useState } from "react";
import typeIs from "../../../../utils/Tools/typeIs";
import FlexContainer from '../../../@material/Flex/FlexContainer';
import { Box } from '../../../@material/Box';
import InLink from '../../../@material/Link/InLink';
import { Li } from '../../../@material/Base/li';
import Icon from '../../../@material/Icon/Icon';
import { SideNavMenu } from "./SideNavMenu";

export const SideNavMenuItem = (props) => {

  const [dynamicSubItems, setdynamicSubItems] = useState(null);
  const { item } = props;
  const { effect } = item;

  const handleHover = useCallback(
    () => {
      if (typeIs(effect, "Function")) {
        effect(setdynamicSubItems);
      }
    },
    [effect],
  )

  return (
    <Li onMouseEnter={handleHover} onTouchStart={handleHover}>
      <InLink to={item.link} params={[item.id]}>
        <FlexContainer align-items="center">
          <span className=""><Icon name={item.icon} className="icon-item-circle icon-box-internal" size="24" /></span>
          <span className="px-1">{item.title}</span>
          {
            (item.submenu) ?
              <Box className={props.classes.IconBox}>
                <Icon className={props.classes.Icon} name="arrow_left" size="16" />
              </Box>
              : ""
          }
        </FlexContainer>
      </InLink>
      {(item.submenu) ? <SideNavMenu list={dynamicSubItems || item.submenu} className={props.classes.Menu} /> : null}
      {item.style ? <hr style={{ color: 'white' }} /> : null}
    </Li>
  )
}