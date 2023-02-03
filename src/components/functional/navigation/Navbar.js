
const Navbar=(props)=> {
  const calculateSumCount = () => {
    console.log(props.products)
    let sum = 0;
    props.products.forEach((product) => {
      sum += product.count;
    });
    return sum;
  };
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand"> Navbar {calculateSumCount()}</a>
        </div>
      </nav>
    );
}

export default Navbar;
