import NavBar from './NavBar/NavBar'
import Container from 'react-bootstrap/Container';
import './Header.sass'

const Header = () => {
    return(
        <header className="header" >
            <Container className="header__inner">
                <NavBar/>
            </Container>
        </header>
    )

}

export default Header;