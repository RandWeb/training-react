import { Component } from "react";
import ProductsContext from "../../context/products/products";

class Navbar extends Component {
  static contextType = ProductsContext;
  constructor(props) {
    super(props);
    console.log("Navbar - Constructor");
  }

  componentDidMount(){
    console.log("Navbar - componentDidMount");
  }
  calculateSumCount = () => {
    console.log(this.context.products)
    let sum = 0;
    this.context.products.forEach((product) => {
      sum += product.count;
    });
    return sum;
  };
  render() {
    console.log("Navbar - Render");
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand"> Navbar {this.calculateSumCount()}</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
