import React from 'react';
import Header from './components/header/Header';
import MainBody from './components/mainbody/MainBody';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
