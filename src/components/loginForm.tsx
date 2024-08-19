"use client";
import styled from "@emotion/styled";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const LoginForm = () => {
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
    <div className="bg-white w-[480px] h-[750px] shadow-xl shadow-gray-300 rounded-md m-auto text-center p-10">
      <div>
        <img src="/assets/Logo 1.png" className="m-auto w-36 pt-5 mb-10" />

        <p className="text-[20px] mb-4">Welcome Back !</p>
        <p className="text-[15px] text-[#ABABAB] mb-10">
          Sign in to continue to your Digital Library
        </p>
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
          <div>
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

      <div className="flex justify-between items-center mb-9 ">
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
        <p>Forgot password?</p>
      </div>
      <button className="bg-[#DF7D3A] text-white w-[100%] pt-2 pb-2 rounded-md mb-12">
        Login
      </button>
      <div className="flex justify-between items-center">
        <div>
          <span>New User?</span>
          <span className="text-[16px]">Register Here</span>
        </div>
        <p>Use as Guest </p>
      </div>
    </div>
  );
};

export default LoginForm;
