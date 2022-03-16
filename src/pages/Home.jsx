import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/App.css'


const Home = () => {
    return (
        <div className='home__cont'>
            <div className='home__item'>
                <Link to='/login'>LOGIN</Link>
            </div>
            <div className='home__item'>
                <Link to='/posts'>POSTS</Link>
            </div>

            <div className='home__item'>
                <Link to='/about'>ABOUT</Link>
            </div>
        </div>
    )
}

export default Home