"use client";
import AccordionSection from "@/components/accordion";
import Banner from "@/components/banner/inde";
import { BlogCardrProps } from "@/components/blog/blogCard/blogCard.interface";

import BlogSlider from "@/components/blog/blogSlider";
import ProductSlider from "@/components/productSlider";
import { DirectionProvider } from "@radix-ui/react-direction";
import { useEffect, useState } from "react";

export default function Home() {
  const [getBlogsList, setGetBlogsList] = useState<BlogCardrProps[]>([]);
 
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setGetBlogsList(data.BlogCard);
      } catch  {
        alert("خطایی از سمت سرور رخ داده است");
      }
    }

    fetchPosts();
  }, []);
  return (
    <DirectionProvider dir="rtl">
      <ProductSlider />
      <Banner />
      <BlogSlider blog={getBlogsList} />
      <AccordionSection />
    </DirectionProvider>
  );
}
