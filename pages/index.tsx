import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import AppBar from "../components/appBar"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <h1>Hello Home</h1>
    </div>
  )
}

export default Home
