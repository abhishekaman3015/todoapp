import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     Hello world .
     <FirstComponent></FirstComponent>
     <SecondComponent></SecondComponent>
     <ThirdComponent></ThirdComponent>
     <FourthComponent></FourthComponent>
    </div>
  );
}

//class Component
class FirstComponent extends Component{
  render(){
    return(
      <div className="firstComponent">
        First Component
      </div>
    );
  }
}

//class Component
class SecondComponent extends Component{
  render(){
    return(
      <div className="secondComponent">
        Second Component
      </div>
    );
  }
}

//function Component
function ThirdComponent(){
  return(
    <div className="thirdComponent">
      Third Component
    </div>
  );
}

function FourthComponent(){
  return(
    <div className="fourthComponent">
      Fourth Component
    </div>
  )
}

export default App;
