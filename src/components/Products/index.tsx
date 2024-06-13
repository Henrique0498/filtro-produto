import { Product } from "../../helper/apiTypes";
import { ProductsItem } from "./Item";
import { ProductsModal } from "./Modal";

import styles from "./products.module.css";

interface InProducts {
  products: Product[];
}

export function Products({ products }: InProducts) {
  return (
    <div>
      <ProductsModal />
      <ul className={styles.container}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductsItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
