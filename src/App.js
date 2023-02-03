
// نکته در مورد رندر: فقط یک تگ را برمیگرداند دوتا باشد خطا می دهد

//shortcut class component: cc
// class App extends Component {
//   render() {
//     return (
//       <>
//         <h1>In The Name Of God</h1>
//         <h1>In The Name Of God</h1>
//       </>
//     );
//   }
// }

//export default App;


//shortcut functional component: sfc
const App = () => {
  return (
    <>
      <h1>In The Name Of God</h1>
      <h1>In The Name Of God</h1>
    </>
  );
};

export default App;
