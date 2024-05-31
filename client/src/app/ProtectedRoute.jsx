import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "../api/userApi";

const ProtectedRoute = ({ element, ...rest }) => {
    return isAuthenticated() ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate
            to="/iniciar-sesion"
            replace
            state={{ from: rest.location }}
        />
    );
};

export default ProtectedRoute;
