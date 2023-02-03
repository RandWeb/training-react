import { Component } from "react";

class Product extends Component {
  state = {};
  render() {
    const products = [
      { id: 1, title: "product 1" },
      { id: 2, title: "product 2" },
      { id: 3, title: "product 3" },
    ];

    const format = (count) => {
      if (count === 0) return "zero";
      return count;
    };

    return (
      <>
        <span className="m-2 text-info">name product</span>
        <span className="m-2 badge bg-primary">{format(0)}</span>
        <button className="m-2 btn btn-sm btn-success">+</button>
        <button className="m-2 btn btn-sm btn-warning">-</button>
        <button className="m-2 btn vtn-sm btn-danger">delete</button>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Product;
