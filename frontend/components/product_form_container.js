import { connect } from 'react-redux';
import ProductForm from './product_form';
import { fetchProducts, fetchProduct, createProduct, clearErrors} from '../actions/product_actions';
import { fetchProperties, fetchProperty, createProperty} from '../actions/property_actions';
import { fetchProductProperties, fetchProductProperty, createProductProperty} from '../actions/product_property_actions';


const mapStateToProps = state => {
  return({
    products: state.products,
    properties: state.properties,
    product_properties: state.product_properties,
    errors: state.errors
  });
};

const mapDispatchToProps = dispatch =>{
  return({
    fetchProducts: () => dispatch(fetchProducts()),
    createProduct: product => dispatch(createProduct(product)),
    createProperty: property => dispatch(createProperty(property)),
    createProductProperty: productProperty => dispatch(createProductProperty(productProperty)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
