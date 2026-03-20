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
                <li role="button"><NavLink to="/" alt="logo">Home</NavLink></li>
                <li role="button"><NavLink to="/uslugi">Usługi</NavLink></li>
                <li role="button"><NavLink to="/kontakt">Kontakt</NavLink></li>
                <li role="button"><NavLink to="/kontakt" className="btn-primary">Umów wizytę</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar;