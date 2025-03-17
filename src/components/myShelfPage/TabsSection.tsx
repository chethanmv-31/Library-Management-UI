import { Box } from "@mui/material";
import React, { useState } from "react";
import AllBooks from "./AllBooks";
import FavoriteBooks from "./FavoriteBooks";
import BorrowedBooks from "./BorrowedBooks";
import EBooks from "./EBooks";
import AudioBooks from "./AudioBooks";
import ArticlesJournals from "./ArticlesJournals";
import ReturnModal from "./ReturnModal";

interface ReturnModalState {
  isOpen: boolean;
  bookSerialNo?: string;
}

const TabsSection = () => {
  const tabData = [
    { label: "All Books", value: "1" },
    { label: "Favorites", value: "2" },
    { label: "Borrowed Books", value: "3" },
    { label: "E-Books", value: "4" },
    { label: "Audio Books", value: "5" },
    { label: "Articles & Journals", value: "6" },
  ];

  const [data, setData] = useState("1");
  const [returnModal, setReturnModal] = useState<ReturnModalState>({
    isOpen: false,
    bookSerialNo: undefined,
  });

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setData(newValue);
  };

  const handleReturnClick = (serialNo?: string) => {
    setReturnModal({ isOpen: true, bookSerialNo: serialNo });
  };

  const handleReturnSubmit = (data: {
    fromDate: string;
    toDate: string;
    serialNo: string;
    penalties: number;
  }) => {
    // Handle the return submission here
    console.log('Return data:', data);
    setReturnModal({ isOpen: false, bookSerialNo: undefined });
  };

  return (
    <div className="mb-8">
      <div className="w-full pt-8 pb-8">
        <Box>
          <div>
            <div className="flex space-x-32">
              {tabData.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setData(tab.value)}
                  className={`text-left font-semibold relative pb-2 ml-1 ${
                    data === tab.value ? "text-black" : "text-gray-600"
                  } hover:text-black transition-all duration-300 ease-in-out transform ${
                    data === tab.value ? "scale-105" : "scale-100"
                  }`}
                >
                  {tab.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#F27851] transform origin-left transition-transform duration-300 ease-in-out ${
                      data === tab.value ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></span>
                </button>
              ))}
            </div>
          </div>
          <div>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className={`transition-all duration-300 ease-in-out ${
                  data === index.toString()
                    ? "opacity-100 translate-x-0"
                    : "hidden"
                }`}
              >
                {data === index.toString() && (
                  <div className="mt-7">
                    {index === 1 && <AllBooks onReturnClick={handleReturnClick} />}
                    {index === 2 && <FavoriteBooks onReturnClick={handleReturnClick} />}
                    {index === 3 && <BorrowedBooks onReturnClick={handleReturnClick} />}
                    {index === 4 && <EBooks onReturnClick={handleReturnClick} />}
                    {index === 5 && <AudioBooks onReturnClick={handleReturnClick} />}
                    {index === 6 && <ArticlesJournals onReturnClick={handleReturnClick} />}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Box>
      </div>
      <ReturnModal
        isOpen={returnModal.isOpen}
        onClose={() => setReturnModal({ isOpen: false, bookSerialNo: undefined })}
        bookSerialNo={returnModal.bookSerialNo}
        onSubmit={handleReturnSubmit}
      />
    </div>
  );
};

export default TabsSection;
