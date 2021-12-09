import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TokenForm from './components/TokenForm/TokenForm';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Header />
        <TokenForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
