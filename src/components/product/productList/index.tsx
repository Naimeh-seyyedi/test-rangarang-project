"use client";
import React, { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductProps, products } from "@/types/products";
import ProductTitle from "../productTitle";

export default function ProductList() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId === selectedProductId ? null : productId);
  };

  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="my-4"
      >
        <CarouselContent>
          {products.map((product: ProductProps) => (
            <CarouselItem key={product.id} className="basis-1/7">
              <ProductTitle
                product={product}
                isSelected={String(product.id) === selectedProductId}
                onSelect={() => handleSelectProduct(String(product.id))}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-8 !p-0  !bg-transparent !border-0 !shadow-none" />
        <CarouselNext className="mr-8 !p-0  !bg-transparent !border-0 !shadow-none" />
      </Carousel>
    </>
  );
}
