import { Product } from "../../helper/apiTypes";
import { ProductsItem } from "./Item";
import { ProductsModal } from "./Modal";

import styles from "./products.module.css";

interface InProducts {
  products: Product[];
  loading: boolean;
  final: boolean;
}

export function Products({ products, final, loading }: InProducts) {
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
      {loading && !final && (
        <p style={{ padding: "5rem 0", textAlign: "center" }}>Carregando...</p>
      )}

      {final && (
        <p style={{ padding: "5rem 0", textAlign: "center" }}>
          Você chegou no final
        </p>
      )}
    </div>
  );
}
