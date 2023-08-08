import { iProduct } from "@/models/pg/product";
import { getProductBySku } from "@/services/httpRequest/httpProduct";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const sku = useRouter().query.sku as string;
  const [product, setProduct] = useState<iProduct | any>();

  useEffect(() => {
    if (!product) {
      getProductBySku(sku).then((products) => setProduct(products));
    }
  }, [product, sku]);

  return (
    <div>
      <h2>Product: {product?.name}</h2>
      <ul>
      {product && Object.keys(product).map((key: string) => {
        const value = product[key];
        return <li key={key}>{key}: {value}</li>;
      })}
      </ul>
      <Link href={`/product-list/`} passHref>
        <Button variant="outlined" color="secondary">Cancel</Button>
      </Link>
      <Button variant="contained" color="primary">Save</Button>
    </div>
  );
};
