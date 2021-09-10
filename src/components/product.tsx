import { Button } from "@material-ui/core"
import { FC, useContext, useEffect } from "react"
import { ConfigContext } from "../context/configuration"
import { PaginationContext } from "../context/pagination"
import { ProductContext } from "../context/product"

const Product: FC = () => {
  const roles = useContext(ConfigContext).user.product.roles
  const { fetchProducts, isFetching } = useContext(ProductContext)
  const pagination = useContext(PaginationContext)
  const { setPagination, product } = pagination

  useEffect(() => {
    if (product.itemQty && roles.read) fetchProducts()
  }, [
    product.page,
    product.limit
  ])

  return (
    <>
      {roles.read
        ?
        <>
          <h1>hello Product Component</h1>
          <Button
            disabled={isFetching}
            onClick={() => fetchProducts()}>
            reload
          </Button>
          <Button onClick={() => setPagination("product", 1, 28)}>Page</Button>

        </>
        :
        <h1>not allowed</h1>
      }
    </>
  )
}

export default Product