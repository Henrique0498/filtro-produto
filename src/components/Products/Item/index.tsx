import { MouseEvent } from "react";
import { useProduct } from "../../../context/productContext/use";
import { convertCurrency } from "../../../function/convertCurrency";
import { Product } from "../../../helper/apiTypes";
import { Button } from "../../Button";

import styles from "./productItem.module.css";

interface InProductsItem {
  product: Product;
}

export const ProductsItem = ({ product }: InProductsItem) => {
  const { setProductContext } = useProduct();

  function handleClick(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    if (e.currentTarget.localName !== "button") setProductContext(product);
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.image}
      />
      <div className={styles.titleContainer}>
        <h3>{product.title}</h3>

        <Button size="small" disabled>
          Comprar
        </Button>
      </div>
      <p className={styles.brand}>{product.brand}</p>
      <div className={styles.containerPriceRating}>
        <p>{convertCurrency(product.price)}</p>
        <p>Nota: {product.rating}</p>
      </div>
    </div>
  );
};
