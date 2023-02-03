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
    <div className="product">
          <img src={product.imageUrl} />
      <h3 className="m-2 text-info">{product.title}</h3>
        <div className="product-counter">

      <button onClick={handleIncrement} className="m-2 btn btn-sm btn-success product-btn">
        +
      </button>
      <span className="m-2 badge bg-primary product-counter-count">
        {product.count !== 0 ? product.count : "zero"}
      </span>
      <button onClick={handleDecrement} className="m-2 btn btn-sm btn-warning product-btn">
        -
      </button>
        </div>
      <button
        onClick={() => {
          handleDelete(product.id);
        }}
        className="m-2 btn vtn-sm btn-danger product-btn"
      >
        delete
      </button>
    
    </div>
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
