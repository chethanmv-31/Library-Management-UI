import React from "react";
import TabCards from "./TabCards";

const favoriteBooksData = [
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
    isOverdue: true
  }
];

const FavoriteBooks = () => {
  return (
    <div className="flex flex-wrap gap-8">
      {favoriteBooksData.map((book) => (
        <TabCards key={book.id} {...book} />
      ))}
    </div>
  );
};

export default FavoriteBooks;
