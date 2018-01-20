import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.showProducts = this.showProducts.bind(this);
    this.findMatches = this.findMatches.bind(this);
    this.state ={
      typed: '',
      filteredProducts:[]
    };
  }

  componentDidMount(){
    this.props.fetchProducts();
  }

  showProducts () {
    let products = Object.values(this.props.products);
    if(this.state.typed.length !== 0){
      products = this.state.filteredProducts;
    }

    if(products.length === 0){
      return(
        <div>
          <p>No Matches Found</p>
        </div>
      );
    } else {
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

  }

  findMatches (event) {
    let filtered = Object.values(this.props.products).filter(product =>{
      return product.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    this.setState({
      typed:event.target.value,
      filteredProducts: filtered
    });

  }

  render() {
    return(
      <div>
        <h3>Product Index</h3>
        <form>
          <label>Search:
            <input type='text' onChange={this.findMatches}></input>
          </label>
        </form>
        <ul>
          {this.showProducts()}
        </ul>
      </div>
    );
  }
}

export default ProductIndex;
