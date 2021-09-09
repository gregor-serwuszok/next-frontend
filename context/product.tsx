import { createContext, FC, useState } from "react"
import axios from "axios"
import { ProductResponse } from "../types/ProductResponse"
import { ProductFetchParams } from "../types/FetchParams"

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

  const fetchProducts = async () => {
    setState({ ...state, isFetching: true })

    const params: ProductFetchParams = {
      page: 1,
      limit: 28,
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
      setState({
        ...state,
        isFetching: false,
        productResponse: {
          pagination: response.data.pagination,
          locale: response.data.locale,
          resource: response.data.resource,
          sort: response.data.sort,
        }
      })
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