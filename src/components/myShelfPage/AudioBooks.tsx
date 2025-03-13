import React from "react";
import TabCards from "./TabCards";

const audioBooksData = [
  {
    id: 1,
    title: "Rich Dad Poor Dad",
    author: "Robert T Kiyosaki",
    year: "1997",
    rating: 4.5,
    borrowedOn: "11 Mar 2023 09:00 AM",
    submissionDue: "14 Mar 2023",
    status: "AUDIO BOOK",
    type: "Digital",
    image: "/assets/rich-dad.png",
    isOverdue: false
  },
  {
    id: 2,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    year: "2013",
    rating: 4.5,
    borrowedOn: "11 Mar 2023 09:00 AM",
    submissionDue: "14 Mar 2023",
    status: "AUDIO BOOK",
    type: "Digital",
    image: "/assets/design-everyday.png",
    isOverdue: false
  }
];

const AudioBooks = () => {
  return (
    <div className="flex flex-wrap gap-8">
      {audioBooksData.map((book) => (
        <TabCards key={book.id} {...book} />
      ))}
    </div>
  );
};

export default AudioBooks;