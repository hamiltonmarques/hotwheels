import { useContext, useState } from "react";
import AppContext from "../Context/AppContext";
import CarForm from '../../Components/CarForm/CarForm';
import AppProvider from '../../Components/Context/AppProvider';

function CarList() {

    const { dados } = useContext(AppContext);

    const cars = dados.map((car, index) =>
        <li key={index}><a href="#">{car.nome} - {car.marca} - {car.cor} - {car.ano} </a>
            <button>Excluir</button></li>)

    return (
        <>
            <h1>Lista de Carros</h1>
            <ul>{cars}</ul>
            <div style={{ marginTop: "20px" }}>
                <a href="#">Adicionar Carro</a>
            </div>
        </>
    )
}

export default CarList;