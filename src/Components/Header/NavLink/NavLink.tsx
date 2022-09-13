import React from 'react';
import { Link } from "react-router-dom";
import './NavLink.sass'

 const NavLink = () => {
    return(
        <ul className="nav">
            <li className="nav__link"><Link to="/search">To find a dog sitter</Link></li>
            <li className="nav__link"><Link to="/faq">FQA</Link></li>
        </ul>
    )

}

export default NavLink;