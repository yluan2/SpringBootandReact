class AuthenticationService{
    registerSuccessLogin(userName, passWord){
        console.log('Register Successfully')
        sessionStorage.setItem('authenticatedUser', userName);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return ''
        return user
    }




}

export default new AuthenticationService()