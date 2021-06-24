import React, {Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class TodoComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos: [],
            message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
    }
    
    //shouldComponent is called before the render is called
        //whether the change in the properties or state should trigger a render
    //componentDidMount is called immediately after a component is mouted (after render called)
        //setting state here will trigger re-render

    componentDidMount(){
        this.refreshTodos();
        console.log(this.state)

    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
            .then(
                response =>{
                    this.setState({todos: response.data})
                }
            )

    }

    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedInUserName()
        //console.log(id + " " + username)
        TodoDataService.deleteTodo(username, id)
            .then(
                response =>{
                    this.setState({message : `Delete of todo ${id}`});
                    this.refreshTodos();
                }
            )
    }

    updateTodoClicked(id){
        console.log("Updated " + id)
        this.props.history.push(`/todo/${id}`)
        // let username = AuthenticationService.getLoggedInUserName()
        // //console.log(id + " " + username)
        // TodoDataService.deleteTodo(username, id)
        //     .then(
        //         response =>{
        //             this.setState({message : `Delete of todo ${id}`});
        //             this.refreshTodos();
        //         }
        //     )
    }

    addTodoClicked(){
        //console.log("create " + id)
        this.props.history.push(`/todo/-1`)
    }

    render(){
        return(
            // match the params.username with Route path name after welcome
            <div>
                <h1>To do list </h1>
                {this.state.message && <div class = "alert alert-success">{this.state.message}</div>}
                <div className= 'container'> 
                    <table className= 'table'>
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>done yet?</th>
                                <th>target finished time</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                    <tr key = {todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{moment(todo.targetDate.toString()).format('YYYY-MM-DD')}</td>
                                        <td><button className="btn btn-success" onClick = {() => this.updateTodoClicked(todo.id)}> Update </button></td>
                                        <td><button className="btn btn-warning" onClick = {() => this.deleteTodoClicked(todo.id)}> Delete </button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className = "row">
                            <button className = "btn btn-success" onClick = {this.addTodoClicked}>Add</button>
                    </div>
                </div>

            
            </div>
        )
    }
}

export default TodoComponent