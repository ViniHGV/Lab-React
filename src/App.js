import './App.css';
import React from 'react';
import EstReact from './HelloWorld';
import Lorem from './components/LoremIpsum';
import SubTitle from './components/SubTitle';
import PlanetsList from './components/planets/planets';

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

        <PlanetsList/>
    </div>
  );
}

export default App;
