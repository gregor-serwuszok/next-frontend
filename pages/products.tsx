import { NextPage } from "next"
import Head from "next/head"
import Product from "../components/product"
import { ProductContextProvider } from "../context/product"

const Products: NextPage = () => {
  return (
    <ProductContextProvider>
      <div>
        <Head>
          <title>Products</title>
          <meta name="description" content="Products" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Product />
      </div>
    </ProductContextProvider>

  )
}

export default Products