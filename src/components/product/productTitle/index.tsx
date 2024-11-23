import { ProductTitleProps } from "./productTile.interface";



const ProductTitle= ({
  product,
  onSelect,
  isSelected
}:ProductTitleProps) => {
  return (
    <div
      className={`p-2 w-[200px]  lg:w-[145px] text-right text-sm rounded-[7px] ${isSelected ? "bg-[#f0f0f0]  font-bold" : "font-normal  bg-[#f0f0f0]/30"}`}
      onClick={onSelect}
      dir="rtl"
    >
      <div className="flex items-center justify-start">
      {isSelected && <i className="fa-solid fa-chevron-left text-red-600 pl-2"></i>}
        <div>{product.title}</div>
        
      </div>
    </div>
  );
};

export default ProductTitle;
