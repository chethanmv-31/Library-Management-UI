import React from "react";
import { Dialog, DialogContent } from "@mui/material";
import Button from "../Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authService } from "@/services/authService";

interface LoginAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginAlertModal: React.FC<LoginAlertModalProps> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();

  const handleLogin = () => {
    authService.handleLoginAction(() => router.push('/login'));
  };

  return (
    <Dialog
      open={isOpen}
      maxWidth="sm"
      PaperProps={{
        style: {
          borderRadius: "12px",
          padding: "2.5rem",
          width: "450px",
          height: "400px",
          background: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
     <DialogContent sx={{ padding: 0, textAlign: "center" }}>
        <div className="flex flex-col items-center justify-between gap-4">
          <div className="w-24 h-24 mb-4">
            <Image
              src="/assets/Logo 1.png"
              alt="Library Management Logo"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-2xl font-semibold text-[#4D4D4D]">
            Authentication Required
          </h2>
          <p className="text-[#4D4D4D] text-lg">
            Please login to access the page.
          </p>
          <div className="flex justify-end gap-4 w-full mt-8">
            <Button 
              buttonText="Cancel" 
              onClick={onClose}
              buttonColor="#F3F3F7"
              textColor="#4D4D4D"
              width="40%"
            />
            <Button 
              buttonText="Login" 
              onClick={handleLogin}
              buttonColor="#F27851"
              textColor="#fff"
              width="40%"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginAlertModal;
