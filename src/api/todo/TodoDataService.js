import axios from "axios"

class TodoDataService{

    retrieveAllTodos(username){
        //return promise back
        return axios.get(`http://localhost:8080/users/${username}/todos`); 
               
    }

    retrieveTodo(username, id){
        //return promise back
        return axios.get(`http://localhost:8080/users/${username}/todos/${id}`); 
               
    }

    deleteTodo(username, id){
        //return promise back
        return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`); 
               
    }

    updateTodo(username, id, todo){
        //return promise back
        return axios.put(`http://localhost:8080/users/${username}/todos/${id}`, todo); 
               
    }

    createTodo(username, todo){
        //return promise back
        return axios.post(`http://localhost:8080/users/${username}/todos/`, todo)
               
    }



}

export default new TodoDataService()