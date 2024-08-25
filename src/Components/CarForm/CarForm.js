import React, { useContext, useState } from "react";
import AppContext from "../Context/AppContext";

const CarForm = () => {

    const { fornecerDados } = useContext(AppContext);
    const [carName, setCarName] = useState('')
    const [carMarca, setCarMarca] = useState('')
    const [carCor, setCarCor] = useState('')
    const [carAno, setCarAno] = useState('')

    return (
        <>
            <h1>Adicionar Carro</h1>
            <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                <form id="carForm">
                    <label>
                        Nome:
                        <input type='text' value={carName} onChange={(e) => setCarName(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Marca:
                        <input type='text' value={carMarca} onChange={(e) => setCarMarca(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Cor:
                        <input type='text' value={carCor} onChange={(e) => setCarCor(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Ano:
                        <input type='text' value={carAno} onChange={(e) => setCarAno(e.target.value)} />
                    </label>
                    <div>
                        <button type="button" onClick={() => {
                            fornecerDados({ nome: carName, marca: carMarca, cor: carCor, ano: carAno })
                            alert('Carro adicionado com sucesso!')
                        }}>
                            Adicionar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CarForm;