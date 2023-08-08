import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

interface Product {
  id: number;
  name: string;
  color: string;
  type: string;
  price: number;
}

const columns = [
  {
    field: 'name',
    headerName: 'Name',
    width: 500,
  },
  {
    field: 'color',
    headerName: 'Color',
  },
  {
    field: 'type',
    headerName: 'Type',
  },
  {
    field: 'price',
    headerName: 'Price',
  },
  {
    field: 'action',
    headerName: 'Action',
  }
]

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch('/api/products', { cache: 'force-cache'})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (products.length === 0) {
      getProducts().then((products) => setProducts(products));
    }
  }, [products]);

  return (
    <div>
      <h2>Product List</h2>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
      />
    </div>
  );
};
