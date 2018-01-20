import React from 'react';

const ProductIndexItem = ({product}) =>{
  console.log(product);
  const properties_values = Object.values(product.product_properties).map(property =>{
    return property.value;
  });

  console.log(properties_values);
  return(
    <div>
      <p>Product: {product.name}</p>
      <p>UPC: {product.upc}</p>
      <p>Available On: {product.available_on}</p>
      <p>Properties: {properties_values}</p>
    </div>
  );
};

export default ProductIndexItem;
