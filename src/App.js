import './App.css';
import React from 'react';
import EstReact from './components/EstReact'
import Planets from './components/planets';
import Planet from './components/planets/planet';
import addPlanet from './components/Contact';



function App() {
  return (
    <div className="App">
      
      <div className='EstReact'>
        <EstReact/>
        <addPlanet/>
      </div>

      <div className='Planets'>
        <Planets/>
      </div>

    </div>
  );
}

export default App;
