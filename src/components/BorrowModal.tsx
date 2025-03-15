import React, { useState } from "react";
import Button from "./Button";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import SuccessModal from "./SuccessModal";

interface BorrowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BorrowModal: React.FC<BorrowModalProps> = ({ isOpen, onClose }) => {
  const [fromDate, setFromDate] = useState(dayjs());
  const [toDate, setToDate] = useState(dayjs().add(30, 'day'));
  const [serialNo, setSerialNo] = useState("");
  const [description, setDescription] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({
    serialNo: "",
    description: "",
    toDate: ""
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      serialNo: "",
      description: "",
      toDate: ""
    };

    // Serial Number validation
    if (!serialNo) {
      newErrors.serialNo = "Serial number is required";
      isValid = false;
    } else if (serialNo.length !== 6) {
      newErrors.serialNo = "Serial number must be 6 digits";
      isValid = false;
    }

    // Description validation
    if (!description.trim()) {
      newErrors.description = "Description is required";
      isValid = false;
    }

    // Date validation
    if (!toDate) {
      newErrors.toDate = "Please select a return date";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleBorrow = () => {
    if (validateForm()) {
      setShowSuccess(true);
    }
  };

  return (
    <>
      <Dialog 
        open={isOpen && !showSuccess} 
        onClose={onClose} 
        maxWidth="sm" 
        PaperProps={{
          style: {
            borderRadius: '12px',
            padding: '2.5rem',
            width: '450px',
            
          }
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', padding: '0 0 40px 0' , fontWeight:"600" }}>
          Fill Up the Details
        </DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
          <div className=" mb-3">
            <div className="mb-[1.2rem]">
              <p className="mb-4 text-[1rem]">From</p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                  value={fromDate}
                  disabled
                  readOnly
                  sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#F3F3F7',
                      borderRadius: '8px',
                      border: '1px solid #D6D6D6',
                      '& fieldset': { border: 'none' },
                      '& input': {
                        width: '100%',
                        fontWeight: 600
                      }
                    }
                  }}
                />
              </LocalizationProvider>
            </div>
  
            <div  className="mb-[1.2rem]">
              <p className="mb-4 text-[1rem]">To</p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                  value={toDate}
                  onChange={(newValue) => newValue && setToDate(newValue)}
                  minDate={dayjs()}
                  maxDate={dayjs().add(30, 'day')}
                  sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#F3F3F7',
                      borderRadius: '8px',
                      border: '1px solid #D6D6D6',
                      '& fieldset': { border: 'none' },
                      '&:hover fieldset': { border: 'none' },
                      '&.Mui-focused': {
                        border: '1px solid #D6D6D6',
                        '& fieldset': { border: 'none' }
                      },
                      '& input': {
                        width: '100%',
                        fontWeight: 600
                      }
                    }
                  }}
                />
              </LocalizationProvider>
            </div>
  
            <div className="mb-[1.2rem]">
              <p className="mb-4">Book Serial No.</p>
              <input
                type="text"
                placeholder="Enter 6 Digit Serial No"
                className={`w-full p-3 rounded-md border ${
                  errors.serialNo ? 'border-red-500' : 'border-[#D6D6D6]'
                } focus:outline-none focus:border-[#D6D6D6]`}
                value={serialNo}
                onChange={(e) => {
                  setSerialNo(e.target.value.replace(/[^0-9]/g, '').slice(0, 6));
                  if (errors.serialNo) setErrors({ ...errors, serialNo: "" });
                }}
              />
              {errors.serialNo && (
                <p className="text-red-500 text-sm mt-1">{errors.serialNo}</p>
              )}
            </div>

            <div className="mb-[1.2rem]">
              <p className="mb-4">Description</p>
              <textarea
                placeholder="Purpose"
                className={`w-full p-3 rounded-md border ${
                  errors.description ? 'border-red-500' : 'border-[#D6D6D6]'
                } min-h-[100px] resize-none focus:outline-none focus:border-[#D6D6D6]`}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  if (errors.description) setErrors({ ...errors, description: "" });
                }}
                rows={4}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description}</p>
              )}
            </div>
  
            <div className="flex justify-center">
              <Button
                buttonText="BORROW"
                buttonColor="#F27851"
                textColor="#fff"
                width="60%"
                onClick={handleBorrow}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
  
      <SuccessModal 
        isOpen={showSuccess} 
        onClose={handleBorrow}
      />
    </>
  );
};

export default BorrowModal;