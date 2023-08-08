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

export const getAllProducts = (): Promise<iProduct[]> => {
  const environment = process.env.NODE_ENV;
  const products = knex(knexConfig[environment]).select('*').from('product');
  return products;
}
