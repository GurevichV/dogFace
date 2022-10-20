import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


import './SideMenu.sass'

const SideMenu = () => {
    const [open, setOpen] = useState(true);
    const [activeItem, setActiveItem] = useState(false)
    const handleClick = () => {
        setOpen(!open);
      };

    const navLinkStyle = ({isActive}) => {
        isActive ? setActiveItem(true) : setActiveItem(false)
    }
  return (
    <>
        <List component="nav">
            <ListItemButton className={open? 'active': '' } onClick={handleClick}>
                <ListItemText primary="My account" />
                {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton className='subitem-side-menu' sx={{ pl: 4 }}>
                    <NavLink to="account/profile" ><ListItemText primary="Profile" /></NavLink>
                </ListItemButton>
                <ListItemButton className='subitem-side-menu' sx={{ pl: 4 }}>
                    <NavLink to="account/my-dogs" ><ListItemText primary="Dog" /></NavLink>
                </ListItemButton>
                <ListItemButton className='subitem-side-menu' sx={{ pl: 4 }}>
                    <NavLink to="account/dogsitter" ><ListItemText primary="Dogsitter" /></NavLink>
                </ListItemButton>
                <ListItemButton className='subitem-side-menu' sx={{ pl: 4 }}>
                    <NavLink to="account/settings" ><ListItemText primary="Setings" /></NavLink>
                </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton className={`item-side-menu ${activeItem? 'active' : ''}`}>
                <NavLink style={navLinkStyle} to="calendar" ><ListItemText primary="Calendar" /></NavLink>
            </ListItemButton>
        </List>
    </>
  )
}

export default SideMenu;