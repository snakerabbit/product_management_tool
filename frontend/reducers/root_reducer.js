import { combineReducers } from 'redux';
import ProductsReducer from './products_reducer';
import ErrorsReducer from './errors_reducer';

export default combineReducers({
  products: ProductsReducer,
  errors: ErrorsReducer
});
