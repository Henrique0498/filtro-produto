import { useContext } from "react";
import { ProductContext } from "./productContext";

export function useProduct() {
  const context = useContext(ProductContext);

  if (context === null) {
    throw new Error("useContext deve estar dentro de um provider");
  }

  return context;
}
