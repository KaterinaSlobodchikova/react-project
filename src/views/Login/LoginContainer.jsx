import { useState } from 'react';
import { Login } from './Login';

export const LoginContainer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRemember, setIsRemember] = useState(false);

    const emailValueHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordValueHandler = (event) => {
        setPassword(event.target.value);
    }

    const loginHandler = () => {
        const loginData = {
            email,
            password,
            rememberMe: isRemember,
        }
        console.log('We logged in with this data:', loginData);
    }

    const rememberHandler = () => {
        setIsRemember(!isRemember);
    }

    return (
        <Login 
            email={email} 
            password={password} 
            isRemember={isRemember} 
            emailValueHandler={emailValueHandler} 
            passwordValueHandler={passwordValueHandler} 
            rememberHandler={rememberHandler} 
            loginHandler={loginHandler} 
        />);
};