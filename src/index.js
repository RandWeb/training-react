import { createRoot } from "react-dom/client";

const element = <h1>Hello world</h1>;

//const element = createElement("h1",{},"hello world");

const container = document.getElementById("root");

const root = createRoot(container);

root.render(element);