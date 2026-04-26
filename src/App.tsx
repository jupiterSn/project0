import React from "react";
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Jupiter</h1>
    </div>
  );
};

export default App;