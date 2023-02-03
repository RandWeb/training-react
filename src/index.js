import { createRoot } from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./components/functional/product/Product";
import Products from "./components/functional/list_products/Products";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<Products />);