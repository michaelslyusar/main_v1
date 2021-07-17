import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                Home
            </div>
            <div className="header-login-menu">
                <Link className="login-menu-button" id="login-button" to="/">Login</Link>
                <Link className="login-menu-button" id="register-button" to="/register">Register</Link>
                {/* <button className="login-menu-button" id="login-button" href="/">Login</button> */}
                {/* <button className="login-menu-button" id="register-button" href="">Register</button> */}
            </div>
        </div>
    )
}

export default Header;
