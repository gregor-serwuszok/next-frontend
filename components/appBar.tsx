import Link from "next/link"
import { FC } from "react"

const AppBar: FC = () => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
    </>
  )
}

export default AppBar
