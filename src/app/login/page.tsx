import React from "react";
import LoginForm from "@/components/loginForm";

const login = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <LoginForm
          header={"Welcome Back !"}
          subHeader={" Sign in to continue to your Digital Library "}
          isSignUp={false}
        />
      </div>
    </>
  );
};

export default login;
