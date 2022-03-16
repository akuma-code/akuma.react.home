import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context"
import AkuButton from "../UI/button/AkuButton"

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem("auth")

    }
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to='/posts'>POSTS</Link>
                <br />
                <Link to='/about'>ABOUT</Link>
            </div>
            <AkuButton
                onClick={ logout }
            >
                Выйти
            </AkuButton>
        </div>
    )
}

export default Navbar