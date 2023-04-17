import react, { useState } from 'react';
import './App.css';
import Buttons from "./components/Buttons";
import Display from './components/Display';

function App() {
  const [expression, setExpression] = useState("");

  const [number, setNumber] = useState("");

  function handleNumber(input) {
  };

  return (
    <div>
      <Display />
      <Buttons />
    </div>
  )
};

export default App;
