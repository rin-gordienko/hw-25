const API_URL = "https://dummyjson.com";

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/products`);
  const { products } = await response.json();
  return products;
};

export const getUsersById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  const data = await response.json();
  return data;
};
