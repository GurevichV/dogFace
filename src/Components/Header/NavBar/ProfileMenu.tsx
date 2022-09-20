import { useDispatch } from 'react-redux';
import {Nav , NavDropdown} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
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
        <Nav>
            <NavDropdown title={props.name} id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/my-dog">
                My Dog
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dogsitter">Dogsitter</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dogsitter">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logOut} as={Link} to="/dog-traning">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )

}

export default ProfileMenu;