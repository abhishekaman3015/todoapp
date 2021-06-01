import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

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
                        <Route path="/welcome/:name" component={WelcomeComponent}/>
                        <Route path="/todos" component={ListTodosComponent}/>
                        <Route path="/logout" component={LogoutComponent}/>
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


export class LoginComponent extends Component {
    constructor(props){
        super()
        this.state={
            username: 'abhishek',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        // this.handleUsernameChange=this.handleUsernameChange.bind(this)
        // this.handlePasswordChange=this.handlePasswordChange.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.loginClicked=this.loginClicked.bind(this)
    }

    loginClicked(){
        //abhishek,123
        if (this.state.username==='abhishek' && this.state.password==='123'){
           // console.log('Successful')
           AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
           this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage:true}) 
            // this.setState({hasLoginFailed:false})
        }
        else{
            console.log('Failed')
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
       // console.log(this.state)
        }
    }

    handleChange(event){
       // console.log(this.state);
        this.setState(
            {
                [event.target.name]:
                    event.target.value
            }
        )
    }

    // handleUsernameChange(event){
    //     console.log(event.target.value);
    //     this.setState(
    //         {
    //             username:event.target.value
    //         }
    //     )
    // }

    // handlePasswordChange(event){
    //     console.log(event.target.value);
    //     this.setState(
    //         {
    //             password:event.target.value
    //         }
    //     )
    // }



    render() {
        return (
            <div>
                <h1>Login</h1>
            <div className="container">
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
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

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            todos : [
                { id:1, desc: 'Learn React', done: false, targetDate: new Date()},
                { id:2, desc: 'visit home', done: false, targetDate: new Date()},
                { id:3, desc: 'Learn java', done: false, targetDate: new Date() }
            ]
            }
    }
    render() {
        return (
            <div>

               <h1> List todos</h1>
               <div className="container">
               <table className="table">
                   <thead>
                       <tr>
                           <th>desc</th>
                           <th>Is Completed?</th>
                           <th>Target Date</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                        this.state.todos.map(
                            todo => 
                            <tr>
                           <td>{todo.desc}</td>
                           <td>{todo.done.toString()}</td>
                           <td>{todo.targetDate.toString()}</td>
                       </tr>
                        )
                       
                       
                        }
                   </tbody>
               </table>
               </div>
            </div>
        )
    }
}

class HeaderComponent extends Component{
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.todo.com/" className="navbar-brand">TodoApp</a></div>
                    <ul className="navbar-nav">
                        { isUserLoggedIn && <li> <Link className="nav-link" to="/welcome/abhishek">Home</Link></li>}
                       { isUserLoggedIn && <li> <Link className="nav-link" to="/todos">Todos</Link></li> }
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                       { !isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                      { isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component{
    render() {
        return(
            <footer className="footer">
                <span className="text-muted">All rights reserved. @TodoApp</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component{
    render() {
        return(
            <>
                <h1> You are logged out.</h1>
                <div className="container">
                    Thank You for using our app.
                </div> 
            </>
        )
    }
}

function ErrorComponent(){
    return <div>An error occured!!</div>
}

export default ToDoApp
