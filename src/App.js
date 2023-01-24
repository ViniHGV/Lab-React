import './App.css';
import React from 'react';
import EstReact from './components/EstReact'
import PlanetList from './components/planets';
import Planets from './components/planets/planet';


function App() {
  return (
    <div className="App">

      <div className='EstReact'>
        <EstReact/>
      </div>

      <div className='Planets'>
        <PlanetList/>
        <Planets/>
      </div>

    </div>
  );
}

export default App;
