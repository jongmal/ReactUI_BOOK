import logo from './logo.svg';
import './App.css';
import React from 'react';

class Hello extends React.Component{
  render(){
    return <span>hello</span>;
  }
}
function Hello2 (){
  return <p>1: hello</p>
}
const Hello3 = () =>{
  return <p>2: hello</p>
};
const Hello4 = () => <p>3: hello</p>
const Hello5 = () =>{
  return (
    <div>
      <p>hello5</p>
      <p>hello5</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Hello></Hello>
        <Hello2></Hello2>
        <Hello3></Hello3>
        <Hello4></Hello4>
        <Hello5></Hello5>
      </header>
    </div>
  );
}

export default App;
