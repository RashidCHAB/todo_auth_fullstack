import React from 'react';
import "./Aulog.css"

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SignUp } from '../features/userReducer';

const Auth = () => {

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
        dispatch(SignUp({login, password}))
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

export default Auth;