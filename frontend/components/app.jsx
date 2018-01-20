import React from 'react';
import ProductFormContainer from './product_form_container';
import ProductIndexContainer from './product_index_container';

const App = () => (
  <div>
    <h1>Product Management Tool</h1>
    <ProductFormContainer/>
    <ProductIndexContainer/>
  </div>
);

export default App;
