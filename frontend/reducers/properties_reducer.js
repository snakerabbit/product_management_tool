import merge from 'lodash/merge';
import {RECEIVE_ALL_PROPERTIES, RECEIVE_PROPERTY} from '../actions/property_actions';

const PropertiesReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PROPERTIES:
      return action.properties;
    case RECEIVE_PROPERTY:
      let newState = merge({}, state);
      newState[action.property.id] = action.property;
      return newState;
    default:
      return state;
  }
};

export default PropertiesReducer;
