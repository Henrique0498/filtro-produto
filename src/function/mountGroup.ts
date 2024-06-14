import { Product } from "../helper/apiTypes";

export function mountGroup(products?: Product[]) {
  const newValue = products
    ? products
        .map((product) => product.category)
        .map((item, i) => ({
          id: i + item,
          value: item,
          label: item,
        }))
    : [];

  return newValue;
}
