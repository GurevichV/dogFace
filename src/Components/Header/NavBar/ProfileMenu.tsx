import { useDispatch } from 'react-redux';
import {Nav , NavDropdown} from 'react-bootstrap';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { clearUserInfo } from '../../../actions';



const ProfileMenu = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();



      const logOut = (e) =>{
        e.preventDefault();
        localStorage.clear();
        dispatch(clearUserInfo())
        navigate('/signin')
      }

    return(
      <>
        <Nav>
            <NavDropdown title={props.name} id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="dashboard/account/profile">My account</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="dashboard/calendar">Calendar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logOut} as={Link} to="/signin">Log Out</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </>
    )

}

export default ProfileMenu;