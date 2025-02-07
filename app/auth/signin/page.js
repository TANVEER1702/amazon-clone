"use client";

import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sign In</h1>
      <button onClick={() => signIn('google')} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;