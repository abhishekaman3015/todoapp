import React, { Component } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import FirstComponent from "./components/learning-examples/FirstComponent"
import SecondComponent from "./components/learning-examples/SecondComponent"
import ThirdComponent from "./components/learning-examples/ThirdComponent"
import FourthComponent from "./components/learning-examples/FourthComponent"
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <LearningComponents></LearningComponents>
       <button className="btn btn-success">Sample</button>
    </div>
  );
}


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