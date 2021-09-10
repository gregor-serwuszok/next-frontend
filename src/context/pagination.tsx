import { createContext, FC, useContext, useEffect, useState } from "react"
import { ConfigContext } from "./configuration"
import { Pagination } from "../types/Pagination"
import { PaginationEntity } from "../types/Entity"

type PaginationContextState = {
  product: Pagination
  attribute: Pagination
  attributeSet: Pagination
  setPagination: (entity: PaginationEntity, page: number, limit: number) => void
  updateItemQty: (entity: PaginationEntity, itemQty: number) => void
}

const initial: PaginationContextState = {
  product: {} as Pagination,
  attribute: {} as Pagination,
  attributeSet: {} as Pagination,
  setPagination: () => { },
  updateItemQty: () => { }
}

export const PaginationContext = createContext<PaginationContextState>(initial)

export const PaginationContextProvider: FC = ({ children }) => {

  const { user } = useContext(ConfigContext)

  const [state, setState] = useState<PaginationContextState>(initial)

  useEffect(() => {

    const configLoaded =
      user
      && user.product
      && user.attribute
      && user.attributeSet

    if (configLoaded) {

      const paginationEntities: PaginationEntity[] = ["product", "attribute", "attributeSet"]

      let initialPaginationState: PaginationContextState = {} as PaginationContextState

      paginationEntities.forEach((entity) => {

        const { itemQty, defaultLimit, limitOptions } = user[entity].presentation.table
        const pageQty = Math.ceil(itemQty / defaultLimit)

        initialPaginationState = {
          ...initialPaginationState,
          [entity]: {
            page: 1,
            itemQty: itemQty,
            limit: defaultLimit,
            pageQty: pageQty,
            limitOptions: limitOptions
          }
        }
      })
      setState(initialPaginationState)
    }
  }, [user])

  const updateItemQty = (
    entity: PaginationEntity,
    itemQty: number
  ) => {
    setState({
      ...state,
      [entity]: {
        ...state[entity],
        itemQty: itemQty
      }
    })
  }

  const setPagination = (
    entity: PaginationEntity,
    page: number, limit: number
  ) => {
    setState({
      ...state,
      [entity]: {
        ...state[entity],
        page: page,
        limit: limit
      }
    })
  }

  PaginationContext.displayName = "Pagination"

  return (
    <PaginationContext.Provider
      value={{
        product: state.product,
        attribute: state.attribute,
        attributeSet: state.attributeSet,
        setPagination,
        updateItemQty
      }}
    >
      {children}
    </PaginationContext.Provider>
  )
}