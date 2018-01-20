import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchProducts, fetchProduct} from '../actions/product_actions';


const mapStateToProps = state => {
  return({
    products: state.products
  });
};

const mapDispatchToProps = dispatch =>{
  return({
    fetchProducts: () => dispatch(fetchProducts())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);
