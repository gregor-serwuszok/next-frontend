import { Localization } from "./Localization"

export type Userconfig = {
  global: Global
  product: EntityConfig
  attribute: EntityConfig
  attributeSet: EntityConfig
}

type EntityConfig = {
  roles: CrudRoles
  presentation: Presentation
}

type Presentation = {
  table: {
    itemQty: number
    defaultLimit: number
    limitOptions: number[]
  }
}

type CrudRoles = {
  create: boolean
  read: boolean
  update: boolean
  delete: boolean
}

type Global = {
  useDarkTheme: boolean
  language: Localization
}