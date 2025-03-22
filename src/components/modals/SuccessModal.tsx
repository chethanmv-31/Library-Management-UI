import React from "react";
import { Dialog, DialogContent } from "@mui/material";
import Button from "../Button";
import Image from "next/image";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      maxWidth="sm"
      PaperProps={{
        style: {
          borderRadius: '12px',
          padding: '2.5rem',
          width: '450px',
          height:'680px'
        }
      }}
    >
      <DialogContent sx={{ padding: 0, textAlign: 'center' }}>
        <div className="flex flex-col items-center justify-between gap-36 space-y-6">
          <h2 className="text-xl font-semibold mt-12">Process Completed</h2>
          
          <div className="w-24 h-24">
            <Image
              src={"/assets/verified.svg"} 
              alt="Verified" 
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full flex justify-center mt-8">
            <Button
              buttonText="Back"
              buttonColor="#F27851"
              textColor="#fff"
              width="60%"
              onClick={onClose}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;