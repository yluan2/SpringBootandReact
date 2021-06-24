import React, {Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import TodoComponent from './TodoComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import UpdateTodoComponent from './UpdateTodoComponent'

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent></HeaderComponent>
                        <Switch>
                            <Route path = "/" exact component= {LoginComponent}></Route>
                            <Route path = "/login" component= {LoginComponent}></Route>
                            <AuthenticatedRoute path = "/logout" component= {LogoutComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path = "/welcome/:username" component= {WelcomeComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path = "/todo/:id" component= {UpdateTodoComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path = "/todo" component= {TodoComponent}></AuthenticatedRoute>
                            <Route component= {ErrorComponent}></Route>
                        </Switch>
                        <FooterComponent></FooterComponent>
                    </>
                </Router>

                {/* <LoginComponent></LoginComponent> */}
            </div>
        )
    }
}

//LoginComponent is a controller Component 


// function ShowInvalidMsg(props){
//     if(props.hasLoginFailed){
//         return <div>Wrong userName or passWord</div>
//     }
//     return null
// }

// function ShowSuccess(props){
//     if(props.showSuccessfulMsg){
//         return <div>Login successfully</div>
//     }
//     return null
// }

export default TodoApp