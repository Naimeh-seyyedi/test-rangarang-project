export interface ProductProps {
  id: number;
  title: string;
  description: string;
  images: string[];
  value:string
}

export const products: ProductProps[] = [
  {
    id: 1,
    title: "محصولات تبلیغاتی",
    description: "Description for Tile 1",
    images: [
      "/images/iamges-1.jpg",
      "/images/images-3.jpg",
      "/images/images-4.jpg",
      "/images/images-5.jpg",
      "/images/images-7.webp",
    ],
    value:"Advertising"
  },
  {
    id: 2,
    title: "محصولات فوری و 24 ساعته",
    description: "Description for Tile 2",
    images: [
      "/images/images-7.webp",
      "/images/images-5.jpg",
      "/images/images-3.jpg",
      "/images/iamges-1.jpg",
      "/images/images-6.jpg",
    ],
    value:"Urgent "
  },
  {
    id: 3,
    title: "چاپ عکس",
    description: "Description for Tile 3",
    images: [
      "/images/iamges-1.jpg",
      "/images/images-3.jpg",
      "/images/images-4.jpg",
      "/images/images-5.jpg",
      "/images/images-7.webp",
    ],
    value:"Printing"
  },
  {
    id: 4,
    title: "تبلیغات و بازاریابی",
    description: "Description for Tile 3",
    images: [
      "/images/images-7.webp",
      "/images/images-5.jpg",
      "/images/images-3.jpg",
      "/images/iamges-1.jpg",
      "/images/images-6.jpg",
    ],
    value:"Marketing"
  },
  {
    id: 5,
    title:" بازاریابی",
    description: "Description for Tile 3",
    images: [
      "/images/iamges-9.webp",
      "/images/images-4.jpg",
      "/images/images-5.jpg",
      "/images/iamges-1.jpg",
      "/images/images-3.jpg",
    ],
    value:"Marketing"
  },
  {
    id:6,
    title: "تبلیغات ",
    description: "Description for Tile 3",
    images: [
      "/images/images-7.webp",
      "/images/images-5.jpg",
      "/images/images-3.jpg",
      "/images/iamges-1.jpg",
      "/images/images-6.jpg",
    ],
    value:"Marketing"
  },


];
