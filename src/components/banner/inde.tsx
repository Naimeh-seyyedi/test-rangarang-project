"use client";
import { ProductProps, products } from "@/types/products";
import Image from "next/image";
import ProductList from "../product/productList";
import SectionHeader from "../sectionHeader";
import ProductTitle from "../product/productTitle";
import { useState } from "react";

const Banner = () => {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    1
  );

  const handleSelectProduct = (productId: number) => {
    setSelectedProductId(productId === selectedProductId ? null : productId);
  };

  const selectedProduct = products.find(
    (product) => product.id === selectedProductId
  );

  const imageLayouts = [
    { className: "order-1 h-[150px] lg:col-start-3 lg:row-start-2" },
    { className: "order-2 h-[150px] lg:col-start-3 lg:row-start-1" },
    { className: "order-3 col-span-2 h-[150px] lg:col-span-2 lg:row-span-1 lg:col-start-1 lg:row-start-1" },
    { className: "order-4 h-[150px] lg:col-start-1 lg:row-start-2" },
    { className: "order-5 h-[150px] lg:col-start-2 lg:row-start-2" },
  ];

  return (
    <div className="bg-[url('/images/images-2.webp')] min-h-full w-full lg:mx-auto">
      <div className="py-20 px-4 lg:px-0 lg:mx-[100px]">
        <SectionHeader title="سایر محصولات" />
        <div className="grid grid-cols-12" dir="rtl">
          <div className="block col-span-12 lg:hidden">
            <ProductList />
          </div>
          <div className="hidden lg:block lg:col-span-2">
            <ul className="space-x-6 space-y-3">
              {products.map((product: ProductProps) => (
                <div key={product.id}>
                  <ProductTitle
                    product={product}
                    isSelected={product.id === selectedProductId}
                    onSelect={() => handleSelectProduct(product.id)}
                  />
                </div>
              ))}
            </ul>
          </div>

          <div className="m-0 col-span-12 lg:col-span-10">
            {selectedProduct && (
              <div className="grid grid-cols-2 grid-rows-3 gap-4 lg:grid-cols-3 lg:grid-rows-2 md:gap-6">
                {selectedProduct.images.map((image, index) => (
                  <div key={index} className={imageLayouts[index]?.className}>
                    <Image
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="object-cover h-full w-full"
                      width={150}
                      height={150}
                    />
                  </div>
                ))}
              </div>
            ) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
