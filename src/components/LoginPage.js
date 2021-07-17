import React from 'react';
import LoginForm from './LoginForm';
import Header from './Header';


const LoginPage = (props) => {
    return (
        <div className="login-page">
            <Header />
            <div className="center-40">
                <LoginForm {...props}/> 
            </div>
        </div>
    )
}

export default LoginPage;