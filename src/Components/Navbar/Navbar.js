import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Sobre</NavLink>
                    </li>
                    <li>
                        <NavLink to="/car-list">Carros</NavLink>
                    </li>
                    <li>
                        <NavLink to="/car-form">Adicionar Carro</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default NavBar;