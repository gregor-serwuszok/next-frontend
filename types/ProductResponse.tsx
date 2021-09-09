import { Entity } from "./Entity";
import { Localization } from "./Localization";
import { Pagination } from "./Pagination";
import { Sort } from "./Sort";

export type ProductResponse = {
  resource: {
    name: Entity
  }
  locale: Localization
  pagination: Pagination
  sort: Sort

}