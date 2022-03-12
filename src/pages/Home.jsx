import React from 'react'
import '../styles/App.css'

const Home = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <a href='/posts'>POSTS</a>
                <br></br>
                <a href='/about'>ABOUT</a>
            </div>
        </div>
    )
}

export default Home