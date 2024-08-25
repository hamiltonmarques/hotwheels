import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { Link } from "react-router-dom";

function CarList() {

    const { dados, fornecerDados } = useContext(AppContext);

    function deleteCar(id) {
        const newCarList = dados.filter(car => car.id != id)
        fornecerDados(newCarList)
    }

    const cars = dados.map((car, index) =>
        <li key={index}><Link to="/car-detail" state={{ carData: car }}>{car.nome} - {car.marca} - {car.cor} - {car.ano} </Link>
            <button onClick={() => deleteCar(car.id)}>Excluir</button></li>)

    return (
        <>
            <h1 style={{ marginLeft: "20px" }}>Lista de Carros</h1>
            <ul>{cars}</ul>
            <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                <Link to="/car-form">Adicionar Carro</Link>
            </div>
        </>
    )
}

export default CarList;