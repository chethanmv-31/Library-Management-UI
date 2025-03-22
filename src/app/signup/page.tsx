import React from "react";
import LoginForm from "@/components/login/loginForm";

const Signup = () => {
  return (
      <div className=" h-full flex justify-center items-center">
        <LoginForm
          isSignUp={true}
          header={"Registration"}
          subHeader={"For Both Staff & Students"}
        />
      </div>
  );
};

export default Signup;
