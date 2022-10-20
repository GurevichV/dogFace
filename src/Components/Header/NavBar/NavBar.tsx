import { useSelector } from 'react-redux';
import {Container, Row, Col, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import AuthButtons from './AuthButtons';
import ProfileMenu from './ProfileMenu';


function NavBar() {

const {userInfo} = useSelector(state => state) as any;

  return (
    <Navbar collapseOnSelect expand="lg"  variant="light">
      <Container>
        <Row>
        <Col xs={2}>
          <Navbar.Brand as={Link} to="/"><img src="/dogFace/assets/images/logo.png" alt="Logo" /></Navbar.Brand>
        </Col>
        <Col xs={10}>
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
              { Object.keys(userInfo).length === 0 ? <AuthButtons/> : <ProfileMenu name={userInfo.name}/>}
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;