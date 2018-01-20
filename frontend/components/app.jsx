import React from 'react';
import ProductFormContainer from './product_form_container';
import ProductIndexContainer from './product_index_container';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Product Management Tool</h1>
    <Link to='/'>Home</Link>
    <br/>
    <Link to='/products'>View/Search Products</Link>
    <br/>
    <Link to='/new'>Create New Product</Link>
    <br/>
    <Route path='/products' component={ProductIndexContainer}/>
    <Route path='/new' component={ProductFormContainer}/>
  </div>
);

export default App;
