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

  deleteProduct = (id) => {
    const newProducts = this.state.products.filter((item) => item.id !== id);
    this.setState({ products: newProducts });
  };

  render() {
    return (
      <div className="list-products">
        {this.state.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.deleteProduct}
          />
        ))}
      </div>
    );
  }
}

export default Products;
