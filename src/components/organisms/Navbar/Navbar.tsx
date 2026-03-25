import { NavLink } from "react-router-dom";
import "./Navbar.css"

import logo from "../../../assets/dentist-logo.png"

const clinicName = import.meta.env.VITE_CLINIC_NAME

function Navbar(){
    return(
        <nav className="nav-wrapper">
            <NavLink to="/">
               <img src={logo} alt={clinicName} />
            </NavLink>
        <ul>
            <NavLink to="/">
                <li role="button">Home</li>
            </NavLink>

            <NavLink to="/uslugi">
                <li role="button">Usługi</li>
            </NavLink>

            <NavLink to="/kontakt">
                <li role="button">Kontakt</li>
            </NavLink>

            <NavLink to="/kontakt" className="btn-primary">
                <li role="button">Umów wizytę</li>
            </NavLink>
        </ul>

        </nav>
    )
}
export default Navbar;