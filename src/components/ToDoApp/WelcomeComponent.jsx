import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome !</h1>
                <div className="container">
                Welcome to ToDoApp {this.props.match.params.name}. you can manage your todos <Link to="/todos">Here</Link>
                </div>
            </>
        )
    }
}


export default WelcomeComponent
