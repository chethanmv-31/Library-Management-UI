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

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, amount, onSubmit, setShowSuccess }) => {
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    cvv: '',
    saveCard: false
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccess(true);
    onSubmit(formData);
    console.log(formData, "formData");
  };

  

  const formatCreditCardNumber = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '');
    const formattedNumber = digitsOnly.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formattedNumber.substring(0, 19); // Limit to 16 digits + 3 spaces
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'cardNumber') {
      const formattedValue = formatCreditCardNumber(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
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
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] outline-none shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-500 mb-1">CARD HOLDER NAME</label>
                  <input
                    type="text"
                    name="cardHolder"
                    value={formData.cardHolder}
                    onChange={handleInputChange}
                    placeholder="REINHARD KENSON"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] outline-none shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">EXPIRY</label>
                    <input
                      type="text"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      placeholder="08/21"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] outline-none shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="XXX"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] outline-none shadow-sm"
                    />
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