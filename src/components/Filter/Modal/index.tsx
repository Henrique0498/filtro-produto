import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { TyFilterValues } from "..";
import { Select, TypeSelectOption } from "../../Select";
import styles from "./modalProduct.module.css";

interface InFilterModal {
  filters: TyFilterValues;
  setFilters: Dispatch<SetStateAction<TyFilterValues>>;
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  group: TypeSelectOption[];
}

export function FilterModal({
  filters,
  group,
  setFilters,
  setVisibility,
  visibility,
}: InFilterModal) {
  function handleOutsideClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (event.target === event.currentTarget) {
      setVisibility(false);
    }
  }

  function handleSetFilter(
    key: keyof typeof filters,
    event: ChangeEvent<HTMLSelectElement>
  ) {
    const value = event.target.value === "none" ? null : event.target.value;
    setFilters((before) => ({ ...before, [key]: value }));
  }

  if (!visibility) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <div className={styles.container}>
        <div className={styles.select}>
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
        </div>
      </div>
    </div>
  );
}

const optionsOrderBy: TypeSelectOption[] = [
  {
    id: "title",
    label: "Nome",
    value: "title",
  },
  {
    id: "titleDesc",
    label: "Nome Decrescente",
    value: "titleDesc",
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
