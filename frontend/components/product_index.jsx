import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.showProducts = this.showProducts.bind(this);
  }

  componentDidMount(){
    this.props.fetchProducts();
  }

  showProducts () {
    const products = Object.values(this.props.products);
    console.log(products);
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

  render() {
    return(
      <div>
        <h1>ProductIndex</h1>
        <ul>
          {this.showProducts()}
        </ul>
      </div>
    );
  }
}

export default ProductIndex;
