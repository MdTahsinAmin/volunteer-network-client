import React from 'react';
import { Link } from 'react-router-dom';
import volunteerLogo from '../../logos/volunteer.png'
import './LoginHeader.css'
const LoginHeader = () => {
    return (
        <div className="header">
            <div className="container">
                <Link to='/home'><img className='differLogo' src={volunteerLogo} alt=""/></Link>
            </div>
        </div>
    );
};

export default LoginHeader;