import React, { useContext, useState } from "react";
import AppContext from "../Context/AppContext";
import { useLocation } from 'react-router-dom'

const CarDetail = () => {

    const location = useLocation()
    const { carData } = location.state ? location.state : ''

    const { dados, fornecerDados } = useContext(AppContext);
    const [carName, setCarName] = useState(carData.nome)
    const [carMarca, setCarMarca] = useState(carData.marca)
    const [carCor, setCarCor] = useState(carData.cor)
    const [carAno, setCarAno] = useState(carData.ano)

    return (
        <>
            <h1 style={{ marginLeft: "20px" }}>Detalhe do Carro</h1>
            <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                <form id="carForm">
                    <label>
                        Nome
                        <input type='text' value={carName} onChange={(e) => setCarName(e.target.value)} style={{ marginLeft: "5px" }}/>
                    </label>
                    <br />
                    <label>
                        Marca
                        <input type='text' value={carMarca} onChange={(e) => setCarMarca(e.target.value)} style={{ marginLeft: "5px" }}/>
                    </label>
                    <br />
                    <label>
                        Cor
                        <input type='text' value={carCor} onChange={(e) => setCarCor(e.target.value)} style={{ marginLeft: "5px" }}/>
                    </label>
                    <br />
                    <label>
                        Ano
                        <input type='text' value={carAno} onChange={(e) => setCarAno(e.target.value)} style={{ marginLeft: "5px" }}/>
                    </label>
                    <div>
                        <button type="button" onClick={() => {
                            if (carName === '' || carMarca === '' || carCor === '' || carAno === '') {
                                alert('Preencha todos os campos!')
                            }
                            else {
                                const newCarList = dados.map(car => car.id === carData.id ? 
                                    { id: car.id, nome: carName, marca: carMarca, cor: carCor, ano: carAno } : car)

                                fornecerDados(newCarList)

                                alert('Carro salvo com sucesso!')
                            }
                        }}>
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CarDetail;