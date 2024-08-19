"use client";
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

interface TypeProps {
  header: string;
  subHeader: string;
  isSignUp: boolean; // Optional prop
}

const LoginForm = ({ isSignUp, header, subHeader }: TypeProps) => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
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
  return (
    <div
      className={`bg-white w-[480px] ${
        isSignUp ? "h-[900px] p-10 pt-7" : "h-[750px] p-10"
      } shadow-xl shadow-gray-300 rounded-md m-auto text-center `}
    >
      <div>
        <img src="/assets/Logo 1.png" className="m-auto w-36 pt-5 mb-10" />

        <p className="text-[20px] mb-2"> {header}</p>
        <p className="text-[15px] text-[#ABABAB] mb-7">{subHeader}</p>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "100%" },
          }}
          noValidate
          autoComplete="off"
          className="mb-12"
        >
          <div className="mb-5">
            <p className="text-left text-[16px] font-semibold">Username</p>
            <CustomTextField id="outlined-size-small" size="small" />
          </div>
          {isSignUp && (
            <div className="mb-5">
              <p className="text-left text-[16px] font-semibold">Email</p>
              <CustomTextField id="outlined-size-small" size="small" />
            </div>
          )}
          {isSignUp && (
            <div className="mb-5">
              <p className="text-left text-[16px] font-semibold">First name</p>
              <CustomTextField id="outlined-size-small" size="small" />
            </div>
          )}
          {isSignUp && (
            <div className="mb-5">
              <p className="text-left text-[16px] font-semibold">Last name</p>
              <CustomTextField id="outlined-size-small" size="small" />
            </div>
          )}

          <div className=" mb-5">
            <p className="text-left text-[16px] font-semibold">Password</p>
            <OutlinedInput
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
          </div>
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
      {isSignUp ? (
        <button className="bg-[#DF7D3A] text-white w-[100%] pt-2 pb-2 rounded-md mb-12">
          Register
        </button>
      ) : (
        <button className="bg-[#DF7D3A] text-white w-[100%] pt-2 pb-2 rounded-md mb-12">
          Login
        </button>
      )}
      <div className="flex justify-between items-center">
        <div>
          {isSignUp ? (
            <>
              <span>Already a User?</span>
              <Link href={""}>
                <span className="text-[16px] border-b-2 border-gray-600 ml-1">
                  Login now
                </span>
              </Link>
            </>
          ) : (
            <>
              <span>New User?</span>
              <Link href={""}>
                <span className="text-[16px] border-b-2 border-gray-600 ml-1">
                  Register Here
                </span>
              </Link>
            </>
          )}
        </div>
        <p>Use as Guest </p>
      </div>
    </div>
  );
};

export default LoginForm;
