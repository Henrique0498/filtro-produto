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
      {!products[0] ? (
        <p style={{ padding: "5rem 0", textAlign: "center" }}>
          Nenhum dado encontrado
        </p>
      ) : (
        <ul className={styles.container}>
          {products.map((product) => (
            <li key={product.id}>
              <ProductsItem product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
