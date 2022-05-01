import { useState } from 'react';

import { Button } from '../../common/ui/Button';
import { Input } from '../../common/ui/Input';
import { LoginContainer } from './styled';

export const Login = () => {
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
        <LoginContainer>
            Email
            <Input type="text" value={email} onChange={emailValueHandler} placeholder='Your email' ></Input>
            Password 
            <Input type="text" value={password} onChange={passwordValueHandler} placeholder='Your password' ></Input>
            <Input type="checkbox" checked={isRemember} onChange={rememberHandler} ></Input>
            Remember me?

            <Button title="Sign In" onClick={loginHandler} />
            Don’t have an account? Sign Up
        </LoginContainer>
    );
};