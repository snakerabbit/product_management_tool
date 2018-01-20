export const fetchProductProperties = () =>{
  return $.ajax({
    method: "GET",
    url: "api/product_properties"
  });
};

export const fetchProductProperty = id =>{
  return $.ajax({
      method: 'GET',
      url: `api/product_properties/${id}`
    });
};

export const createProductProperty = productProperty => {
  return $.ajax({
    method: 'POST',
    url: '/api/product_properties',
    data: {productProperty}
  });
};
