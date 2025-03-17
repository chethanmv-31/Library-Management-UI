import React from "react";
import TabCards from "./TabCards";

interface EBooksProps {
  onReturnClick: (serialNo?: string) => void;
}

const eBooksData = [
  {
    id: 1,
    title: "Rich Dad Poor Dad",
    author: "Robert T Kiyosaki",
    year: "1997",
    rating: 4.5,
    borrowedOn: "11 Mar 2023 09:00 AM",
    submissionDue: "14 Mar 2023",
    status: "E-BOOK",
    type: "Digital",
    image: "/assets/rich-dad.png",
    isOverdue: false
  },
  {
    id: 2,
    title: "Sprint: Solve Big Problems",
    author: "Robert T Kiyosaki",
    year: "1997",
    rating: 5,
    borrowedOn: "11 Mar 2023 09:00 AM",
    submissionDue: "14 Mar 2023",
    status: "E-BOOK",
    type: "Digital",
    image: "/assets/sprint.png",
    isOverdue: false
  }
];

const EBooks = ({ onReturnClick }: EBooksProps) => {
  return (
    <div className="flex flex-wrap gap-8">
      {eBooksData.map((book) => (
        <TabCards key={book.id} {...book} onReturnClick={onReturnClick} />
      ))}
    </div>
  );
};

export default EBooks;