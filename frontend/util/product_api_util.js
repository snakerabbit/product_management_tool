export const fetchProducts = () =>{
  return $.ajax({
    method: "GET",
    url: "api/products"
  });
};

export const fetchProduct = id =>{
  return $.ajax({
      method: 'GET',
      url: `api/products/${id}`
    });
};

export const createProduct = product => {
  return $.ajax({
    method: 'POST',
    url: '/api/products',
    data: {product}
  });
};
