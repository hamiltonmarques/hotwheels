import carsData from '../../../src/carsData'

function CarList() {

    const cars = carsData.map((car, index) =>
        <li key={index}><a href="#">{car.nome} - {car.marca} || </a>
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