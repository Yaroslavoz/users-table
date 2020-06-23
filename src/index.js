import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/table';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore()


ReactDOM.render(
  <Provider store={store}>
    <Table />
  </Provider>,  
  document.getElementById('root')
);


