import { useProduct } from "../../../context/productContext/use";
import { convertCurrency } from "../../../function/convertCurrency";
import { Button } from "../../Button";
import { ProductsContentComments } from "./Comments";

import styles from "./productContent.module.css";

export function ProductContent() {
  const { product } = useProduct();

  if (!product) {
    return null;
  }

  return (
    <div className={styles.context}>
      <div className={styles.img}>
        <img src={product?.images[0]} alt={product.title} />
      </div>

      <div className={styles.details}>
        <p className={styles.brand}>{product.brand}</p>
        <h1 className="title">{product.title}</h1>
        <ul className={styles.price}>
          <li>
            Por <span>{convertCurrency(product.price)}</span>
          </li>
        </ul>
        <Button size="large" className={styles.buttonBuy}>
          Comprar
        </Button>

        <div className={styles.description}>
          <p>Descrição</p>

          <p>{product.description}</p>
        </div>

        <ProductsContentComments
          reviews={product.reviews}
          rating={product.rating}
        />
      </div>
    </div>
  );
}
