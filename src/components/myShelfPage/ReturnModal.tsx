import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useDispatch, useSelector } from 'react-redux';
import { 
  setShowPendingPayments,
  selectShowPendingPayments,
  resetReturnModal
} from '../../store/slices/returnModalSlice';

interface ReturnModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookSerialNo?: string;
  onSubmit: (data: {
    fromDate: string;
    toDate: string;
    serialNo: string;
    penalties: number;
  }) => void;
}

const ReturnModal: React.FC<ReturnModalProps> = ({ 
  isOpen, 
  onClose, 
  bookSerialNo = "",
  onSubmit,
}) => {
  const dispatch = useDispatch();
  
  // Local state
  const [fromDate, setFromDate] = useState(dayjs());
  const [toDate, setToDate] = useState(dayjs());
  const [serialNo, setSerialNo] = useState(bookSerialNo);
  const penalties = 100; // Fixed penalty for demo

  useEffect(() => {
    if (bookSerialNo) {
      setSerialNo(bookSerialNo);
    }
  }, [bookSerialNo]);

  useEffect(() => {
    if (!isOpen) {
      setFromDate(dayjs());
      setToDate(dayjs());
      setSerialNo(bookSerialNo);
    }
  }, [isOpen, dispatch, bookSerialNo]);

  const handleSubmit = () => {
    onSubmit({
      fromDate: fromDate.format('DD MMM YYYY'),
      toDate: toDate.format('DD MMM YYYY'),
      serialNo,
      penalties
    });
    dispatch(setShowPendingPayments(true));
  };

  return (
    <Dialog 
      open={isOpen} 
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
      <DialogTitle sx={{ textAlign: 'center', padding: '0 0 40px 0', fontWeight: "600" }}>
        Fill Up the Details
      </DialogTitle>
      <DialogContent sx={{ padding: 0 }}>
        <div className="mb-3">
          <div className="mb-[1.2rem]">
            <p className="mb-4 text-[1rem]">From</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker 
                value={fromDate}
                onChange={(newValue) => newValue && setFromDate(newValue)}
                disabled
                sx={{
                  width: '100%',
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#F3F3F7',
                    borderRadius: '8px',
                    border: '1px solid #D6D6D6',
                    height: '48px',
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

          <div className="mb-[1.2rem]">
            <p className="mb-4 text-[1rem]">To</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker 
                value={toDate}
                onChange={(newValue) => newValue && setToDate(newValue)}
                disabled
                sx={{
                  width: '100%',
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#F3F3F7',
                    borderRadius: '8px',
                    border: '1px solid #D6D6D6',
                    height: '48px',
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

          <div className="mb-[1.2rem]">
            <p className="mb-4">Book Serial No.</p>
            <input
              type="text"
              value={serialNo}
              onChange={(e) => setSerialNo(e.target.value)}
              className="w-full p-3 rounded-md border border-[#D6D6D6] focus:outline-none focus:border-[#D6D6D6] h-[48px]"
              placeholder="680E2023"
            />
          </div>

          <div className="mb-[1.2rem]">
            <p className="mb-4">Penalties</p>
            <div className="w-full p-3 rounded-md border border-[#D6D6D6] h-[48px] flex items-center">
              ₹{penalties}
            </div>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center">
            <button
              onClick={handleSubmit}
              className="w-[50%] py-3 bg-[#F27851] text-white rounded-md font-medium hover:bg-[#e16643] transition-colors"
            >
              Pay Now
            </button>
            <button
              onClick={onClose}
              className="w-[50%] py-3 bg-gray-700 text-white rounded-md font-medium hover:bg-gray-600 transition-colors"
            >
              Credit
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReturnModal;