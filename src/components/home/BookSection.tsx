import React from "react";
import BookCard from "./BookCard";

interface types {
  heading: string;
}

const BookSections = ({ heading }: types) => {
  return (
    <div className="mb-14">
      <p className="text-2xl mb-3">{heading}</p>
      <div className=" w-[1535px]  rounded-tr-lg rounded-br-lg flex items-center overflow-x-scroll space-x-7 overflow-y-hidden scrollbar-hide">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 122, 13, 14].map(
          (item, index) => (
            <div key={item} className="w-[167px]  bg-white rounded-lg">
              <BookCard isIntro={false} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BookSections;
