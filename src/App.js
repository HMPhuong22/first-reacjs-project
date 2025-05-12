import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import React from 'react';
class App extends React.Component {
  state ={
    name: "phuong",
    age: 23,
    address: "HB"
  }
  render(){
    return (
      <div>
          Hello World &amp; Ha Minh Phuong
          {this.state}
      </div>
    );
  }
}  

//#16 
// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       Hello World &amp; Ha Minh Phuong
//       <MyComponent></MyComponent>
//     </div>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Ha Minh Phuong
//     //     </p>
//     //     <div>Count = {count}</div>
//     //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//     //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//     //   </header>
//     // </div>
//   );
// }

export default App;