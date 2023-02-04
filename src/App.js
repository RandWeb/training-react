import { Component } from "react";
import Products from "./components/list_products/Products";
import Navbar from "./components/navigation/Navbar";
import ProductsContext from "./context/products/products";

//shortcut class component: cc
class App extends Component {
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
  componentDidUpdate() {
    console.log("App - DidUpdate");
  }
  componentWillUnmount() {
    console.log("App - Unmount");
  }
  render() {
    console.log("App - Render");
    return (
      <>
        <ProductsContext.Provider
          value={{
            products: this.state.products,
            onDelete: this.handleDelete,
            onDecrement: this.handleDecrement,
            onIncrement: this.handleIncrement,
            onReset: this.handleReset,
          }}
        >
          <Navbar />

          <Products />
        </ProductsContext.Provider>
      </>
    );
  }

  handleDelete = (productId) => {
    const newProducts = this.state.products.filter(
      (item) => item.id !== productId
    );
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
}

export default App;
