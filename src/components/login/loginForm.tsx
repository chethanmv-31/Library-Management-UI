"use client";

import { updateForm } from "@/store/actions/formActions";
import { RootState } from "@/store/store";
import styled from "@emotion/styled";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import OtpVerification from "./OtpVerification";

import { useRouter } from "next/navigation";

import { authService } from "@/services/authService";

interface TypeProps {
  header: string;
  subHeader: string;
  isSignUp: boolean;
}

interface IFormInput {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "lightgray",
    },
    "&:hover fieldset": {
      borderColor: "lightgray",
    },
    "&.Mui-focused fieldset": {
      borderColor: "lightgray",
      outline: "none",
    },
  },
  // Add these styles to align the helper text
  "& .MuiFormHelperText-root": {
    marginLeft: 0,
    marginRight: 0,
  },
});

const LoginForm = ({ isSignUp, header, subHeader }: TypeProps) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      userName: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
  });
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form);
  const [showPassword, setShowPassword] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    dispatch(updateForm(data));

    if (isSignUp) {
      try {
        await authService.signup({
          username: data.userName,
          email: data.email,
          firstname: data.firstName,
          lastname: data.lastName,
          password: data.password,
          role: "ADMIN",
        });
        router.push("/login");
      } catch (error) {
        console.error("Signup failed:", error);
      }
    } else {
      try {
        const response = await authService.signin({
          username: data.userName,
          password: data.password,
          role: "ADMIN",
        });

        localStorage.setItem("accessToken", response.accessToken);

        // Get the stored redirect path or default to home
        const redirectPath = localStorage.getItem('redirectPath') || '/';
        localStorage.removeItem('redirectPath'); // Clean up
        router.push(redirectPath);
      } catch (error) {
        console.error("Login failed:", error);
      }
    }
  };

  // Add this handler
  const handleForgotPassword = () => {
    setShowVerification(true);
  };

  // Update the verification form's input section
  if (showVerification) {
    return <OtpVerification onBack={() => setShowVerification(false)} />;
  }
  const handleGuestClick = () => {
    router.push("/");
  };

  return (
    <div
      className={`bg-white w-[480px] ${
        isSignUp ? "min-h-[800px]" : "min-h-[680px]"
      } shadow-xl shadow-gray-300 rounded-md m-auto text-center overflow-y-auto p-10 ${
        isSignUp ? "pt-3" : "pt-8"
      }`}
    >
      <div>
        <Image
          src="/assets/Logo 1.png"
          alt="Library Management Logo"
          width={120} // w-36 equals 144px
          height={120} // Setting equal height for aspect ratio
          className="m-auto pt-5 mb-10"
          priority // Since this is a logo, marking it as high priority for LCP
        />

        <p className="text-[20px] mb-2">{header}</p>
        <p className="text-[15px] text-[#ABABAB] mb-5">{subHeader}</p>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "100%" },
          }}
          noValidate
          autoComplete="off"
          className="mb-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-5">
            <p className="text-left text-[16px] font-semibold">Username</p>
            <Controller
              name="userName"
              control={control}
              rules={{ required: "Username is required" }}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  size="small"
                  autoComplete="username"
                  error={!!errors.userName}
                  helperText={errors.userName?.message}
                />
              )}
            />
          </div>

          {isSignUp && (
            <>
              <div className="mb-5">
                <p className="text-left text-[16px] font-semibold">Email</p>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      size="small"
                      autoComplete="email"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  )}
                />
              </div>
              <div className="mb-5">
                <p className="text-left text-[16px] font-semibold">
                  First name
                </p>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: "First name is required" }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      size="small"
                      autoComplete="given-name"
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                    />
                  )}
                />
              </div>
              <div className="mb-5">
                <p className="text-left text-[16px] font-semibold">Last name</p>
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: "Last name is required" }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      size="small"
                      autoComplete="family-name"
                      error={!!errors.lastName}
                      helperText={errors.lastName?.message}
                    />
                  )}
                />
              </div>
            </>
          )}

          <div className="mb-5">
            <p className="text-left text-[16px] font-semibold">Password</p>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              render={({ field }) => (
                <OutlinedInput
                  {...field}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  error={!!errors.password}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "lightgray",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "lightgray",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "lightgray",
                      borderWidth: 1,
                    },
                  }}
                  size="small"
                  fullWidth
                  autoComplete="current-password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-sm text-left mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {!isSignUp && (
            <div className="flex justify-between items-center mb-9 mt-9">
              <div>
                <Checkbox
                  sx={{
                    color: "#DF7D3A",
                    "&.Mui-checked": {
                      color: "#DF7D3A",
                    },
                    paddingLeft: 0,
                  }}
                />
                <span className="text-[16px] ml-[-5px]">Remember me</span>
              </div>
              <button
                onClick={handleForgotPassword}
                className="border-b-2 border-gray-600"
              >
                Forgot password?
              </button>
            </div>
          )}
          <button
            type="submit"
            className="bg-[#DF7D3A] text-white w-[100%] pt-3 pb-3 rounded-md  hover:bg-[#df7c3ae4]"
          >
            {isSignUp ? "Register" : "Login"}
          </button>
        </Box>
      </div>

      <div className="flex justify-between items-center">
        <div>
          {isSignUp ? (
            <>
              <span>Already a User?</span>
              <Link href="/login">
                <span className="text-[16px] border-b-2 border-gray-600 ml-1">
                  Login now
                </span>
              </Link>
            </>
          ) : (
            <>
              <span>New User?</span>
              <Link href="/signup">
                <span className="text-[16px] border-b-2 border-gray-600 ml-1">
                  Register Here
                </span>
              </Link>
            </>
          )}
        </div>
        <button onClick={handleGuestClick}>Use as Guest</button>
      </div>
    </div>
  );
};

export default LoginForm;
