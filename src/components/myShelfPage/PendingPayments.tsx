import React, { useState } from 'react';
import BookCover from './BookCover';
import { useDispatch } from 'react-redux';
import { setShowPendingPayments } from '@/store/slices/returnModalSlice';
import PaymentModal from './PaymentModal';
import SuccessModal from '../SuccessModal';

interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  edition: string;
  usage: string;
  format: string;
  penalties: number;
  charges: number;
  serialNo: string;
}

interface PaymentFormData {
  cardNumber: string;
  cardHolder: string;
  expiry: string;
  cvv: string;
  saveCard: boolean;
}

const PendingPayments: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Sample data - replace with actual data from your backend
  const pendingBooks: Book[] = [
    {
      id: '1',
      title: "Don't Make Me Think",
      author: 'Steve Krug',
      year: 2000,
      edition: 'Second Edition',
      usage: '3 Days',
      format: 'Hard Copy',
      penalties: 0,
      charges: 100,
      serialNo: '680E2023'
    }
  ];

  const handlePayNow = (book: Book) => {
    setSelectedBook(book);
    setShowPaymentModal(true);
  };

  const handleModalClose = () => {
    setShowPaymentModal(false);
    setSelectedBook(null);
  };

  const handlePaymentSubmit = (data: PaymentFormData) => {
    console.log('Payment submitted:', data);
    setShowPaymentModal(false);
  };

  const handleBack = () => {
    dispatch(setShowPendingPayments(false));
  };

  console.log(showSuccess, "showSuccess");

  return (
    <div className="p-6">
      <div className="flex items-center mb-8">
        <button className="flex items-center text-gray-600" onClick={handleBack}>
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      <h1 className="text-2xl font-semibold mb-8">Pending Payments</h1>

      <div className="w-full">
        <div className="grid grid-cols-7 gap-4 mb-4 px-4 text-gray-600">
          <div className="col-span-2">Title</div>
          <div>Usage</div>
          <div>Book Format</div>
          <div>Penalties</div>
          <div>Charges</div>
          <div></div>
        </div>

        {pendingBooks.map((book) => (
          <div key={book.id} className="grid grid-cols-7 gap-4 items-center bg-white rounded-lg p-4 mb-4 shadow-sm">
            <div className="col-span-2 flex items-center gap-4">
              <div className="w-20 h-24">
                <BookCover className="w-full h-full" />
              </div>
              <div>
                <h3 className="font-medium text-lg">{book.title}</h3>
                <p className="text-gray-600">{book.author}, {book.year}</p>
                <p className="text-gray-500 text-sm">{book.edition}</p>
              </div>
            </div>
            <div>{book.usage}</div>
            <div>{book.format}</div>
            <div>₹{book.penalties}</div>
            <div>₹{book.charges}</div>
            <div className="flex justify-end">
              <button
                onClick={() => handlePayNow(book)}
                className="bg-[#F27851] text-white px-6 py-2 rounded-md hover:bg-[#e16643] transition-colors"
              >
                Pay Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedBook && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={handleModalClose}
          amount={selectedBook.charges + selectedBook.penalties}
          onSubmit={handlePaymentSubmit}
          setShowSuccess={setShowSuccess}
        />
      )}
      <SuccessModal 
        isOpen={showSuccess} 
        onClose={() => {
          setShowSuccess(false);
          dispatch(setShowPendingPayments(false));
        }}
        title="Payment Successful"
        message="You will be redirected to Main page"
      />
    </div>
  );
};

export default PendingPayments; 