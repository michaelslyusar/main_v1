import React from 'react';
import { Route,Redirect } from 'react-router-dom';


const ProtectedRoute = ({ component: Component, ...rest}) => {
    
    console.log('Protected',sessionStorage.getItem('token'));
    return(
        <Route
            {...rest}
            render={props => {
                if(sessionStorage.getItem('token')){
                    return <Component {...props} />;
                }else{
                    return <Redirect to="/"/>;
                }
            }}
        />
    );
};

export default ProtectedRoute;