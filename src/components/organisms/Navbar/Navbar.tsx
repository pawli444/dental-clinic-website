import { NavLink } from "react-router-dom";
import "./Navbar.css"

import logo from "../../../assets/dentist-logo.png"

import NavbarLinks from "../../molecules/NavbarLinks/NavbarLinks";

const clinicName = import.meta.env.VITE_CLINIC_NAME

import { useState } from "react";

function Navbar(){

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    
    return(
    <>
        <nav className="nav-wrapper">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
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

            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
            </button>
            { menuOpen &&
            <>
            <div className="overlay" onClick={() => setMenuOpen(false)} />
            <div className={`burger-menu ${menuOpen ? "open" : ""}`}>
                <NavbarLinks onLinkClick={() => setMenuOpen(false)}/>
                <button className="close" onClick={() => setMenuOpen(false)}> ❌</button>
            </div>
            </>
            }
        </nav>

        


            
        
  

    </>    
    )
}
export default Navbar;