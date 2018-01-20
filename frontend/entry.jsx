import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {fetchProducts} from './util/product_api_util';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //TESTS
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchProducts = fetchProducts;
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
