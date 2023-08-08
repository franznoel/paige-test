import { iProduct } from "@/models/pg/product"

export const getProducts = async (): Promise<iProduct[]> => {
  const res = await fetch('/api/products', { cache: 'no-cache'})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json() as Promise<iProduct[]>
}

export const getProductBySku = async (sku: string): Promise<iProduct> => {
  const res = await fetch(`/api/products/${sku}`, { cache: 'no-cache'})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json();  
}
