import * as ProductPropertyApiUtil from '../util/product_properties_api_util';
export const RECEIVE_ALL_PRODUCT_PROPERTIES = "RECEIVE_ALL_PRODUCT_PROPERTIES";
export const RECEIVE_PRODUCT_PROPERTY = 'RECEIVE_PRODUCT_PROPERTY';

const receiveAllProductProperties = (productProperties) =>{
  return{
    type: RECEIVE_ALL_PRODUCT_PROPERTIES,
    productProperties
  };
};

const receiveProductProperty = productProperty =>{
  return({
    type: RECEIVE_PRODUCT_PROPERTY,
    productProperty
  });
};


export const fetchProductProperties = () => dispatch => (
  ProductPropertyApiUtil.fetchProductProperties().then(productProperties => dispatch(receiveAllProductProperties(productProperties)))
);

export const fetchProductProperty = id => dispatch => (
  ProductPropertyApiUtil.fetchProductProperty(id).then(productProperty => dispatch(receiveProductProperty(productProperty)))
);

export const createProductProperty = productProperty => dispatch => (
  ProductPropertyApiUtil.createProperty(productProperty).then(newProductProperty => dispatch(receiveProductProperty(newProductProperty)))
);
