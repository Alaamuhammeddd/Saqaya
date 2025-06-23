import { createStore } from "vuex";
import search from "./modules/search";
import { RootState } from "./types";
import selectedProduct from "./modules/SelectedProduct";

export default createStore<RootState>({
  modules: {
    search,
    selectedProduct,
  },
});
