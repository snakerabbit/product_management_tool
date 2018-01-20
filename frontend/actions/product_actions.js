import * as ProductApiUtil from '../util/product_api_util';
export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

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


export const fetchProducts = () => dispatch => (
  ProductApiUtil.fetchProducts().then(products => dispatch(receiveAllProducts(products)))
);

export const fetchProduct = id => dispatch => (
  ProductApiUtil.fetchProduct(id).then(product => dispatch(receiveProduct(product)))
);
