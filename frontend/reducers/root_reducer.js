import { combineReducers } from 'redux';
import ProductsReducer from './products_reducer';

export default combineReducers({
  products: ProductsReducer
});
