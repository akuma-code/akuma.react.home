import React, { useContext } from 'react'
import AkuButton from "../components/UI/button/AkuButton"
import AkuInput from "../components/UI/input/AkuInput"
import { AuthContext } from "../context"
// import { isAuth, setIsAuth } from "../context"


const Login = () => {
    const { isAuth, setIsAuth, isLoading, setIsLoading } = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem("auth", "true")
        setIsLoading(false)
    }
    return (
        <div>
            <h1>LoginPage</h1>
            <form
                onSubmit={ login }
            >

                <AkuInput placeholder="login"
                />

                <AkuInput placeholder="password"
                />

                <AkuButton
                >
                    Войти
                </AkuButton>
            </form>
        </div>
    )
}

export default Login