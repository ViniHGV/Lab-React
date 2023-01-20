import logo from './logo.svg';
import './App.css';
import React from 'react';
import HelloWorld from './HelloWorld';
import Lorem from './components/LoremIpsum';

/*function HelloWorld(){
  return <h1>Hello World !</h1>
}*/

function App() {
  return (
    <div className="App">
        <HelloWorld/>
        <Lorem/>
    </div>
  );
}

export default App;
