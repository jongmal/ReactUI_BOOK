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
const Hello6 = (props)=>{
  const {age} = props.data;
  return <p>6: hello {age}</p>
}
const data={
  age:20,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello></Hello>
        <Hello2></Hello2>
        <Hello3></Hello3>
        <Hello4></Hello4>
        <Hello5></Hello5>
        <Hello6 data={data}></Hello6>
      </header>
    </div>
  );
}

export default App;
