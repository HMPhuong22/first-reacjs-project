import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import InformationComponent from './components/InformationComponent';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import React from 'react';

//#17
class App17 extends React.Component {
  render(){ 
    return(
      <InformationComponent/>
    )
  }
}  
export default App17;