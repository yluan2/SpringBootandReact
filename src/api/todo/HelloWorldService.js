import axios from "axios"

class HelloWorldService{
    executeHelloWorldService(){
        //return promise back
        return axios.get('http://localhost:8080/hello-world'); 
               
    }

    executeHelloWorldBeanService(){
        //return promise back
        return axios.get('http://localhost:8080/hello-world-bean');
        
    }

    executeHelloWorldPathVariableService(name){
        //return promise back
        // let username = 'gracelyun'
        // let password = '123'
        // let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        // ,
        //     {
        //         headers :{
        //             authorization: basicAuthHeaderString
        //         }
        //     }
        );
        
    }
}

export default new HelloWorldService()