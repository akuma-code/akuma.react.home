import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from "../context";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import { publicRoutes, privateRoutes } from "../router/index";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext)
    console.log(isAuth);

    if (isLoading) {
        return <Loader />
    }
    return (
        isAuth ?
            <Routes> //? isAuth = true
                { privateRoutes.map(route =>
                    <Route
                        path={ route.path }
                        element={ route.component }
                        key={ route.path }
                    />
                ) }

            </Routes>
            :
            <Routes>  //? isAuth = false
                { publicRoutes.map(route =>
                    <Route
                        path={ route.path }
                        element={ route.component }
                        key={ route.path }
                    />
                ) }

            </Routes>
    )
}
//!<Route path="*" element={<Navigate replace={true} to= <Error />} /> !navigate?? */ 

export default AppRouter

