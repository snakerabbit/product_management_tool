import merge from 'lodash/merge';
import {
  RECEIVE_SESSION_ERRORS, RECEIVE_PRODUCT
} from '../actions/product_actions';

const _nullErrors = [];
export default (state = [], action) =>{
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_PRODUCT:
      return _nullErrors;
    default:
      return state;
  }
};
