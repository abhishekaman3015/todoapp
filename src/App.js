import React, { Component } from 'react'
import './bootstrap.css';

import FirstComponent from "./components/learning-examples/FirstComponent"
import SecondComponent from "./components/learning-examples/SecondComponent"
import ThirdComponent from "./components/learning-examples/ThirdComponent"
import FourthComponent from "./components/learning-examples/FourthComponent"

// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import Counter from './components/Counter/Counter'
import ToDoApp from './components/ToDoApp/ToDoApp'

function App() {
  return (
    <div className="App">
      {/*<Counter/>*/}
      <ToDoApp/>
    </div>
  );
}


// eslint-disable-next-line
class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
      Hello world .
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
     </div>
    )
  }
}


export default App