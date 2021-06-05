//Class Component
import { Component } from 'react';

//default can directly used it
export default class FirstComponet extends Component{
    render(){
      return (
        <div className="firstComponet">
          My first Component
        </div>
      )
    }
  }

  //{} is needed in App.js file import
  export class SecondComponet extends Component{
    render(){
      return (
        <div className="secondComponet">
          My second Component
        </div>
      )
    }
  }
  