const API_URL = "https://dummyjson.com/";

export function GET_ALL_PRODUCTS({ limit }: { limit: number }) {
  return {
    url: API_URL + `products?limit=${limit}`,
    options: {
      method: "GET",
    },
  };
}
