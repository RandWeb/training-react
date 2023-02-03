import "./Product.css";
const Product = ({ props, product, onIncrement, onDecrement, onDelete }) => {
  const handleIncrement = (productId) => {
    console.log("increment");
    onIncrement(productId);
  };

  const handleDecrement = (productId) => {
    console.log("decrement");
    if (product.count === 0) return alert("count product is zero");
    onDecrement(productId);
  };
  const handleDelete = (productId) => {
    console.log(productId);
    onDelete(productId);
  };
  return (
    <div className="product">
      <img src={product.imageUrl} />
      <h3 className="m-2 text-info">{product.title}</h3>
      <div className="product-counter">
        <button
          onClick={() => handleIncrement(product.id)}
          className="m-2 btn btn-sm btn-success product-btn"
        >
          +
        </button>
        <span className="m-2 badge bg-primary product-counter-count">
          {product.count !== 0 ? product.count : "zero"}
        </span>
        <button
          onClick={() => handleDecrement(product.id)}
          className="m-2 btn btn-sm btn-warning product-btn"
        >
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
