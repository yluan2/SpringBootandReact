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
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
        
    }
}

export default new HelloWorldService()