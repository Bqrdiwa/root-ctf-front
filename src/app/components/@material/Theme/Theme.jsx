import React from 'react';
import { ThemeProvider } from "react-jss";
import { useSelector } from "react-redux";
import { theme } from "./theme-jss";

export const Theme = ({children}) => {

  const language = useSelector(state => state.language);
  const createdTheme = theme({...language});

  return (
    <ThemeProvider theme={createdTheme}>
      {children}
    </ThemeProvider>
  )
}
