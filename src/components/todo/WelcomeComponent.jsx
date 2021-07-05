import React, {Component } from 'react'
import {BrowserRouter as  Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService'


class WelcomeComponent extends Component{

    constructor(props){
        super(props)
        this.retrieveWelcomeMeaasge = this.retrieveWelcomeMeaasge.bind(this)
        this.state = {
            welcomeMsg : ''
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }
    render(){
        return(
            <>
                <h1>Welcome!</h1>
                <div className= 'container'>
                    Welcome {this.props.match.params.username}. 
                    For more information, please click <Link to= "/todo"> Here</Link>
                </div>
                <div className= 'container'>
                    Click here to get a customized welcome message.
                    <button onClick = {this.retrieveWelcomeMeaasge} className= "btn btn-success"> Get Welcome Mesaage</button>
                </div>
                <div className= 'container'> 
                    {this.state.welcomeMsg}
                </div>

            </>
        )
    }
    retrieveWelcomeMeaasge(){
        // HelloWorldService.executeHelloWorldService()
        // .then( response => this.handleSuccessfulResponse(response))

        // //come back at json format, which means the welcomeMsg is object
        // HelloWorldService.executeHelloWorldBeanService()
        // .then( response => this.handleSuccessfulResponse(response))

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.username)
        .then( response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response){
        console.log(response)
        this.setState(
            {welcomeMsg: response.data.message}
        )        
    }

    handleError(error){
        console.log(error.response);
        let errorMsg = ''
        if(error.message){
            errorMsg += error.message
        }
        if(error.response && error.response.data){
            errorMsg += error.message
        }
        this.setState({welcomeMsg: errorMsg})
    }

}

export default WelcomeComponent