import { NavLink } from "react-router-dom";



function NavbarLinks({ onLinkClick }: { onLinkClick?: () => void }){
    return(
        <>
         <ul>
            <NavLink to="/" onClick={onLinkClick}>
                <li role="button">Home</li>
            </NavLink>

            <NavLink to="/uslugi" onClick={onLinkClick}>
                <li role="button">Usługi</li>
            </NavLink>

            <NavLink to="/kontakt" onClick={onLinkClick}>
                <li role="button">Kontakt</li>
            </NavLink>

            <NavLink to="/kontakt" className="btn-primary" onClick={onLinkClick}>
                <li role="button">Umów wizytę</li>
            </NavLink>
        </ul>
        </>
    )
}


export default NavbarLinks;