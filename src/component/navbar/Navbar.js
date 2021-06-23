import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClock, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <div className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
            <FontAwesomeIcon className="i" icon={faBars} />
                
            </div>
            <div className="navbar__left">
                <a href="#">Subscribers</a>
                <a href="#">Video Management</a>
                <a className="active_link" href="#">Admin</a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <FontAwesomeIcon className="i" icon={faSearch} />
                </a>
                <a href="#">
                    <FontAwesomeIcon className="i" icon={faClock} />
                   
                </a>
                <a href="#">
                    <img width="30px" src="https://i.ibb.co/DpQn75F/a.jpg" alt="" />
                </a>
            </div>
        </div>
    );
};

export default Navbar;