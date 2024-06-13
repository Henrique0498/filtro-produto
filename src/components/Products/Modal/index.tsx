import { useProduct } from "../../../context/productContext/use";
import { ProductContent } from "../Content";

import styles from "./modalProduct.module.css";

export function ProductsModal() {
  const { product, setProductContext } = useProduct();

  function handleOutsideClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (event.target === event.currentTarget) {
      setProductContext(null);
    }
  }

  if (product === null) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <ProductContent />
    </div>
  );
}
