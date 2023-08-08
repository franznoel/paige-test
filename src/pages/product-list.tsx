import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, ButtonGroup } from '@mui/material';
import Link from 'next/link';

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
    renderCell: (params: any) => {
      const { row: product } = params;
      console.log('params', params);
      return (
        <div key={product.sku}>
          <Link href={`/product-detail/${product.sku}`} passHref>
            <Button variant="outlined" >Edit</Button>
          </Link>
          <Button variant="outlined" color="error">Delete</Button>
        </div>
      )
    },
    width: 200,
  },
]

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch('/api/products', { cache: 'no-cache'})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  const handleDelete = (sku: string) => {
    console.log('delete', sku);
  }

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
