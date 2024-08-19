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
import Link from "next/link";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

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
});

const LoginForm = ({ isSignUp, header, subHeader }: TypeProps) => {
  const { control, handleSubmit } = useForm<IFormInput>();
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(updateForm(data));
    console.log("data====", data);
  };

  return (
    <div
      className={`bg-white w-[480px] ${
        isSignUp ? "h-[900px] p-10 pt-7" : "h-[750px] p-10"
      } shadow-xl shadow-gray-300 rounded-md m-auto text-center `}
    >
      <div>
        <img src="/assets/Logo 1.png" className="m-auto w-36 pt-5 mb-10" />

        <p className="text-[20px] mb-2">{header}</p>
        <p className="text-[15px] text-[#ABABAB] mb-7">{subHeader}</p>

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
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  size="small"
                  autoComplete="username"
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
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      size="small"
                      autoComplete="email"
                    />
                  )}
                />
              </div>
              <div className="mb-5">
                <p className="text-left text-[16px] font-semibold">First name</p>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      size="small"
                      autoComplete="given-name"
                    />
                  )}
                />
              </div>
              <div className="mb-5">
                <p className="text-left text-[16px] font-semibold">Last name</p>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      size="small"
                      autoComplete="family-name"
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
              render={({ field }) => (
                <OutlinedInput
                  {...field}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
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
          </div>

          <button
            type="submit"
            className="bg-[#DF7D3A] text-white w-[100%] pt-3 pb-3 rounded-md mb-12 hover:bg-[#df7c3ae4]"
          >
            {isSignUp ? "Register" : "Login"}
          </button>
        </Box>
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
              }}
            />
            <span className="text-[16px] ml-[-5px]">Remember me</span>
          </div>
          <p className="border-b-2 border-gray-600">Forgot password?</p>
        </div>
      )}

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
              <Link href="/register">
                <span className="text-[16px] border-b-2 border-gray-600 ml-1">
                  Register Here
                </span>
              </Link>
            </>
          )}
        </div>
        <p>Use as Guest</p>
      </div>
    </div>
  );
};

export default LoginForm;
