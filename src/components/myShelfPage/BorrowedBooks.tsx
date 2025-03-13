import React from "react";
import TabCards from "./TabCards";

const borrowedBooksData = [
  {
    id: 1,
    title: "Don't Make Me think",
    author: "Steve Krug",
    year: "2000",
    rating: 4.5,
    borrowedOn: "11 Mar 2023 09:00 AM",
    submissionDue: "14 Mar 2023",
    status: "Borrowed",
    type: "Physical",
    image: "/assets/Rectangle 12.png",
    isOverdue: true
  },
  {
    id: 2,
    title: "Java Script Closures",
    author: "Kyle Simpson",
    year: "2014",
    rating: 4.5,
    borrowedOn: "11 Mar 2023 09:00 AM",
    submissionDue: "14 Mar 2023",
    status: "Borrowed",
    type: "Physical",
    image: "/assets/js-closures.png",
    isOverdue: true
  },
  {
    id: 3,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    year: "2013",
    rating: 4.5,
    borrowedOn: "11 Mar 2023 09:00 AM",
    submissionDue: "14 Mar 2023",
    status: "Borrowed",
    type: "Physical",
    image: "/assets/design-everyday.png",
    isOverdue: false
  }
];

const BorrowedBooks = () => {
  return (
    <div className="flex flex-wrap gap-8">
      {borrowedBooksData.map((book) => (
        <TabCards key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BorrowedBooks;