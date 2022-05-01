import { useState } from 'react';

import { Button } from '../../common/ui/Button';
import { Input } from '../../common/ui/Input';
import { RegistrationContainer } from './styled';

export const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const nameValueHandler = (event) => {
        setName(event.target.value);
    }

    const emailValueHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordValueHandler = (event) => {
        setPassword(event.target.value);
    }

    const confirmPasswordValueHandler = (event) => {
        setConfirmPassword(event.target.value);
    }

    const signUpHandler = () => {
        const signUpData = {
            name,
            email,
            password,
            confirmPassword,
        }
        console.log('We signed up with this data:', signUpData);
    }

    return (
        <RegistrationContainer>
            Name
            <Input type="text" value={name} onChange={nameValueHandler} placeholder='Your name' ></Input>
            Email
            <Input type="text" value={email} onChange={emailValueHandler} placeholder='Your email' ></Input>
            Password 
            <Input type="text" value={password} onChange={passwordValueHandler} placeholder='Your password' ></Input>
            Confirm password
            <Input type="text" value={confirmPassword} onChange={confirmPasswordValueHandler} placeholder='Confirm password' ></Input>


            <Button title="Sign Up" onClick={signUpHandler} />
            Already have an account? Sign In 
        </RegistrationContainer>
    );
};