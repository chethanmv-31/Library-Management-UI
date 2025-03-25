import React, { Suspense } from "react";
import { Book } from "@/types/book";
import { getAllBooks, getBookById } from "@/services/bookService";
import DetailsPage from "@/components/detailsPage/DetailsPage";
import { generateStaticParams } from "./staticParams";
import Loading from "./loading";

interface PageProps {
  params: {
    id: string;
  };
}

const BookDetailsPage = ({ params }: PageProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="h-[750px] overflow-y-auto scrollbar-hide">
        <DetailsPage params={params} />
      </div>
    </Suspense>
  );
};

export { generateStaticParams };
export default BookDetailsPage;
