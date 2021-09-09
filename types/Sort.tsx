import { AttribtueScope } from "./AttributeScope"
import { PropertyScope } from "./PropertyScope"

export type SortDirection = "asc" | "desc"

export type Sort = {
  property: string
  direction: SortDirection
  isSet: boolean
  scope: AttribtueScope
  type: PropertyScope
}