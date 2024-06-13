const API_URL = "https://dummyjson.com/";

export function GET_ALL_PRODUCTS() {
  return {
    url: API_URL + "products",
    options: {
      method: "GET",
    },
  };
}
