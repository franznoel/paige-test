import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, ButtonGroup } from '@mui/material';
import Link from 'next/link';
import { iProduct } from '@/models/pg/product';
import { getProducts } from '../services/httpRequest/httpProduct';

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
    renderCell: (params: any) => `$${Number(params.value).toFixed(2)}`
  },
  {
    field: 'action',
    headerName: 'Action',
    renderCell: (params: any) => {
      const { row: product } = params;
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

export default function ProductList() {
  const [products, setProducts] = useState<iProduct[]>([]);

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
        pageSizeOptions={[10, 20]}
      />
    </div>
  );
};
