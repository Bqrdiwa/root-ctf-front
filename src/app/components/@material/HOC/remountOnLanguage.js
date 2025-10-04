import React from 'react';
import { useSelector } from "react-redux";

export const remountOnLanguage = Component => {
  return (props) => {
    const language = useSelector(state => state.language.apiTag);
    return (
      <Component {...props} key={language}/>
    )
  }
}
