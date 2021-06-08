import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.getWelcomeMessage = this.getWelcomeMessage.bind(this)
    }
    render() {
        return (
            <>
                <h1>Welcome !</h1>
                <div className="container">
                Welcome to ToDoApp {this.props.match.params.name}. you can manage your todos <Link to="/todos">Here</Link>
                </div>

                <div className="container">
                    Click here to get the customized welcome Message.
                    <button onClick={this.getWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
            </>
        )
    }
    getWelcomeMessage(){
        console.log('button clicked')
    }
}


export default WelcomeComponent
