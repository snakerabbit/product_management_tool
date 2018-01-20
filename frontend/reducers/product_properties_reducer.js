import merge from 'lodash/merge';
import {RECEIVE_ALL_PRODUCT_PROPERTIES, RECEIVE_PRODUCT_PROPERTY} from '../actions/product_property_actions';

const ProductPropertiesReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PRODUCT_PROPERTIES:
      return action.product_properties;
    case RECEIVE_PRODUCT_PROPERTY:
      let newState = merge({}, state);
      newState[action.product_property.id] = action.product_property;
      return newState;
    default:
      return state;
  }
};

export default ProductPropertiesReducer;
