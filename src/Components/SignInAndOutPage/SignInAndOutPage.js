import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './SignInAndOutPage.scss';

export default function SignInAndOutPage() {
  return (
    <div className="sign-in-out">
      <SignIn />
      <SignUp />
    </div>
  );
}
