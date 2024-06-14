import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

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
  const [page, setPage] = useState(1);
  const fetching = useRef(false);
  const [final, setFinal] = useState(false);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    async function getProducts() {
      const limit = page * 30;
      const { url, options } = GET_ALL_PRODUCTS({ limit });
      const { json } = await request(url, options);

      if (json?.total) {
        setFinal(limit >= json?.total);
      }

      setGroup(mountGroup(json?.products));
    }

    getProducts();
  }, [request, page]);

  const infiniteScroll = useCallback(() => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      if (fetching.current) {
        return;
      }

      fetching.current = true;
      setLoading(true);

      setTimeout(() => {
        setPage((currentPage) => currentPage + 1);
        fetching.current = false;
        setLoading(false);
      }, 3000);
    }
  }, []);

  useEffect(() => {
    if (!final) {
      window.addEventListener("scroll", infiniteScroll);
      window.addEventListener("wheel", infiniteScroll);
    } else {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    }
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    };
  }, [final, infiniteScroll]);

  return (
    <section className="container mainContainer">
      <Filter filters={filters} setFilters={setFilters} group={group} />
      <Products products={products} final={final} loading={loading} />
    </section>
  );
}
