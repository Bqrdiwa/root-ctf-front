import React from 'react'
import PropTypes from 'prop-types';
import { Provider as ReducerProvider } from 'react-redux';
import { createStore } from 'redux';

export const Provider = ({ children, store }) => {

  const reducerStore = createStore(store);

  return (
    <ReducerProvider store={reducerStore}>
      {children}
    </ReducerProvider>
  );
};

Provider.propTypes = {
  store: PropTypes.func,
  children: PropTypes.node,
};

export default Provider;

