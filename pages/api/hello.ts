// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"

type Data = {
  data: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fetchProducts = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.API_BASE_URL}products/grid`,
      })
    }
    catch (error) {
      console.log(error)
    }
  }
  res.status(200).json({ data: fetchProducts() })

}
