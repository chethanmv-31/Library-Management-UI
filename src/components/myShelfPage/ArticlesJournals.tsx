import React from "react";
import TabCards from "./TabCards";

interface ArticlesJournalsProps {
  onReturnClick: (serialNo?: string) => void;
}

const articlesJournalsData = [
  {
    id: 1,
    title: "UX Design Principles",
    author: "Nielsen Norman Group",
    year: "2023",
    rating: 4.8,
    borrowedOn: "11 Mar 2023 09:00 AM",
    submissionDue: "14 Mar 2023",
    status: "ARTICLE",
    type: "Digital",
    image: "/assets/ux-design.png",
    isOverdue: false
  },
  {
    id: 2,
    title: "Web Development Trends",
    author: "Tech Journal",
    year: "2023",
    rating: 4.5,
    borrowedOn: "11 Mar 2023 09:00 AM",
    submissionDue: "14 Mar 2023",
    status: "JOURNAL",
    type: "Digital",
    image: "/assets/web-dev.png",
    isOverdue: false
  },
  {
    id: 3,
    title: "AI in Modern Software",
    author: "Tech Review",
    year: "2023",
    rating: 4.7,
    borrowedOn: "11 Mar 2023 09:00 AM",
    submissionDue: "14 Mar 2023",
    status: "ARTICLE",
    type: "Digital",
    image: "/assets/ai-software.png",
    isOverdue: false
  }
];

const ArticlesJournals = ({ onReturnClick }: ArticlesJournalsProps) => {
  return (
    <div className="flex flex-wrap gap-8">
      {articlesJournalsData.map((item) => (
        <TabCards key={item.id} {...item} onReturnClick={onReturnClick} />
      ))}
    </div>
  );
};

export default ArticlesJournals;