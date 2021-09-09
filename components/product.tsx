import { Button } from "@material-ui/core"
import { FC, useContext, useEffect } from "react"
import { ProductContext } from "../context/product"
import AppBar from "./appBar"

const Product: FC = () => {

  const { fetchProducts, isFetching } = useContext(ProductContext)

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <AppBar />
      <h1>hello Product Component</h1>
      <Button
        disabled={isFetching}
        onClick={() => fetchProducts()}>
        reload
      </Button>
    </>

  )
}

export default Product