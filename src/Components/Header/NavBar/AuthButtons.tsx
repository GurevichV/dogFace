import {Nav} from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';


const AuthButtons = () => {
    const { pathname } = useLocation();
    return(
        <Nav>
            {pathname === '/signin'  ? null :  <Nav.Link as={Link} to="/signin">Sign In</Nav.Link> }
            {pathname === '/signup'  ? null :  <Nav.Link eventKey={2} as={Link} to="/signup">
                Sign Up
            </Nav.Link>}
        </Nav>
    )

}

export default AuthButtons;