import { Property } from "../../../dtos/property";
import { SortCriterion } from "../FilterPanel";

export function filteredPropertyData(
  data: Property[] | undefined,
  sortKey: string,
) {
  if (!data) {
    return [];
  }
  if (sortKey === "") return data;
  if (sortKey === SortCriterion.PRICE_ASCENDING) {
    return data.sort(
      (prop1, prop2) => Number(prop1.price) - Number(prop2.price),
    );
  }
  if (sortKey === SortCriterion.PRICE_DESCENDING) {
    return data.sort(
      (prop1, prop2) => Number(prop2.price) - Number(prop1.price),
    );
  }
  if (sortKey === SortCriterion.NAME_ASCENDING) {
    return data.sort((prop1, prop2) => {
      if (prop1.name < prop2.name) return -1;
      if (prop1.name > prop2.name) return 1;
      return 0;
    });
  }

  if (sortKey === SortCriterion.Name_DESCENDING) {
    return data.sort((prop1, prop2) => {
      if (prop1.name < prop2.name) return 1;
      if (prop1.name > prop2.name) return -1;
      return 0;
    });
  }
}
