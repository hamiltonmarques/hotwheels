import React, { useState } from "react"
import AppContext from "./AppContext"
import carsData from '../../../src/carsData'

const AppProvider = ({ children }) => {
    const [dados, setDados] = useState([...carsData])

    const fornecerDados = (novosDados) => {
        setDados(novosDados)
    }

    return (
        <AppContext.Provider value={{ dados, fornecerDados }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;