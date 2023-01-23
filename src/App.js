import './App.css';
import React from 'react';
import EstReact from './EstReact';
import PlanetsList from './components/planets/planets';


function App() {
  return (
    <div className="App">
      <div className='EstReact'>
        <EstReact/>
      </div>

        <PlanetsList/>
    </div>
  );
}

export default App;
