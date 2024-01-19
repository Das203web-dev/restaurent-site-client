import React, { useContext } from 'react';
import { AuthContext } from '../component/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return (
            <div className='h-auto relative'>
                <span className="loading loading-spinner loading-lg flex h-screen mx-auto"></span>
            </div>
        )
    }
    if (user) {
        return children
    }
    return <Navigate state={location?.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;