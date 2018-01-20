import React from 'react';

const ProductIndexItem = ({product}) =>{
  const propertiesValues = Object.values(product.product_properties).map(property =>{
    return property.value;
  });

  const propertiesNames = Object.values(product.properties).map(property =>{
    return property.name;
  });

  const properties = propertiesValues.map(value =>{
    return `${propertiesNames[propertiesValues.indexOf(value)]}: ${value}`;
  });

  return(
    <div>
      <p>Product: {product.name}</p>
      <p>UPC: {product.upc}</p>
      <p>Available On: {product.available_on}</p>
      <p>Properties: {properties.join(', ')}</p>
    </div>
  );
};

export default ProductIndexItem;
