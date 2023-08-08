import { iProduct } from "@/models/pg/product";
import { getProductBySku } from "@/services/httpRequest/httpProduct";
import { Button, Divider, Grid, Input, TextField, TextareaAutosize } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function ProductDetail() {
  const router = useRouter();
  const { push } = router;
  const sku = router.query.sku as string;
  const [product, setProduct] = useState<iProduct | any>();

  const [name, setName] = useState<string>(product?.name ?? '');
  const [type, setType] = useState<string>(product?.type ?? '');
  const [description, setDescription] = useState<string>(product?.description ?? '');
  const [color, setColor] = useState<string>(product?.color ?? '');
  const [price, setPrice] = useState<number>(product?.price ?? 0);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      ...product,
      name,
      type,
      description,
      color,
      price
    }

    fetch('/api/products', {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('res', res);
      if (res.ok) {
        push('/product-list');
      }
    })
  }

  useEffect(() => {
    if (!product) {
      getProductBySku(sku).then((product) => {
        setProduct(product || {});
        setName(product?.name ?? '');
        setType(product?.type ?? '');
        setDescription(product?.description ?? '');
        setColor(product?.color ?? '');
        setPrice(product?.price ?? 0);
      });
    }
  }, [product, sku]);


  return (
    <div style={{ margin: '30px' }}>
      <h2>Product: {product?.name}</h2>
      <Grid container spacing={2}>
        <form onSubmit={handleSubmit}>
          <input value={name} placeholder="Name" style={{ width: '500px'}} onChange={(e)=>setName(e.target.value)} /><br/>
          <input value={type} placeholder="Type" onChange={(e)=>setType(e.target.value)} /><br/>
          <textarea value={description} placeholder="Description" onChange={(e)=>setDescription(e.target.value)} /><br/>
          <input value={color} placeholder="Color" onChange={(e)=>setColor(e.target.value)} /><br/>
          <input value={price} placeholder="Price" onChange={(e)=>setPrice(Number(e.target.value))} /><br/>
          <Divider/>
          <Link href={`/product-list/`} passHref>
            <Button variant="outlined" color="secondary">Cancel</Button>
          </Link>
          <Button variant="contained" color="primary" type="submit">Save</Button>
        </form>        
      </Grid>
    </div>
  );
};
