import { createContext } from "react";

const ProductsContext = createContext({
  products: [],
  onDelete: () => {},
  onDecrement: () => {},
  onIncrement: () => {},
  onReset: () => {},
});

export default ProductsContext;
