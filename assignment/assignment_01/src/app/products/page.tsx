"use client";

import { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import Link from "next/link";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-lg">Loading...</div>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="p-4 shadow-md hover:shadow-lg transition"
        >
          <CardHeader>
            <CardTitle className="truncate">{product.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mb-2"
            />
            <p className="text-lg font-semibold">${product.price}</p>
            <Link href={`/product/${product.id}`} className="w-full">
              <Button variant="outline" className="mt-3 w-full">
                View Details
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

