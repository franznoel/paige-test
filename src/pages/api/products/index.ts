import ProductModel, { iProduct } from "@/models/pg/product";
import { get } from "http";
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const products = await ProductModel.getAllProducts();
    res.status(200).json(products);
  }

  if (req.method === 'POST') {
    console.log('req.body', req.body);
    const product = await ProductModel.updateProduct(req.body as iProduct);
    res.status(200).json({ message: 'Updated product!', product });
  }
}

export default handler;
