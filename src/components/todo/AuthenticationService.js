import axios from 'axios'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService{

    executeBasicAuthencationService(username, password){
        return axios.get(`http://localhost:8080/basicauth`, 
        {headers:{authorization: this.createBasicAuthToken(username, password)}})
    }

    executeJwtAuthencationService(username, password){
        return axios.post('http://localhost:8080/authenticate', {
            username,
            password
        })
    }

    createBasicAuthToken(username, password){
        return 'Basic ' + window.btoa(username +":" +password);
    }

    createJWTToken(token){
        return 'Bearer ' + token;
    }

    registerSuccessLoginForJwt(username, token){
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptions(this.createJWTToken(token))    
    }

    registerSuccessLogin(userName, passWord){
        let basicAuthHeaderString = 'Basic ' + window.btoa(`${userName}:${passWord}`);
        //console.log('Register Successfully')
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, userName);
        this.setupAxiosInterceptions(basicAuthHeaderString)
    }

    logout(){
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if(user===null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return ''
        return user
    }

    setupAxiosInterceptions(token){

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = token
                }

                return config
                
            }
        )
    }




}

export default new AuthenticationService()