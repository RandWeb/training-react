import { Component } from "react";
import "./Product.css";
class Product extends Component {
  state = this.props.product;
  render() {
    return (
      <div className="product">
        <img src={this.state.imageUrl} />
        <h3 className="m-2 text-info">{this.state.title}</h3>
        <div className="product-counter">
          <button
            onClick={() => {
              this.handleIncrement(this.state.id);
            }}
            className="m-2 btn btn-sm btn-success product-btn"
          >
            +
          </button>
          <span className="m-2 badge bg-primary product-counter-count">
            {this.state.count !== 0 ? this.state.count : "zero"}
          </span>
          <button
            onClick={() => {
              this.handleDecrement(this.state.id);
            }}
            className="m-2 btn btn-sm btn-warning product-btn"
          >
            -
          </button>
        </div>
        <button
          onClick={() => this.handleDelete(this.state.id)}
          className="m-2 btn vtn-sm btn-danger product-btn"
        >
          delete
        </button>
      </div>
    );
  }

  handleIncrement = (productId) => {
    console.log("increment");
    this.props.onIncrement(productId);
  };

  handleDecrement = (productId) => {
    console.log("decrement");
    if (this.props.product.count === 0) return alert("count product is zero");
    this.props.onDecrement(productId);
  };

  handleDelete = (productId) => {
    console.log(productId);
    this.props.onDelete(productId);
  };
}

export default Product;
