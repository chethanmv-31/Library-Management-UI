import React from 'react';

interface BookCoverProps {
  className?: string;
}

const BookCover: React.FC<BookCoverProps> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#F27851] to-[#e16643] rounded-md">
        <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium">
          Book
        </div>
      </div>
    </div>
  );
};

export default BookCover; 