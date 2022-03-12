import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to='/posts'>POSTS</Link>
                <br />

                <Link to='/about'>ABOUT</Link>
            </div>
        </div>
    )
}

export default Navbar