import logo from './logo.svg';
import './App.css';
import React from 'react';
import EstReact from './HelloWorld';
import Lorem from './components/LoremIpsum';
import SubTitle from './components/SubTitle';

/*function HelloWorld(){
  return <h1>Hello World !</h1>
}*/
function BtnBootstrap(){
  return <a type="button" class="btn btn-primary" href='https://blog.betrybe.com/react/'>Saiba mais !</a>;
}

function App() {
  return (
    <div className="App">
        <EstReact/>

        <SubTitle/>

        <Lorem/>

        <BtnBootstrap/>
    </div>
  );
}

export default App;
