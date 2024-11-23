import Image from "next/image";
import React from "react";
import { BlogProps } from "@/components/blog/blogCard/blogCard.interface";

const BlogCard = ({ blog }: BlogProps) => {
  return (
    <div className="relative z-10 h-auto overflow-hidden rounded-md group transition-transform duration-300 hover:-translate-y-5">
      <div className="relative">
        <Image
          src={`${blog.src}`}
          alt="Image"
          className="object-cover border border-b-red-800 border-b-2"
          width={300}
          height={250}
        />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white">
          <div className="w-[90%] h-full bg-red-500 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
      </div>
      <div className="absolute -top-4 left-4 w-12 h-3 z-20">
        <div className="bg-red-500 py-5 text-center">{blog.day}</div>
        <div className="bg-gray-700">{blog.month}</div>
      </div>
      <div className="relative bg-white px-4 py-2">
        <p className="font-medium text-sm">{blog.title}</p>
        <p className="font-light text-xs">{blog.description}</p>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default BlogCard;
