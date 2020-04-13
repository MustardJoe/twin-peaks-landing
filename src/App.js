import React from 'react';
import Header from './components/header/Header';
import MainBody from './components/mainbody/MainBody';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <MainBody />
    </div>
  );
}

export default App;
