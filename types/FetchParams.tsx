import { PropertyScope } from "./PropertyScope";
import { SortDirection } from "./Sort";

export type ProductFetchParams = {
  page: number
  limit: number
  st: PropertyScope
  sd: SortDirection
  sp: string
}