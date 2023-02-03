import { useState } from "react";
import './Product.css';
const Product = (props) => {
  const [product, setProduct] = useState(props.product);

  const handleIncrement = () => {
    console.log("increment");
    setProduct({
      id: product.id,
      title: product.title,
      count: ++product.count,
      imageUrl: product.imageUrl,
    });
  };

  const handleDecrement = () => {
    console.log("decrement");
    if (product.count === 0) return alert("count product is zero");
    setProduct({
      id: product.id,
      title: product.title,
      count: --product.count,
      imageUrl: product.imageUrl,
    });
  };

  const handleDelete = (id) => {
    console.log(id);
  };
  return (
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
  );
};

export default Product;
