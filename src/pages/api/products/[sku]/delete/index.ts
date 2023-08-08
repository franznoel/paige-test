import ProductModel from "@/models/pg/product";
import { get } from "http";
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await ProductModel.deleteProductBySku(req.query.sku as string);
  res.status(200).json({ message: 'Product deleted' });
}

export default handler;
