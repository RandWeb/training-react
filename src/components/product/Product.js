import { Component } from "react";
import "./Product.css";
class Product extends Component {
  state = {
    id: 1,
    title: "name product",
    count: 0,
    imageUrl: "https://loremflickr.com/320/240",
  };
  render() {
    return (
      <>
        <span className="m-2 text-info">{this.state.title}</span>
        <span className="m-2 badge bg-primary">
          {this.state.count !== 0 ? this.state.count : "zero"}
        </span>
        <button
          onClick={this.handleIncrement}
          className="m-2 btn btn-sm btn-success"
        >
          +
        </button>
        <button
          onClick={this.handleDecrement}
          className="m-2 btn btn-sm btn-warning"
        >
          -
        </button>
        <button
          onClick={() => {
            this.handleDelete(this.state.id);
          }}
          className="m-2 btn vtn-sm btn-danger"
        >
          delete
        </button>
        <img src={this.state.imageUrl} />
      </>
    );
  }

  handleIncrement = () => {
    console.log("increment");
    this.setState({ count: ++this.state.count });
  };
  handleDecrement = () => {
    console.log("decrement");
    const { count } = this.state;
    if (count === 0) return alert("count product is zero");
    this.setState({ count: --count });
  };
  handleDelete = (id) => {
    console.log(id);
  };
}

export default Product;
