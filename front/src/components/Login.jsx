import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SignIn } from '../features/userReducer';
import "./Aulog.css"
const Login = () => {
    const dispatch = useDispatch()
    
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = (e) => {
        setLogin(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignUp = (e) => {
        dispatch(SignIn({login, password}))
        e.preventDefault()
        setPassword("")
        setLogin("")
    }
    return (
        <div>
            <form onSubmit={handleSignUp}>
                <div className='inputs'>
                    <input type="text" value={login} onChange={handleLogin} />
                    <input type="text" value={password} onChange={handlePassword} />
                </div>

                <button onClick={handleSignUp}>SignUp</button>
            </form>
        </div>
    );
};

export default Login;