import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation, Link } from 'react-router-dom';



function NavBar() {
const { pathname } = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg"  variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">FaceDog</Navbar.Brand>
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
          <Nav>
            {pathname === '/signin'  ? null :  <Nav.Link as={Link} to="/signin">Sign In</Nav.Link> }
            {pathname === '/signup'  ? null :  <Nav.Link eventKey={2} as={Link} to="/signup">
              Sign Up
            </Nav.Link> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;