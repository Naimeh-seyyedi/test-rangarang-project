export interface CatalogProps {
  id: number;
  title: string;
  description: string;
  src: string;
}

export const catalogData: CatalogProps[] = [
  {
    id: 1,
    title: "چاپ سربرگ",
    description: "Description for Tile 1",
    src: "/images/iamges-1.jpg",
  },
  {
    id: 2,
    title: "چاپ تراکت",
    description: "Description for Tile 2",
    src: "/images/images-4.jpg",
  },
  {
    id: 3,
    title: "چاپ عکس",
    description: "Description for Tile 3",
    src: "/images/images-3.jpg",
  },
  {
    id: 4,
    title: "چاپ پوستر",
    description: "Description for Tile 3",
    src: "/images/images-6.jpg",
  },
  {
    id: 5,
    title: "چاپ تقویم",
    description: "Description for Tile 3",
    src: "/images/images-4.jpg",
  },
  {
    id: 6,
    title: "تبلیغات ",
    description: "Description for Tile 3",
    src: "/images/images-5.jpg",
  },
];
