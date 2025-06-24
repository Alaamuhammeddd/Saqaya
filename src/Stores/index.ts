import { createStore } from "vuex";
import product from "./modules/products";
import search from "./modules/search"; // if you have one
import { RootState } from "./types";
import { selectedProduct } from "./modules/selectedProduct";
import quantity from "./modules/quantity";
import cart from "./modules/cart";
export default createStore<RootState>({
  modules: {
    product,
    search,
    selectedProduct,
    quantity,
    cart,
  },
});
