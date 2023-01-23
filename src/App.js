import logo from './logo.svg';
import './App.css';
import React from 'react';
import EstReact from './HelloWorld';
import Lorem from './components/LoremIpsum';
import SubTitle from './components/SubTitle';
import Planets from './components/planets';

/*function HelloWorld(){
  return <h1>Hello World !</h1>
}*/
function BtnBootstrap(){
  return <a type="button" class="btn btn-primary" href='https://blog.betrybe.com/react/'>Saiba mais !</a>;
}

function App() {
  return (
    <div className="App">
      <div className='EstReact'>
         <EstReact/>
         <SubTitle/>
         <Lorem/>
         <BtnBootstrap/>
      </div>

      <div className='ListPlanets'>
        <Planets/>
      </div>
    </div>
  );
}

export default App;
