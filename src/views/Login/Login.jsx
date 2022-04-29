import { useState } from 'react';

import { Button } from '../../common/ui/Button';
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
            <input type="text" value={email} onChange={emailValueHandler} />
            <input type="text" value={password} onChange={passwordValueHandler} />
            <input type="checkbox" checked={isRemember} onChange={rememberHandler} />
            Remember me?

            <Button title="Sign In" onClick={loginHandler} />
        </LoginContainer>
    );
};