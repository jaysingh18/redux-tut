import React from 'react';
import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      <User data={{name:'jaysingh',age:'26',email:'jay@gmail.com'}}/>
    </div>
  );
}

export default App;
