import { createRoot } from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./components/functional/product/Product";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<Product />);