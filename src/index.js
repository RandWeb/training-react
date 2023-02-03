import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
//import Products from "./components/functional/list_products/Products";
import Products from "./components/list_products/Products";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
//root.render(<Products />);
