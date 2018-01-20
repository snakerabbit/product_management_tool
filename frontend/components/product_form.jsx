import { connect } from 'react-redux';
import ProductForm from './product_form';
import { fetchProducts, fetchProduct} from '../actions/product_actions';
import { fetchProperties, fetchProperty} from '../actions/property_actions';
import { fetchProductProperties, fetchProductProperty} from '../actions/product_property_actions';


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
    
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
