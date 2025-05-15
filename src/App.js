import logo from './logo.svg';
import './App.css';
import './ListMember.css';
import MyComponent from './components/MyComponent';
import ListMemberComponent from './components/ListMemberComponent';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import React from 'react';
import InformationComponent from './components/InformationComponent';

//#17
class App17 extends React.Component {
  render(){ 
    return(
      <ListMemberComponent/>
    )
  }
}  
export default App17;