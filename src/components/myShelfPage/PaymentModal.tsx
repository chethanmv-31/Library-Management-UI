import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Open_Sans } from 'next/font/google';
import  SuccessModal from '../SuccessModal';

const openSans = Open_Sans({ subsets: ['latin'] });

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  onSubmit: (data: PaymentFormData) => void;
  setShowSuccess: (showSuccess: boolean) => void;
}

interface PaymentFormData {
  cardNumber: string;
  cardHolder: string;
  expiry: string;
  cvv: string;
  saveCard: boolean;
}

interface FormErrors {
  cardNumber?: string;
  cardHolder?: string;
  expiry?: string;
  cvv?: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, amount, onSubmit, setShowSuccess }) => {
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    cvv: '',
    saveCard: false
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Validate Card Number (16 digits)
    const cardNumberDigits = formData.cardNumber.replace(/\s/g, '');
    if (!cardNumberDigits || cardNumberDigits.length !== 16 || !/^\d+$/.test(cardNumberDigits)) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number';
      isValid = false;
    }

    // Validate Card Holder (only letters and spaces)
    if (!formData.cardHolder || !/^[A-Za-z\s]+$/.test(formData.cardHolder)) {
      newErrors.cardHolder = 'Please enter a valid cardholder name';
      isValid = false;
    }

    // Validate Expiry (MM/YY format)
    const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!formData.expiry || !expiryRegex.test(formData.expiry)) {
      newErrors.expiry = 'Please enter a valid expiry date (MM/YY)';
      isValid = false;
    } else {
      const [month, year] = formData.expiry.split('/');
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100; // Get last 2 digits of current year
      const currentMonth = currentDate.getMonth() + 1; // Get current month (1-12)
      const expiryYear = parseInt(year);
      const expiryMonth = parseInt(month);

      // Check if the card is expired
      if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
        newErrors.expiry = 'Card has expired';
        isValid = false;
      }

      // Check if the expiry date is too far in the future (more than 10 years)
      if (expiryYear > currentYear + 10) {
        newErrors.expiry = 'Invalid expiry year';
        isValid = false;
      }
    }

    // Validate CVV (3 or 4 digits)
    if (!formData.cvv || !/^[0-9]{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'Please enter a valid CVV';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
      onSubmit(formData);
      console.log(formData, "formData");
    }
  };

  const formatCreditCardNumber = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '');
    const formattedNumber = digitsOnly.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formattedNumber.substring(0, 19);
  };

  const formatExpiryDate = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '');
    
    // Handle backspace and deletion
    if (digitsOnly.length === 0) return '';
    
    // Format first digit (can only be 0 or 1)
    if (digitsOnly.length === 1) {
      if (!/[0-1]/.test(digitsOnly)) return '';
      return digitsOnly;
    }
    
    // Format second digit (if first digit is 0, can be 1-9; if 1, can be 0-2)
    if (digitsOnly.length === 2) {
      const month = parseInt(digitsOnly);
      if (month < 1 || month > 12) return digitsOnly.charAt(0);
      return digitsOnly;
    }
    
    // Add slash after month
    if (digitsOnly.length >= 2) {
      const month = digitsOnly.slice(0, 2);
      const year = digitsOnly.slice(2, 4);
      return `${month}/${year}`;
    }
    
    return digitsOnly;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'cardNumber') {
      const formattedValue = formatCreditCardNumber(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else if (name === 'expiry') {
      const formattedValue = formatExpiryDate(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else if (name === 'cvv') {
      const cvvValue = value.replace(/\D/g, '').slice(0, 4);
      setFormData(prev => ({
        ...prev,
        [name]: cvvValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <>
      <Dialog 
        open={isOpen} 
        onClose={onClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            padding: '24px',
            maxWidth: '480px',
            margin: '16px',
            width: '100%'
          }
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', fontSize: '24px', fontWeight: 600, color: '#333' }}>
          PAYMENT
        </DialogTitle>
        <DialogContent>
          <div className="flex justify-center mb-8">
            <div className="w-[380px] bg-[#8B5CF6] text-white p-6 rounded-lg shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-24 bg-gradient-to-r from-[#9333EA] to-[#7C3AED] opacity-50"></div>
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-xl"></div>
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-lg"></div>
              <div className={`relative z-10 ${openSans.className}`}>
                <div className="text-2xl mb-8 font-light">VISA</div>
                <div className="text-xl tracking-wider mb-8 font-light">•••• •••• •••• 8014</div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-sm opacity-80 font-light">CARD HOLDER</div>
                    <div className="font-normal">REINHARD KENSON</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-80 font-light">EXPIRES</div>
                    <div className="font-normal">08/21</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[380px] bg-white rounded-lg shadow-md p-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">CREDIT CARD NUMBER</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="XXXX XXXX XXXX 8014"
                    className={`w-full p-2 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] outline-none shadow-sm`}
                  />
                  {errors.cardNumber && (
                    <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-gray-500 mb-1">CARD HOLDER NAME</label>
                  <input
                    type="text"
                    name="cardHolder"
                    value={formData.cardHolder}
                    onChange={handleInputChange}
                    placeholder="REINHARD KENSON"
                    className={`w-full p-2 border ${errors.cardHolder ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] outline-none shadow-sm`}
                  />
                  {errors.cardHolder && (
                    <p className="text-red-500 text-xs mt-1">{errors.cardHolder}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">EXPIRY</label>
                    <input
                      type="text"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      maxLength={5}
                      className={`w-full p-2 border ${errors.expiry ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] outline-none shadow-sm`}
                    />
                    {errors.expiry && (
                      <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="XXX"
                      maxLength={4}
                      className={`w-full p-2 border ${errors.cvv ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] outline-none shadow-sm`}
                    />
                    {errors.cvv && (
                      <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="saveCard"
                    checked={formData.saveCard}
                    onChange={handleInputChange}
                    className="w-4 h-4 accent-[#8B5CF6] border-gray-300 rounded focus:ring-[#8B5CF6] outline-none shadow-sm"
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    Save this card for future transactions
                  </label>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <div className="text-lg font-semibold">TOTAL: ₹{amount}</div>
                  <button
                    type="submit"
                    className="bg-[#F27851] text-white px-8 py-3 rounded-md hover:bg-[#e16643] transition-colors font-medium"
                  >
                    PROCEED TO PAY
                  </button>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PaymentModal; 