import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import React from 'react';

//#17
class App17 extends React.Component {
  state = {
    name: "phuong",
    age: 23,
    address: "HB"
  }

  randomAge = () => {
    return Math.floor((Math.random() * 100) + 1);
  }

  eventClick = () => {
    this.setState(
      {
        name: 'Thanh',
        age: this.randomAge() 
      }
    )
  }

  hovelMouse = (event) =>{
    console.log(event.clientY)
  } 

  // Form 
  handleOnSubmit = (event) =>{
    this.setState({
      name: event.target.value
    })
    event.preventDefault()
    console.log(this.state)
  }

  render(){ 
    return (
      <div>
        Name: {this.state.name} - Age: {this.state.age} - Address: {this.state.address}
        <button onClick={this.eventClick}>Click Me</button>

        <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
          <input type="text" name="name" onChange={(event) => {this.handleOnSubmit(event)}}/>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}  
export default App17;

//#16 
const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      Hello World &amp; Ha Minh Phuong
      <MyComponent></MyComponent>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Ha Minh Phuong
    //     </p>
    //     <div>Count = {count}</div>
    //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    //   </header>
    // </div>
  );
}

// export default App16; 