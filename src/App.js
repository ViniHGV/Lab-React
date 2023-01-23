import './App.css';
import React from 'react';
import EstReact from './EstReact';
import PlanetsList from './components/planets/planets';

function BtnBootstrap(){
  return <a type="button" class="btn btn-primary" href='https://blog.betrybe.com/react/'>Saiba mais !</a>;
}

function App() {
  return (
    <div className="App">
      <div className='EstReact'>
        <EstReact/>
        
         <BtnBootstrap/>
      </div>

        <PlanetsList/>
    </div>
  );
}

export default App;
