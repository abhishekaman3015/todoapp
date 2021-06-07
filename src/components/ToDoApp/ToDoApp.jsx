import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import ErrorComponent from './ErrorComponent'
class ToDoApp extends Component {
    render() {
        return (
            <div className="ToDoApp">
                <Router>
                    <> 
                    <HeaderComponent/>
                        <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                        </Switch>
                    <FooterComponent/>
                    </>
                </Router>

               {/* <WelcomeComponent/>
                <LoginComponent/>*/}
            </div>
        )
    }
}



// function ShowInvalidCredentials(props){
//     if (props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props){
//     if (props.showSuccessMessage){
//         return <div>Login Successful</div>
//     }
//     return null
// }

export default ToDoApp