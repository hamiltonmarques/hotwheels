import React, { useContext, useState } from "react";
import AppContext from "../Context/AppContext";

const CarForm = () => {

    const { dados, fornecerDados } = useContext(AppContext);
    const [carName, setCarName] = useState('')
    const [carMarca, setCarMarca] = useState('')
    const [carCor, setCarCor] = useState('')
    const [carAno, setCarAno] = useState('')
    const [index, setIndex] = useState(6)

    return (
        <>
            <h1 style={{ marginLeft: "20px" }}>Adicionar Carro</h1>
            <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                <form id="carForm">
                    <label>
                        Nome
                        <input type='text' value={carName} onChange={(e) => setCarName(e.target.value)} style={{ marginLeft: "5px" }} />
                    </label>
                    <br />
                    <label>
                        Marca
                        <input type='text' value={carMarca} onChange={(e) => setCarMarca(e.target.value)} style={{ marginLeft: "5px" }} />
                    </label>
                    <br />
                    <label>
                        Cor
                        <input type='text' value={carCor} onChange={(e) => setCarCor(e.target.value)} style={{ marginLeft: "5px" }} />
                    </label>
                    <br />
                    <label>
                        Ano
                        <input type='text' value={carAno} onChange={(e) => setCarAno(e.target.value)} style={{ marginLeft: "5px" }} />
                    </label>
                    <div>
                        <button type="button" onClick={() => {
                            if (carName === '' || carMarca === '' || carCor === '' || carAno === '') {
                                alert('Preencha todos os campos!')
                            }
                            else {
                                fornecerDados([...dados, { id: index, nome: carName, marca: carMarca, cor: carCor, ano: carAno }])
                                setCarName('')
                                setCarMarca('')
                                setCarCor('')
                                setCarAno('')
                                setIndex(index + 1)
                                alert('Carro adicionado com sucesso!')
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

export default CarForm;