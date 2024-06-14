import { TyFilterValues } from "../components/Filter";
import { Product } from "../helper/apiTypes";

export function filter(filters: TyFilterValues, products?: Product[]) {
  if (!products || !products[0]) {
    return [];
  }

  let newReturn = [...products];

  if (filters.search.length > 0) {
    newReturn = newReturn.filter((product) =>
      product.title.includes(filters.search)
    );
  }

  if (filters.orderBy) {
    const isDesc = filters.orderBy.includes("Desc");

    newReturn = sortProducts(newReturn, filters.orderBy, isDesc);
  }

  if (filters.group) {
    newReturn = newReturn.filter(
      (product) => product.category === filters.group
    );
  }

  if (filters.rating) {
    newReturn = newReturn.filter(
      (product) =>
        product.rating >= Number(filters.rating) &&
        product.rating < Number(filters.rating) + 1
    );
  }

  return newReturn;
}

function sortProducts(products: Product[], keyValue: string, isDesc: boolean) {
  const key = keyValue.replace("Desc", "") as keyof Product;

  return products.sort((a, b) => {
    if (a[key] > b[key]) {
      return isDesc ? -1 : 1;
    }
    if (a[key] < b[key]) {
      return isDesc ? 1 : -1;
    }
    return 0;
  });
}
