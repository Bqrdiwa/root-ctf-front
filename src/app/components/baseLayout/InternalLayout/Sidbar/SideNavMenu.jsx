import React from 'react'
import { Ul } from '../../../@material/Base/Ul';
import { useSelector } from "react-redux";
import { createClasses } from '../../../@material/Theme';
import { SideNavMenuItem } from './SideNavMenuItem';

const useStyle = createClasses({
  Icon: {
    transformOrigin: "center center",
    transform: props => props.rtl ? "unset" : "rotate(180deg)"
  },
  IconBox: {
    marginRight: props => props.rtl ? "auto" : "unset",
    marginLeft: props => props.rtl ? "unset" : "auto",
  },
  Menu: {
    right: props => props.rtl ? "100%" : "unset",
    left: props => props.rtl ? "unset" : "100%",
  }
})

export function SideNavMenu(props) {

  const language = useSelector(state => state.language);
  const classes = useStyle({ rtl: language.attr.rightToLeft });

  const { list } = props;

  return (
    <Ul className={props.className}>
      {
        list.map(item => (
          <SideNavMenuItem
            key={item.id}
            item={item}
            classes={classes}
          />
        ))
      }
    </Ul >
  )
};