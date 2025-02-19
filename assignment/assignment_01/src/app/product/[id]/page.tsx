"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  rating: { rate: number; count: number };
}

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <div className="text-center text-lg">Loading...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <Card className="w-full max-w-2xl p-6 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle>{product?.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <img
            src={product?.image}
            alt={product?.title}
            className="h-60 object-contain mb-4"
          />
          <p className="text-lg font-semibold text-gray-700">
            ${product?.price}
          </p>
          <p className="text-sm text-muted-foreground">{product?.category}</p>
          <p className="mt-2 text-center">{product?.description}</p>
          <p className="text-sm mt-2 text-gray-500">
            ⭐ {product?.rating.rate} ({product?.rating.count} reviews)
          </p>
          <Button variant="secondary" className="mt-4 w-full">
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}