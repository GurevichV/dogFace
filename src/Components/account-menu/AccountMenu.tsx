import Nav from 'react-bootstrap/Nav';
import {  Outlet, NavLink} from 'react-router-dom'
import './AccountMenu.sass'

const AccountMenu = () =>{

    return(
      <>
        <Nav fill activeKey="profile">
        <Nav.Item>
          <Nav.Link as={NavLink} to="profile">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="my-dogs">Dog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="dogsitter">Dogsitter</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="settings" >Settings</Nav.Link>
        </Nav.Item>
      </Nav>
      <Outlet />
      </>
    )
}

export default AccountMenu;

