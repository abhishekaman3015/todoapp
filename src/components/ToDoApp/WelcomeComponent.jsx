import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

export class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.getWelcomeMessage = this.getWelcomeMessage.bind(this)

        this.state={
            welcomeMessage : ''
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
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
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }
    getWelcomeMessage(){
        //console.log('button clicked')
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response))

        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSuccessfulResponse(response))

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccessfulResponse(response))
    }

    handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({welcomeMessage: response.data.message})
    }
}


export default WelcomeComponent
