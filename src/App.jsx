import { useState } from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="container">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;