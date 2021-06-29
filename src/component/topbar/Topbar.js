import React from 'react';
import './Topbar.css'
import { NotificationsNone, MailOutline } from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWraper">
                <div className="topLeft">
                    <span className="logo">Logo here</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconNum">6</span>
                    </div>
                    <div className="topbarIconContainer">
                        <MailOutline />
                        <span className="topIconNum">2</span>
                    </div>
                <img src="https://i.ibb.co/LtmKddw/ee4d485d-620c-44c4-9f17-ee15fac52e2a.jpg" alt="" className="profile"/>
                </div>
            </div>
        </div>
    );
};

export default Topbar;