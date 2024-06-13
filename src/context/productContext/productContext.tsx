import { createContext, useState } from "react";
import { Product } from "../../helper/apiTypes";

type InProductContext = {
  product: Product | null;
  setProductContext: React.Dispatch<React.SetStateAction<Product | null>>;
};

export const ProductContext = createContext<InProductContext | null>(null);

export function ProductContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [product, setProduct] = useState<Product | null>(null);

  return (
    <ProductContext.Provider value={{ product, setProductContext: setProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
