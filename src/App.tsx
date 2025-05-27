import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import HomePage from './Page/HomePage';


function App() {
  return (
    <div className=" h-screen flex-col  bg-blue-100">
      <HomePage />
    </div>
  );
}

export default App;
