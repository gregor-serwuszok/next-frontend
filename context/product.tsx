import { createContext, FC, useContext, useState } from "react"
import axios from "axios"
import { ProductResponse } from "../types/ProductResponse"
import { ProductFetchParams } from "../types/FetchParams"
import { PaginationContext } from "./pagination"

type ProductContextState = {
  productResponse: ProductResponse
  isFetching: boolean
  fetchProducts: () => void
}

const initial: ProductContextState = {
  productResponse: {} as ProductResponse,
  isFetching: false,
  fetchProducts: () => { }
}

export const ProductContext = createContext<ProductContextState>(initial)

export const ProductContextProvider: FC = ({ children }) => {

  const [state, setState] = useState<ProductContextState>(initial)

  const { updateItemQty, product } = useContext(PaginationContext)

  const fetchProducts = async () => {
    setState({ ...state, isFetching: true })

    const params: ProductFetchParams = {
      page: product.page,
      limit: product.limit,
      st: "object",
      sd: "asc",
      sp: "id"
    }

    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.API_BASE_URL}products/grid`,
        params: params
      })

      const { itemQty, locale, resource, sort } = response.data
      setState({
        ...state,
        isFetching: false,
        productResponse: {
          itemQty: itemQty,
          locale: locale,
          resource: resource,
          sort: sort,
        }
      })
      updateItemQty("product", itemQty)
    }
    catch (error) {
      console.log(error)
    }
  }

  ProductContext.displayName = "Product"

  return (
    <ProductContext.Provider
      value={{
        productResponse: state.productResponse,
        isFetching: state.isFetching,
        fetchProducts: fetchProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}