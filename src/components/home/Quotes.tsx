"use client";
import React, { useEffect, useState } from "react";
import { getQuotes } from '@/services/quoteService';

interface Quote {
  id: number;
  quote: string;
  author: string;
}

const Quotes: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const promises = Array(4).fill(null).map(() => getQuotes());
        const results = await Promise.all(promises);
        setQuotes(results);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();

    // Auto-rotate quotes every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  
  const currentQuote = quotes[currentIndex];
  
  return (
    <div className="bg-gradient-to-b from-[#EB5231] to-[#8A317C] rounded-lg p-7 text-white w-[543px] mx-auto shadow-lg max-h-[237px]">
     <div className="max-h-[150px]">
       
     <h2 className="text-[25px] font-[500]">Today&apos;s Quote</h2>
      <p className="mt-4 text-xl ">
        {currentQuote ? `"${currentQuote.quote}"` : "Loading quotes..."}
      </p>

      <p className="mt-5 text-right">
        {currentQuote ? `-${currentQuote.author}` : ""}
      </p>

     </div>
      {/* Pagination dots */}
      <div className="flex mt-6 space-x-2 ">
        {[0, 1, 2, 3].map((index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`block w-2 h-2 bg-white rounded-full cursor-pointer ${
              currentIndex === index ? '' : 'opacity-50'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
