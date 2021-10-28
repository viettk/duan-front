import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
function PrivateRoutes({component: Component, authed, ...rest}){
    return (
        <Route {...rest} render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: 'login', state:{from: props.location}}} />
    }/>
    );

}
export default PrivateRoutes;