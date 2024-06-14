import { Dispatch, SetStateAction, useState } from "react";

import { Input } from "../Input/intex";
import { TypeSelectOption } from "../Select";
import { FilterModal } from "./Modal";

import styles from "./filter.module.css";
import { Button } from "../Button";

export type TyFilterValues = {
  orderBy: string | null;
  rating: string | null;
  group: string | null;
  search: string;
};

interface InFilter {
  filters: TyFilterValues;
  setFilters: Dispatch<SetStateAction<TyFilterValues>>;
  group: TypeSelectOption[];
}

export default function Filter({ filters, setFilters, group }: InFilter) {
  const [modal, setModal] = useState(false);

  return (
    <form className={styles.filtro}>
      <Input
        value={filters.search}
        name="search"
        id="search"
        label="Pesquisar"
        onChange={({ target }) =>
          setFilters((before) => ({ ...before, search: target.value }))
        }
      />

      <Button
        onClick={() => setModal((value) => !value)}
        type="button"
        style={{ marginTop: "auto" }}
      >
        Filtros
      </Button>

      <FilterModal
        filters={filters}
        group={group}
        setFilters={setFilters}
        setVisibility={setModal}
        visibility={modal}
      />
    </form>
  );
}
