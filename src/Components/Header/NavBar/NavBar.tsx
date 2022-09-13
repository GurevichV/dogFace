import { Link } from 'react-router-dom';
import NavLink from '../NavLink/NavLink';
import SignInButton from '../SignInButton/SignInButton';
import SignUpButton from '../SignUpButton/SignUpButton';

const NavBar = () => {
    return(    
        <div className="header__navbar">
            <div className="header__logo">
                <Link to='/'><img src="/assets/images/logo-svg.png" alt="logo"/></Link>
            </div>
            <NavLink />
            <div className="header__buttons">
                <SignInButton/> |
                <SignUpButton/>
            </div>
        </div>
    )

}

export default NavBar;