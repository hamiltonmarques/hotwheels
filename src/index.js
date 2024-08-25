import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import CarList from './Components/CarList/CarList';
import CarForm from './Components/CarForm/CarForm';
import CarDetail from './Components/CarDetail/CarDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from './Components/Context/AppProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="car-list" element={<AppProvider><CarList /></AppProvider>} />
          <Route path="car-form" element={<AppProvider><CarForm /></AppProvider>} />
          <Route path="car-detail" element={<AppProvider><CarDetail /></AppProvider>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
