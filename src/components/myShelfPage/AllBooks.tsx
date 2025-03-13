import React from "react";
import TabCards from "./TabCards";

const booksData = [
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
    title: "Rich Dad Poor Dad",
    author: "Robert T Kiyosaki",
    year: "1997",
    rating: 4.5,
    borrowedOn: "11 Mar 2023 09:00 AM",
    submissionDue: "14 Mar 2023",
    status: "E-BOOK",
    type: "Digital",
    image: "/assets/Rectangle 16.png",
    isOverdue: false
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
    image: "/assets/Rectangle 19.png",
    isOverdue: true
  },
  {
    id: 4,
    title: "Sprint: Solve Big Problems",
    author: "Robert T Kiyosaki",
    year: "1997",
    rating: 5,
    borrowedOn: "11 Mar 2023 09:00 AM",
    submissionDue: "14 Mar 2023",
    status: "E-BOOK",
    type: "Digital",
    image: "/assets/Rectangle 12.png",
    isOverdue: false
  },
  {
    id: 5,
    title: "Java Script Closures",
    author: "Kyle Simpson",
    year: "2014",
    rating: 4.5,
    borrowedOn: "11 Mar 2023 09:00 AM",
    submissionDue: "14 Mar 2023",
    status: "Borrowed",
    type: "Physical",
    image: "/assets/Rectangle 16.png",
    isOverdue: true
  }
];

const AllBooks = () => {
  return (
    <div className="flex flex-wrap gap-8">
      {booksData.map((book) => (
        <TabCards key={book.id} {...book} />
      ))}
    </div>
  );
};

export default AllBooks;
