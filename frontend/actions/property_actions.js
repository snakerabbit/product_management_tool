import * as PropertyApiUtil from '../util/properties_api_util';
export const RECEIVE_ALL_PROPERTIES = "RECEIVE_ALL_PROPERTIES";
export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY';

const receiveAllProperties = (properties) =>{
  return{
    type: RECEIVE_ALL_PROPERTIES,
    properties
  };
};

const receiveProperty = property =>{
  return({
    type: RECEIVE_PROPERTY,
    property
  });
};


export const fetchProperties = () => dispatch => (
  PropertyApiUtil.fetchProperties().then(properties => dispatch(receiveAllProperties(properties)))
);

export const fetchProperty = id => dispatch => (
  PropertyApiUtil.fetchProperty(id).then(property => dispatch(receiveProperty(property)))
);

export const createProperty = property => dispatch => (
  PropertyApiUtil.createProperty(property).then(newProperty => dispatch(receiveProperty(newProperty)))
);
