import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
       
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />       
        <Login />
      </header>
    </div>
  );
}

export default App;
