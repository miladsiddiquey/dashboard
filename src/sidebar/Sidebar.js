import React from 'react';
import './Sidebar.css'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faArchive, faBriefcase, faBuilding, faCalendarCheck, faFileSignature, faHandshake, faHome, faMoneyBill, faPowerOff, faQuestion, faSignOutAlt, faTimes, faUserSecret, faWrench } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src="https://i.ibb.co/qsTQwWj/css3-removebg-preview.png" alt="" />
                    <h1>Codersbite</h1>
                </div>
                <FontAwesomeIcon className="ic" icon={faTimes} id="sidebarIcon" onClick={() => closeSidebar()} />
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <FontAwesomeIcon className="ic" icon={faHome} />
                    <a href="#">Dashboard</a>
                </div>
                <h2>MNG</h2>
                <div className="sidebar__link">
                    <FontAwesomeIcon className="ic" icon={faUserSecret} />
                    <a href="#">Admin Management</a>
                </div>
                <div className="sidebar__link">
                    <FontAwesomeIcon className="ic" icon={faBuilding} />
                    <a href="#">Company Management</a>
                </div>
                <div className="sidebar__link">
                    <FontAwesomeIcon className="ic" icon={faWrench} />
                    <a href="#">Employee Management</a>
                </div>
                <div className="sidebar__link">
                    <FontAwesomeIcon className="ic" icon={faArchive} />
                    <a href="#">Warehouse</a>
                </div>
                <div className="sidebar__link">
                    <FontAwesomeIcon className="ic" icon={faHandshake} />
                    <a href="#">Contacts</a>
                </div>
                <h2>LEAVE</h2>
                <div className="sidebar__link">
                    <FontAwesomeIcon className="ic" icon={faQuestion} />
                    <a href="#">Requests</a>
                </div>
                <div className="sidebar__link">
                    <FontAwesomeIcon className="ic" icon={faSignOutAlt} />
                    <a href="#">Leave Policy</a>
                </div>
                <div className="sidebar__link">
                    <FontAwesomeIcon className="ic" icon={faCalendarCheck} />
                    <a href="#">Special Days</a>
                </div>
                <div className="sidebar__link">
                    <FontAwesomeIcon className="ic" icon={faFileSignature} />
                    <a href="#">Apply for leave</a>
                </div>
                <h2>PAYROLL</h2>
                <div className="sidebar__link">
                    <FontAwesomeIcon className="ic" icon={faMoneyBill} />
                    <a href="#">Payroll</a>
                </div>
                <div className="sidebar__link">
                    <FontAwesomeIcon className="ic" icon={faBriefcase} />
                    <a href="#">Paygrade</a>
                </div>
                <div className="sidebar__logout">
                    <FontAwesomeIcon className="ic" icon={faPowerOff} />
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;