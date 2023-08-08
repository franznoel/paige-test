import knex from "knex";
import knexConfig from "../../../knexfile";

export interface iProduct {
  id: string;
  sku: string;
  name: string;
  type: string;
  description: string;
  color: string;
  price: number;
}

class ProductsModel {
  public static getAllProducts (): Promise<iProduct[]> {
    const environment = process.env.NODE_ENV;
    const products = knex(knexConfig[environment]).select('*').from('product');
    return products;
  }

  public static getProductBySku (sku: string): Promise<iProduct[]> {
    const environment = process.env.NODE_ENV;
    const product = knex(knexConfig[environment]).select('*').from('product').where('sku', sku).limit(1);
    return product;
  }  
}


export default ProductsModel;
