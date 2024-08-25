import About from './Components/About/About';
import Home from './Components/Home/Home';
import CarList from './Components/CarList/CarList';
import CarForm from './Components/CarForm/CarForm';
import CarDetail from './Components/CarDetail/CarDetail';
import AppProvider from './Components/Context/AppProvider';
import NavBar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/car-list" element={<AppProvider><CarList /></AppProvider>} />
        <Route path="/car-form" element={<AppProvider><CarForm /></AppProvider>} />
        <Route path="/car-detail" element={<AppProvider><CarDetail /></AppProvider>} />
      </Routes>
    </>
  );

}

export default App;
