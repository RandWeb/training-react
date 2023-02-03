import { Component } from "react";
import Product from "../product/Product";
import "../list_products/Products.css";

class Products extends Component {
  state = {
    products: [
      {
        id: 1,
        title: "product 1",
        count: 2,
        imageUrl: "https://loremflickr.com/320/240",
      },
      {
        id: 2,
        title: "product 2",
        count: 1,
        imageUrl: "https://loremflickr.com/320/240/dog",
      },
      {
        id: 3,
        title: "product 3",
        count: 4,
        imageUrl: "https://loremflickr.com/320/240/paris",
      },
    ],
  };

  handleDelete = (id) => {
    const newProducts = this.state.products.filter((item) => item.id !== id);
    this.setState({ products: newProducts });
  };
  handleIncrement = (productId) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((product) => product.id === productId);
    newProducts[index].count += 1;
    this.setState({ products: newProducts });
  };

  handleDecrement = (productId) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((product) => product.id === productId);
    if (newProducts[index].count === 0) return alert("count product is zero");
    newProducts[index].count -= 1;
    this.setState({ products: newProducts });
  };
  handleReset = () => {
    console.log("reset");
    const newProducts = this.state.products.map((product) => {
      product.count = 0;
      return product;
    });
    this.setState({ products: newProducts });
  };
  render() {
    return (
      <div className="list-products">
        <button onClick={this.handleReset} className="btn btn-secondary">
          reset
        </button>
        {this.state.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.handleDelete}
            OnDecrement={this.handleDecrement}
            OnIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Products;
