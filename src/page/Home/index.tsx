import { ChangeEvent, FormEvent, useLayoutEffect, useState } from "react";
import { GetAllProducts, Product } from "../../helper/apiTypes";
import { useFetch } from "../../hooks/useFetch";
import { GET_ALL_PRODUCTS } from "../../helper/api";
import { Products } from "../../components/Products";

import styles from "./home.module.css";
import { Select, TypeSelectOption } from "../../components/Select";
import { Button } from "../../components/Button";

export default function Home() {
  const { data: response, request } = useFetch<GetAllProducts>();
  const [filters, setFilters] = useState({
    orderBy: null,
    rating: null,
    group: null,
  });
  const [data, setData] = useState<Product[]>([]);
  const [group, setGroup] = useState<TypeSelectOption[]>([]);

  useLayoutEffect(() => {
    (async () => {
      const { url, options } = GET_ALL_PRODUCTS();
      const { json } = await request(url, options);

      const group = Array.from(
        new Set(json?.products.map((product) => product.category))
      ).map((item, i) => ({
        id: i + item,
        value: item,
        label: item,
      }));

      setData(json?.products ?? []);
      setGroup(group);
    })();
  }, [request]);

  function handleSetFilter(
    key: keyof typeof filters,
    event: ChangeEvent<HTMLSelectElement>
  ) {
    const value = event.target.value === "none" ? null : event.target.value;
    setFilters((before) => ({ ...before, [key]: value }));
  }

  function handleSubmit(props: FormEvent) {
    props.preventDefault();

    if (response?.products) {
      const { products } = response;
      let newValue = [...products];

      if (filters.orderBy === "name") {
        newValue.sort(function (a, b) {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        });
      } else if (filters.orderBy === "price") {
        newValue.sort(function (a, b) {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        });
      } else if (filters.orderBy === "nameDesc") {
        newValue.sort(function (a, b) {
          if (a.title > b.title) {
            return -1;
          }
          if (a.title < b.title) {
            return 1;
          }
          return 0;
        });
      } else if (filters.orderBy === "priceDesc") {
        newValue.sort(function (a, b) {
          if (a.price > b.price) {
            return -1;
          }
          if (a.price < b.price) {
            return 1;
          }
          return 0;
        });
      }

      if (filters.group) {
        newValue = newValue.filter(
          (product) => product.category === filters.group
        );
      }

      if (filters.rating) {
        newValue = newValue.filter(
          (product) =>
            product.rating >= Number(filters.rating) &&
            product.rating < Number(filters.rating) + 1
        );
      }

      setData(newValue);
    }
  }

  return (
    <section className="container mainContainer">
      <div className={styles.filtro}>
        <form onSubmit={handleSubmit}>
          <Select
            onChange={(e) => handleSetFilter("orderBy", e)}
            options={optionsOrderBy}
            label="Ordenar"
            id="orderBy"
            value={filters.orderBy}
          />

          <Select
            onChange={(e) => handleSetFilter("group", e)}
            options={group}
            label="Categoria"
            id="group"
            value={filters.group}
          />

          <Select
            onChange={(e) => handleSetFilter("rating", e)}
            options={optionsRating}
            label="Estrelas"
            id="rating"
            value={filters.rating}
          />

          <Button type="submit">Filtrar</Button>
        </form>
      </div>
      <Products products={data} key={data.toString()} />
    </section>
  );
}

const optionsOrderBy: TypeSelectOption[] = [
  {
    id: "name",
    label: "Nome",
    value: "name",
  },
  {
    id: "nameDesc",
    label: "Nome Decrescente",
    value: "nameDesc",
  },
  {
    id: "price",
    label: "Preço",
    value: "price",
  },
  {
    id: "priceDesc",
    label: "Preço Decrescente",
    value: "priceDesc",
  },
];

const optionsRating: TypeSelectOption[] = [
  {
    id: "1",
    label: "1 Estrela",
    value: "1",
  },
  {
    id: "2",
    label: "2 Estrelas",
    value: "2",
  },
  {
    id: "3",
    label: "3 Estrelas",
    value: "3",
  },
  {
    id: "4",
    label: "4 estrelas",
    value: "4",
  },
  {
    id: "5",
    label: "5 estrelas",
    value: "5",
  },
];
