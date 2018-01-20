import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.showProducts = this.showProducts.bind(this);
    this.updateState = this.updateState.bind(this);
    this.state ={
      typed: '',
      filteredProducts:[]
    };
  }

  componentDidMount(){
    this.props.fetchProducts();
  }

  showProducts () {
    const products = Object.values(this.props.products);
    return(
      products.map(product =>{
        return (
          <li>
            <ProductIndexItem product={product}/>
          </li>
        );
      })
    );
  }

  updateState (event) {
    this.setState({
      typed:event.target.value
    });
    console.log(this.state);
  }

  render() {
    return(
      <div>
        <h3>Product Index</h3>
        <form>
          <input type='text' onChange={this.updateState}></input>
        </form>
        <ul>
          {this.showProducts()}
        </ul>
      </div>
    );
  }
}

export default ProductIndex;
