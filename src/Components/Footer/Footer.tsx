import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { BsPersonFill  } from 'react-icons/bs';
import { FaQuestion, FaSearch  } from 'react-icons/fa';
import { MdLogin  } from 'react-icons/md';


import './Footer.sass'

const Footer = () => {

    const {userInfo} = useSelector(state => state) as any;

    return(
        <footer className="footer">
            <div><Link to="/search"><FaSearch /></Link></div>
            <div><Link to="/faq"><FaQuestion/></Link></div>
            { Object.keys(userInfo).length === 0 ? <div><Link to="/signin"><MdLogin/></Link></div> : <div><Link to="/profile"><BsPersonFill/></Link></div>}
        </footer>
    )
    
}

export default Footer;