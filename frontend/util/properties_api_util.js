export const fetchProperties = () =>{
  return $.ajax({
    method: "GET",
    url: "api/properties"
  });
};

export const fetchProperty = id =>{
  return $.ajax({
      method: 'GET',
      url: `api/properties/${id}`
    });
};

export const createProperty = property => {
  return $.ajax({
    method: 'POST',
    url: '/api/properties',
    data: {property}
  });
};
