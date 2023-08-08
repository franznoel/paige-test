import ProductModel from "@/models/pg/product";
import { get } from "http";
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const products = await ProductModel.getAllProducts();
  res.status(200).json(products);
}

export default handler;
