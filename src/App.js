import About from './Components/About/About';
import Home from './Components/Home/Home';
import CarList from './Components/CarList/CarList';
import CarForm from './Components/CarForm/CarForm';
import { useState } from "react";

import './App.css';
import AppProvider from './Components/Context/AppProvider';

function App() {

  const [content, setContent] = useState("home");

  const contentList = {
    home: <Home />,
    about: <About />,
    carList: <AppProvider><CarList /></AppProvider>,
    carForm: <AppProvider><CarForm /></AppProvider>,
  }


  return (
    <>
      <nav>
        <ul>
          <li><a href="#" onClick={() => setContent("home")}>Home</a></li>
          <li><a href="#" onClick={() => setContent("about")}>Sobre</a></li>
          <li><a href="#" onClick={() => setContent("carList")}>Carros</a></li>
          <li><a href="#" onClick={() => setContent("carForm")}>Adicionar Carro</a></li>
        </ul>
      </nav>
      <div style={{ marginTop: "20px", marginLeft: "20px" }}>
        {contentList[content]}
      </div>
    </>
  );
}

export default App;
