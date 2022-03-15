import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';
import { routes } from "../router/index";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                { routes.map(route =>
                    <Route
                        path={ route.path }
                        element={ route.component }
                        key={ route.path }
                    />
                ) }
                {/* <Route path="/about" element={ <About /> } />
                <Route path="/posts" element={ <Posts /> } />
                <Route path="/error" element={ <Error /> } />
                <Route path="posts/:id" element={ <PostIdPage /> } /> */}
                {/* <Route path='*' element={ <Navigate replace to="/error" /> } /> */ }
            </Routes>
        </div>
    )
}

export default AppRouter