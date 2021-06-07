//Class Component
import { Component } from 'react';
import './Counter.css'
import PropTypes from 'prop-types'
import { render } from '@testing-library/react';
//default can directly used it

class Counter extends Component{

    constructor() {
        super();  //must call super!!!!! Error 1

        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);

//in case increment method could get the state of the this.state.ounter
    }

    render(){
        return(
            <div className= "counter">
                <CounterButton incrementmehtod = {this.increment} decrementmehtod = {this.decrement}></CounterButton>
                <CounterButton by = {5} incrementmehtod = {this.increment} decrementmehtod = {this.decrement}></CounterButton>
                <CounterButton by = {10} incrementmehtod = {this.increment} decrementmehtod = {this.decrement}></CounterButton>
                <span className = "count" style = {{fontSize : "50px"}}>{this.state.counter}</span>
                <div>
                    <button className= "reset" onClick={this.reset}> reset</button>
                </div>
                
            </div>
        )
    }

    increment(by){ //Update state - counter++
        this.setState(
            // arrow function, previousState is defined here
            (previousState) => {    //pass object       
            return {counter: previousState.counter + by}
            }
        );
    }
    
    decrement(by){ 
        this.setState(
            // arrow function, previousState is defined here
            (previousState) => {    //pass object       
            return {counter: previousState.counter - by}
            }
        );
    } 

    reset() {
        this.setState({counter: 0});
    }
}











class CounterButton extends Component{

    //define the initial statet in a constructor
    //state => count 0
    constructor() {
        super();  //must call super!!!!! Error 1

//         this.state = {
//             counter : 0
//         }
// //in case increment method could get the state of the this.state.ounter
//         this.increment = this.increment.bind(this)
//         this.decrement = this.decrement.bind(this)
    }

    render(){
//another css style format than change style to style = {style}
    //   const style = {fontSize : "50px"}

      return (
        <div className="counter">
          <button onClick = {() => this.props.incrementmehtod(this.props.by)}>+{this.props.by}</button>
          <button onClick = {() => this.props.decrementmehtod(this.props.by)}>-{this.props.by}</button>
          
        </div>
      )
    }

    // increment(){ //Update state - counter++
    //     this.setState({
    //         //pass object
    //         counter: this.state.counter + this.props.by
    //     });
    //     this.props.incrementmehtod(this.props.by);
    // }
    
    // decrement(){ 
    //     this.setState({
    //         counter: this.state.counter - this.props.by
    //     });
    //     this.props.decrementmehtod(this.props.by);
    // }
}
//move inside the class component

// function increment() {
//     console.log('increment');
// }

CounterButton.defaultProps = {  // prop default value
    by : 1
}

CounterButton.propTypes = {   // type constraints
    by : PropTypes.number
}


export default Counter