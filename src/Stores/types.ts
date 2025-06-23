export interface RootState {
  searchQuery: String;
}
export interface SelectedProductState {
  selectedProduct: Product | null;
}
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  SelectedProduct: SelectedProductState;
}
