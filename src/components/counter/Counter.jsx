//Class Component
import { Component } from 'react';
import './Counter.css'

//default can directly used it
class Counter extends Component{

    //define the initial statet in a constructor
    //state => count 0
    constructor() {
        super();  //must call super!!!!! Error 1

        this.state = {
            counter : 0
        }
//in case increment method could get the state of the this.state.ounter
        this.increment = this.increment.bind(this)
    }

    render(){
//another css style format than change style to style = {style}
    //   const style = {fontSize : "50px"}

      return (
        <div className="counter">
          <button onClick = {this.increment}>+1</button>
          <span className = "count"
                style = {{fontSize : "50px"}}
                >{this.state.counter}</span>
        </div>
      )
    }

    increment(){ //Update state - counter++
        this.setState({
            //pass object
            counter: this.state.counter + 1
        });
    }
    
  }
//move inside the class component

// function increment() {
//     console.log('increment');
// }
export default Counter