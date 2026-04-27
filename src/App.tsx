import React from "react";
import Navbar from './components/Navbar/Navbar';
import CustomSlider from './components/slider/slider';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Jupiter,this will be my project for the rest of the semester!</h1>
      <CustomSlider
        min={0}
        max={100}
        step={5}
        defaultValue={50}
        onChange={(val) => console.log("Slider value:", val)}
      />
    </div>
  );
};

export default App;