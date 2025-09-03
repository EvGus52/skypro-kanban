import React from "react";
import AuthForm from "../components/AuthForm";

const SignIn = ({ setIsAuth }) => {
  return <AuthForm isSignUp={false} setIsAuth={setIsAuth} />;
};

export default SignIn;
