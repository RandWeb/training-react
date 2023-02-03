import { Component } from "react";

class Navbar extends Component {
  calculateSumCount = () => {
    console.log(this.props.products)
    let sum = 0;
    this.props.products.forEach((product) => {
      sum += product.count;
    });
    return sum;
  };
  render() {
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
