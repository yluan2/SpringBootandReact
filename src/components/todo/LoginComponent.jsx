import React, {Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            userName: 'gracelyun',
            passWord: '',
            hasLoginFailed: false,
            showSuccessfulMsg: false
        }
        this.changeContent = this.changeContent.bind(this)
        this.loginCheck = this.loginCheck.bind(this)

    }

    changeContent(event){
        // console.log(event.target.value)
        this.setState({
            [event.target.name]:
                event.target.value
        })
    }

    loginCheck(){
        if(this.state.userName === 'gracelyun' && this.state.passWord ==='123'){
            AuthenticationService.registerSuccessLogin(this.state.userName, this.state.passWord)
            this.props.history.push(`/welcome/${this.state.userName}`)
            // this.setState({hasLoginFailed: false})
            // this.setState({showSuccessfulMsg: true})
        }
        else{
            this.setState({hasLoginFailed: true})
            this.setState({showSuccessfulMsg: false})
        }
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                {/* <ShowInvalidMsg hasLoginFailed= {this.state.hasLoginFailed}></ShowInvalidMsg>
                <ShowSuccess showSuccessfulMsg= {this.state.showSuccessfulMsg}></ShowSuccess> */}
                    <div className= 'container'>
                    {this.state.hasLoginFailed && <div className= 'alert alert-warning'>Wrong userName or passWord</div>}
                    {this.state.showSuccessfulMsg && <div>Login successfully</div>}
                    UserName: <input type= "text" name= "userName" value= {this.state.userName} onChange= {this.changeContent}></input>
                    Password: <input type= "password" name= "passWord" value= {this.state.passWord} onChange= {this.changeContent} ></input>
                    <button className= 'btn btn-success'onClick= {this.loginCheck}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent