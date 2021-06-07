import logo from './logo.svg';
import FirstComponet, {SecondComponet} from './components/learning-examples/FirstComponent'
import ThirdComponet from './components/learning-examples/ThirdComponent'
import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'
import './App.css';
import { Component } from 'react';



function App() {
  return (
    <div className="App">
        <TodoApp></TodoApp>

      
      {/* this is for counter package
      <Counter></Counter> */}

      {/* <FirstComponet></FirstComponet>
      <SecondComponet></SecondComponet>
      <ThirdComponet></ThirdComponet> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      
    </div>
  );
}




export default App;
