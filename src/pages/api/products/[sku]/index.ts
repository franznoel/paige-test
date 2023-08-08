import ProductModel from "@/models/pg/product";
import { get } from "http";
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const [product] = await ProductModel.getProductBySku(req.query.sku as string);
  res.status(200).json(product || {});
}

export default handler;
