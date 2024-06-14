import { useLayoutEffect, useState } from "react";

import { GetAllProducts } from "../../helper/apiTypes";
import { useFetch } from "../../hooks/useFetch";
import { GET_ALL_PRODUCTS } from "../../helper/api";
import { Products } from "../../components/Products";
import Filter, { TyFilterValues } from "../../components/Filter";
import { TypeSelectOption } from "../../components/Select";
import { filter } from "../../function/filter";
import { mountGroup } from "../../function/mountGroup";

export default function Home() {
  const { data: response, request } = useFetch<GetAllProducts>();
  const [filters, setFilters] = useState<TyFilterValues>({
    orderBy: null,
    rating: null,
    group: null,
    search: "",
  });
  const products = filter(filters, response?.products);
  const [group, setGroup] = useState<TypeSelectOption[]>([]);

  useLayoutEffect(() => {
    async function getProducts() {
      const { url, options } = GET_ALL_PRODUCTS();
      const { json } = await request(url, options);

      setGroup(mountGroup(json?.products));
    }

    getProducts();
  }, [request]);

  return (
    <section className="container mainContainer">
      <Filter filters={filters} setFilters={setFilters} group={group} />
      <Products products={products} />
    </section>
  );
}
