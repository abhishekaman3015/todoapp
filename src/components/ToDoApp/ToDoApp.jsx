import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class ToDoApp extends Component {
    render() {
        return (
            <div className="ToDoApp">
                <Router>
                    <> 
                        <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/welcome/:name" component={WelcomeComponent}/>
                        <Route path="/todos" component={ListTodosComponent}/>
                        <Route component={ErrorComponent}/>
                        </Switch>
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
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
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
            <div>
                Welcome to ToDoApp {this.props.match.params.name}
            </div>
        )
    }
}

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            todo : {
                id:1,
                desc: 'Learn React'
            }
        }
    }
    render() {
        return (
            <div>
               <h1> List todos</h1>
               <table>
                   <thead>
                       <tr>
                           <th>id</th>
                           <th>desc</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>{this.state.todo.id}</td>
                           <td>{this.state.todo.desc}</td>
                       </tr>
                   </tbody>
               </table>
            </div>
        )
    }
}

function ErrorComponent(){
    return <div>An error occured!!</div>
}

export default ToDoApp
