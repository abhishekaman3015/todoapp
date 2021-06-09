import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./Counter.css"

class Counter extends Component{
    constructor(){
        super();
        this.state= {
            Counter:0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset=this.reset.bind(this);
    }
    render(){
        return (
            <div className="Counter">
               <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
               <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
               <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
               <span className="Count">{this.state.Counter}</span>
               <div><button className="reset" onClick={this.reset}>RESET</button></div>
            </div>
          );
    }

    reset(){
        this.setState( { Counter: 0});
    }

    increment (by) {
        this.setState(
        (prevState) =>    {
           return  {Counter: prevState.Counter + by}
            }
        );
     }

     decrement (by) {
        this.setState(
        (prevState) =>    {
           return  {Counter: prevState.Counter - by}
            }
        );
     }
}

class CounterButton extends Component {
    //constructor(){
     //    super();
        // this.state= {
        //     Counter:0
        // }
        // this.increment=this.increment.bind(this);
        // this.decrement=this.decrement.bind(this);
    



    //render = () => {
        render(){
    return (
        <div className="Counter">
            <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
            <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
        </div>
    )
}
// increment () {
//    this.setState(
//     (prevState) =>   {
//        return {Counter: prevState.Counter + this.props.by}
//        }
//    );
//    this.props.incrementMethod(this.props.by);
// }

// decrement () {
//     this.setState(
//      (prevState) =>   {
//         return {Counter: prevState.Counter - this.props.by}
//         }
//     );
//     this.props.decrementMethod(this.props.by);
// }
}


CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter
