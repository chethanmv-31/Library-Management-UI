import { Box, TextField } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import styled from "@emotion/styled";

interface OtpVerificationProps {
  onBack: () => void;
}

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#4D4D4D",
    },
    "&:hover fieldset": {
      borderColor: "#4D4D4D",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#4D4D4D",
      outline: "none",
    },
  },
});

const OtpVerification = ({ onBack }: OtpVerificationProps) => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const otpRefs = useRef(Array(5).fill(null));

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < 4) {
        (otpRefs.current[index + 1] as HTMLInputElement)?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Check if all OTP fields are filled
    if (otp.some((digit) => digit === "")) {
      setError("Please enter OTP digits");
      return;
    }

    // Check if OTP is valid (you can add your own validation logic here)
    const enteredOtp = otp.join("");
    if (enteredOtp === "12345") {
      // Replace with your actual OTP validation
      setIsVerified(true);
    } else {
      setError("Invalid OTP. Please try again.");
      setOtp(["", "", "", "", ""]);
      (otpRefs.current[0] as HTMLInputElement)?.focus();
    }
  };

  if (isVerified) {
    return (
      <div className="bg-white w-[480px] h-[680px] pt-8 p-10 shadow-xl shadow-gray-300 rounded-md m-auto text-center">
        <div>
          <Image
            src="/assets/Logo 1.png"
            alt="Library Management Logo"
            width={120}
            height={120}
            className="m-auto pt-5 mb-10"
            priority
          />

          <p className="text-[20px] text-[#4D4D4D] mb-2">Verification</p>
          <p className="text-[15px] text-[#ABABAB] mb-7">Thank you</p>

          <p className="text-[20px] font-semibold mb-14 text-[#4D4D4D]">
            You are Verified
          </p>

          <div className="flex justify-center mb-12">
            <Image
              src="/assets/verified.svg"
              alt="Verification Success"
              width={96}
              height={96}
              priority
            />
          </div>

          <button
            onClick={() => onBack()}
            className="bg-[#DF7D3A] text-white w-[100%] pt-3 pb-3 rounded-md hover:bg-[#df7c3ae4]"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white w-[480px] h-[680px] pt-8 p-10 shadow-xl shadow-gray-300 rounded-md m-auto text-center">
      <div>
        <Image
          src="/assets/Logo 1.png"
          alt="Library Management Logo"
          width={120}
          height={120}
          className="m-auto pt-5 mb-10"
          priority
        />

        <p className="text-[20px] mb-2 text-[#4D4D4D]">Verification</p>
        <p className="text-[15px] text-[#ABABAB] mb-5">
          Check your E-mail for OTP
        </p>
        <p className="text-[#4D4D4D] font-semibold text-[18px] mb-10 mt-10">
          Enter your OTP Here
        </p>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            "& .MuiTextField-root": { width: "100%" },
          }}
          className="mb-12"
        >
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="flex justify-between gap-2 mb-16">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="relative">
                <CustomTextField
                  inputRef={(el) => (otpRefs.current[index] = el)}
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  inputProps={{
                    maxLength: 1,
                    style: {
                      textAlign: "center",
                      fontSize: "24px",
                      padding: "8px",
                      caretColor: "transparent",
                    },
                  }}
                  sx={{
                    width: "50px !important",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                />
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#4D4D4D] rounded-md"></div>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="bg-[#DF7D3A] text-white w-[100%] pt-3 pb-3 rounded-md hover:bg-[#df7c3ae4]"
          >
            Verify
          </button>
        </Box>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[#4D4D4D]">
            Not yet received? <button className="text-[#DF7D3A]">Resend</button>
          </span>
          <button onClick={onBack} className="text-[#4D4D4D]">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
