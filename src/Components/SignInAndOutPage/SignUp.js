import React from 'react';
import FormInput from './FormInput';
import CustomButton from '../CustomButton';
import { auth } from '../../firebase/firebase.utils';
import { createUserProfileDocument } from '../../firebase/firebase.utils';
import './SignUp.scss';

export default function SignIn() {
  const [displayName, setDisplayName] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChangeDisplayName = e => {
    setDisplayName(e.target.value);
  };
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };
  const handleChangeConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChangeDisplayName}
          label="Display Name"
        />
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
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          label="Confirm Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
}
