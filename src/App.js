import { Component } from "react";

// نکته در مورد رندر: فقط یک تگ را برمیگرداند دوتا باشد خطا می دهد
class App extends Component {
  render() {
    return (
      <>
        <h1>In The Name Of God</h1>
        <h1>In The Name Of God</h1>
      </>
    );
  }
}

export default App;
