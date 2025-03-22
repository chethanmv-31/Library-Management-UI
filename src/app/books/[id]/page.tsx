import React from "react";
import { Book } from "@/types/book";
import { getAllBooks, getBookById } from "@/services/bookService";
import DetailsPage from "@/components/detailsPage/DetailsPage";
import { generateStaticParams } from "./staticParams";

interface PageProps {
  params: {
    id: string;
  };
}

const BookDetailsPage = ({ params }: PageProps) => {
  return (
    <div className="h-[750px] overflow-y-auto scrollbar-hide">
      <DetailsPage params={params} />
    </div>
  );
};

export { generateStaticParams };
export default BookDetailsPage;
