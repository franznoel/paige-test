import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button } from '@mui/material';
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

      const handleDelete = (sku: string) => {
        fetch(`/api/products/${sku}/delete`, { method: 'DELETE' })
          .then((res) => {
            console.log('res', res);
            if (res.status === 200) {
              window.location.reload();
            }
          });
      }
    
      return (
        <div key={product.sku}>
          <Link href={`/product-detail/${product.sku}`} passHref>
            <Button variant="outlined" >Edit</Button>
          </Link>
          <Button variant="outlined" color="error" onClick={() => handleDelete(product.sku)}>Delete</Button>
        </div>
      )
    },
    width: 200,
  },
]

export default function ProductList() {
  const [products, setProducts] = useState<iProduct[]>([]);

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
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
};
