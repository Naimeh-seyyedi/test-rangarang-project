
import { ProductProps } from '@/types/products';

export interface ProductTitleProps {
  product: ProductProps;
  isSelected: boolean;
  onSelect: () => void
}
