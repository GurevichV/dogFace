import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import AuthButtons from './AuthButtons';
import ProfileMenu from './ProfileMenu';
import { setUserInfo } from '../../../actions';

function NavBar() {

const {user_info} = useSelector(state => state) as any;
const dispatch = useDispatch();


useEffect(() => {
  const user_info = JSON.parse(localStorage.getItem('user-info'))
  dispatch(setUserInfo(user_info))
}, []);


  return (
    <Navbar collapseOnSelect expand="lg"  variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src="dogFace/assets/images/logo.png" alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/search">Dog Sitters</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/dog-boarding">Dog Boarding</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/day-care">
                Doggy Day Care
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dog-walking">Dog Walking</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/dog-traning">
                Dog Traning
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          { Object.keys(user_info).length === 0 ? <AuthButtons/> : <ProfileMenu name={user_info.name}/>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;