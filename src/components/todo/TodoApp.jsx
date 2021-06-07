import React, {Component } from 'react'

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                <LoginComponent></LoginComponent>
            </div>
        )
    }
}

//LoginComponent is a controller Component 
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
            this.setState({hasLoginFailed: false})
            this.setState({showSuccessfulMsg: true})
        }
        else{
            this.setState({hasLoginFailed: true})
            this.setState({showSuccessfulMsg: false})
        }
    }

    render(){
        return(
            <div>
                
                {/* <ShowInvalidMsg hasLoginFailed= {this.state.hasLoginFailed}></ShowInvalidMsg>
                <ShowSuccess showSuccessfulMsg= {this.state.showSuccessfulMsg}></ShowSuccess> */}

                {this.state.hasLoginFailed && <div>Wrong userName or passWord</div>}
                {this.state.showSuccessfulMsg && <div>Login successfully</div>}
                UserName: <input type= "text" name= "userName" value= {this.state.userName} onChange= {this.changeContent}></input>
                Password: <input type= "password" name= "passWord" value= {this.state.passWord} onChange= {this.changeContent} ></input>
                <button onClick= {this.loginCheck}>Login</button>
            </div>
        )
    }
}

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