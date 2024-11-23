import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";
import { catalogData, CatalogProps } from "@/types/catalog";
export default function ProductSlider() {
  return (
    <div>
      <div className="bg-[#f0f0f0] min-h-[280px] px-4 lg:p-8">
        <section className="grid grid-cols-12  lg:mr-[100px] " dir="rtl">
          <div className="flex flex-row justify-between lg:flex-col col-span-12  lg:col-span-2 lg:p-4 ">
            <h2 className="text-xl font-medium  lg:mb-4 lg:text-center">
              محصولات نمایشگاهی و همایش
            </h2>
            <p className="hidden lg:text-sm lg:font-light lg:block lg:text-center  ">
              ارائه سفارش محصولات نمایشگاهی با استفاده از چاپ دیجیتال
            </p>
            <Button variant="ghost" className="block lg:hidden">
              <span>مشاهده همه</span>
              <i className="fa-solid fa-chevron-left"></i>
            </Button>
            <Button
              variant="outline"
              className="hidden lg:block lg:bg-transparent lg:border lg:border-solid lg:shadow-none"
            >
              <span>مشاهده همه</span>
            </Button>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <Carousel>
              <CarouselContent>
                {catalogData.map((data: CatalogProps) => (
                  <CarouselItem
                    key={data.id}
                    className="basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4"
                  >
                    <div>
                      <Card className="shadow-none border-none bg-transparent">
                        <CardContent className="flex flex-col aspect-square items-center justify-center  p-0">
                          <div className="relative group h-auto overflow-hidden rounded-md">
                            <Image
                              src={data.src}
                              alt={`Image ${data.id}`}
                              className=" object-cover "
                              width={300}
                              height={250}
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                            <div className="text-lg font-medium"> <i className="fa-solid fa-basket-shopping "></i></div>
                              <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                          </div>
                          <div className="pt-2">{data.title}</div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-10 rounded-sm" />
              <CarouselNext className="mr-10 rounded-sm" />
            </Carousel>
          </div>
        </section>
      </div>
    </div>
  );
}
