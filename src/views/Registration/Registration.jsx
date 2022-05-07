import { useState } from 'react';

import { Button } from '../../common/ui/Button';
import { Input } from '../../common/ui/Input';
import { RegistrationContainer } from './styled';

export const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const nameValueHandler = (event) => {
    setName(event.target.value);
  };

  const emailValueHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordValueHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordValueHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const signUpHandler = () => {
    const signUpData = {
      name,
      email,
      password,
      confirmPassword,
    };
    console.log('Registration request was sent with this data:', signUpData);
  };

  return (
    <RegistrationContainer>
      <p>Name</p>
      <Input type="text" value={name} onChange={nameValueHandler} placeholder="Your name" />
      <p>Email</p>
      <Input type="text" value={email} onChange={emailValueHandler} placeholder="Your email" />
      <p>Password</p>
      <Input type="password" value={password} onChange={passwordValueHandler} placeholder="Your password" />
      <p>Confirm password</p>
      <Input type="password" value={confirmPassword} onChange={confirmPasswordValueHandler} placeholder="Confirm password" />

      <Button title="Sign Up" onClick={signUpHandler} />
      <p>Already have an account? Sign In</p>
    </RegistrationContainer>
  );
};
