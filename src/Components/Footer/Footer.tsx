import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserInfo } from '../../actions';

import { BsPersonFill  } from 'react-icons/bs';
import { FaQuestion, FaSearch  } from 'react-icons/fa';
import { MdLogin  } from 'react-icons/md';


import './Footer.sass'

const Footer = () => {

    const {user_info} = useSelector(state => state) as any;
    const dispatch = useDispatch();


    useEffect(() => {
    const user_info = JSON.parse(localStorage.getItem('user-info'))
    dispatch(setUserInfo(user_info))
    }, []);


    return(
        <footer className="footer">
            <div><Link to="/search"><FaSearch /></Link></div>
            <div><Link to="/faq"><FaQuestion/></Link></div>
            { Object.keys(user_info).length === 0 ? <div><Link to="/signin"><MdLogin/></Link></div> : <div><Link to="/profile"><BsPersonFill/></Link></div>}
        </footer>
    )


    
}

export default Footer;