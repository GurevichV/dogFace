import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'

const AccountMenu = () =>{
    return(
        <Nav fill >
        <Nav.Item>
          <Nav.Link as={Link} to="profile">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="my-dogs">Dog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="dogsitter">Dogsitter</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="settings" >Settings</Nav.Link>
        </Nav.Item>
      </Nav>
    )
}

export default AccountMenu;

