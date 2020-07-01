import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

function App() {
  return (
    <div className="App">
      <LocationList city='Bogota,col'></LocationList>
    </div>
  );
}

export default App;
