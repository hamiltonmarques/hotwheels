import About from './Components/About/About';
import Home from './Components/Home/Home';
import CarList from './Components/CarList/CarList';
import CarForm from './Components/CarForm/CarForm';
import { useState } from "react";

import './App.css';

function App() {

  const [divState, setDivState] = useState(null);

  return (
    <>
      <nav>
        <ul>
          <li><a href="#" onClick={() => { setDivState(() => <Home />) }}>Home</a></li>
          <li><a href="#" onClick={() => { setDivState(() => <About />) }}>Sobre</a></li>
          <li><a href="#" onClick={() => { setDivState(() => <CarList />) }}>Carros</a></li>
          <li><a href="#" onClick={() => { setDivState(() => <CarForm />) }}>Adicionar Carro</a></li>
        </ul>
      </nav>
      <div style={{ marginTop: "20px", marginLeft: "20px" }}>
        {divState}
      </div>
    </>
  );
}

export default App;
