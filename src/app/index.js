
import "../config";
import React from 'react';
import ReactDOM from 'react-dom';
import './components/baseLayout/style/style.css';
import './statics/css/main.css';
import Main from '../app/components/routers/Main';
import './statics/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReducerProvider } from "./components/@material/Redux";
import store from "./components/@material/Redux/predefinedStore";
import { ThemeProvider } from "./components/@material/Theme";

ReactDOM.render(
  <ReducerProvider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </BrowserRouter>
  </ReducerProvider>
  , document.getElementById('root'));