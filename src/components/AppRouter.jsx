import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import Posts from '../pages/Posts';
import PostIdPage from './PostIdPage';

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/error" element={<Error />} />
                <Route path="posts/:id" element={<PostIdPage />} />
                <Route path='*' element={<Navigate replace to="/error" />} />
            </Routes>
        </div>
    )
}

export default AppRouter