import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ element, isAuthenticated, fallbackPath =  '/signin'}) => {
    return  isAuthenticated ? (
        element
    ) : (
        <Navigate to={fallbackPath} replace state={{ from: window.location.pathname }} />
    );
};

export default PrivateRoute