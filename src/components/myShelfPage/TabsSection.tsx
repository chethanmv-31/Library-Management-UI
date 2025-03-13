import { Box } from "@mui/material";
import React, { useState } from "react";
import AllBooks from "./AllBooks";
import FavoriteBooks from "./FavoriteBooks";
import BorrowedBooks from "./BorrowedBooks";
import EBooks from "./EBooks";
import AudioBooks from "./AudioBooks";
import ArticlesJournals from "./ArticlesJournals";

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

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setData(newValue);
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
                    {index === 1 && <AllBooks />}
                    {index === 2 && <FavoriteBooks />}
                    {index === 3 && <BorrowedBooks />}
                    {index === 4 && <EBooks />}
                    {index === 5 && <AudioBooks />}
                    {index === 6 && <ArticlesJournals />}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default TabsSection;
