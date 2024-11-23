import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionHeader from "../../sectionHeader";
import BlogCard from "../blogCard";
import { BlogCardrProps } from "../blogCard/blogCard.interface";


interface BlogSliderProps {
  blog: BlogCardrProps[];
}

const BlogSlider = ({ blog }: BlogSliderProps) => {
  console.log("bloggggg",blog)
  return (
    <div>
      <div className="bg-[#f0f0f0] py-8 px-4">
        <section className="lg:mx-[100px] " dir="rtl">
          <div className="flex justify-between pb-4">
            <SectionHeader title="جدیدترین مطالب بلاگ" />
            <div>ورود به بلاگ</div>
          </div>
          <Carousel>
            <CarouselContent>
              {blog?.map((blogItem: BlogCardrProps) => {
                return (
                  <CarouselItem
                    key={blogItem.id}
                    className="basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4"
                  >
                    <div>
                      <Card className="shadow-none bg-white border-none bg-transparent">
                        <CardContent className="p-0 m-0">
                          <BlogCard blog={blogItem} />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="ml-10 rounded-sm" />
            <CarouselNext className="mr-10 rounded-sm" />
          </Carousel>
        </section>
      </div>
    </div>
  );
};

export default BlogSlider;
