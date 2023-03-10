import './App.css';
import React from 'react';
import EstReact from './components/EstReact'
import Planets from './components/planets';
import Planet from './components/planets/planet';
import FormPlanet from './components/pages/newPlanet';



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
