import NavBar from './NavBar/NavBar'
import './Header.sass'

const Header = () => {
    return(
        <header className="header" >
            <div className="header__inner">
                <NavBar/>
            </div>
        </header>
    )

}

export default Header;