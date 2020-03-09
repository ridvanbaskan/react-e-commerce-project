import React from 'react';
import FormInput from './FormInput';
import CustomButton from '../CustomButton';
import './signIn.scss';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

export default function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setPassword('');
      setEmail('');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
