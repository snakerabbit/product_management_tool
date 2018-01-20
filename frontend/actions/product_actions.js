import * as ProductApiUtil from '../util/product_api_util';
export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveAllProducts = (products) =>{
  return{
    type: RECEIVE_ALL_PRODUCTS,
    products
  };
};

const receiveProduct = product =>{
  return({
    type: RECEIVE_PRODUCT,
    product
  });
};

const receiveErrors = errors => {
  return({
    type: RECEIVE_ERRORS,
    errors
  });
};


export const fetchProducts = () => dispatch => (
  ProductApiUtil.fetchProducts().then(products => dispatch(receiveAllProducts(products)))
);

export const fetchProduct = id => dispatch => (
  ProductApiUtil.fetchProduct(id).then(product => dispatch(receiveProduct(product)))
);

export const createProduct = product => dispatch => (
  ProductApiUtil.createProduct(product).then(
    newProduct => dispatch(receiveProduct(newProduct)),
    err => (dispatch(receiveErrors(err.responseJSON))))
);
