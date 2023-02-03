import { Component } from "react";
import Product from "../product/Product";
import "../list_products/Products.css";

class Products extends Component {
  render() {
    return (
      <div className="list-products">
        <button onClick={this.props.onReset} className="btn btn-secondary">
          reset
        </button>
        {this.props.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.props.onDelete}
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Products;
