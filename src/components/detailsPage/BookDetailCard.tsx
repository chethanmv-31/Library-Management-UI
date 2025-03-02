import React from "react";

type BookDetailChild = {
  subHeader: string;
  value: string | number;
};

type BookDetail = {
  heading: string;
  children: BookDetailChild[];
};

const BookDetailCard = () => {
    const bookDetails: BookDetail[] = [
        
        { 
          heading: "Published in", 
          children: [{ subHeader: "Country", value: "United States" }] 
        },
        { 
          heading: "Edition Notes", 
          children: [
            { subHeader: "Series", value: "Dover large print classics" },
            { subHeader: "Genre", value: "Fiction." }
          ] 
        },
        { 
          heading: "Classifications", 
          children: [
            { subHeader: "Dewey Decimal Class", value: "823/.8" },
            { subHeader: "Library of Congress", value: "PR5485 .A1 2002" }
          ] 
        },
        { 
          heading: "The Physical Object", 
          children: [
            { subHeader: "Pagination", value: "ix, 112 p. (large print) ;" },
            { subHeader: "Number of pages", value: 216 }
          ] 
        },
        { 
          heading: "ID Numbers", 
          children: [
            { subHeader: "My Book Shelf", value: "OL3570252M" },
            { subHeader: "ISBN 10", value: "0486424715" },
            { subHeader: "LCCN", value: "2002073560" },
            { subHeader: "Library Thing", value: "12349" },
            { subHeader: "Goodreads", value: "690668" }
          ] 
        }
      ];
  return (
    <div className="bg-white w-1/2 border-2 rounded-md p-8 text-[#4D4D4D]">
      <p className=" font-semibold text-2xl mb-8">Book Details</p>
        {bookDetails.map((section, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-xl font-semibold  text-[#4D4D4D] mb-2">
              {section.heading}
            </h2>
            {section.children.map((child, i) => (
              <div key={i} className="flex  gap-20 mb-2">
                <span className=" text-[#4D4D4D] font-semibold text-[16px] w-40">{child.subHeader}</span>
                <span className=" font-medium text-left">{child.value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
  );
};

export default BookDetailCard;
