import { combineReducers } from 'redux';
import ProductsReducer from './products_reducer';
import ErrorsReducer from './errors_reducer';
import PropertiesReducer from './properties_reducer';
import ProductPropertiesReducer from './product_properties_reducer';

export default combineReducers({
  products: ProductsReducer,
  properties: PropertiesReducer,
  product_properties: ProductPropertiesReducer,
  errors: ErrorsReducer
});
