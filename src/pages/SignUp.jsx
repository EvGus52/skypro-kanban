import React from "react";
import AuthForm from "../components/AuthForm";

const SignUp = ({ setIsAuth }) => {
  return <AuthForm isSignUp setIsAuth={setIsAuth} />;
};

export default SignUp;
