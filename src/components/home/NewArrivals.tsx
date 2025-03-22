"use client";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Book } from "@/types/book";
import { getLatestBooks } from "@/services/bookService";
import { useRouter } from "next/navigation";

const NewArrivals = () => {
  const router = useRouter();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const latestBooks = await getLatestBooks();
        const sortedBooks = latestBooks
          .sort(
            (a: Book, b: Book) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .slice(0, 8);
        setBooks(sortedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleBookClick = (bookId: string) => {
    router.push(`/books/${bookId}`);
  };

  return (
    <div className="bg-gradient-to-b from-[#EB5231] to-[#8A317C] rounded-lg p-[2px] text-white h-[241px] mx-auto shadow-lg relative flex-grow w-[861px]">
      <p className="text-[25px] font-[500] transform rotate-[-90deg] absolute left-[18px] top-[90%] translate-y-[-50%] origin-top-left">
        New Arrivals
      </p>

      <div className="bg-white flex-1 ml-[60px] h-[237px] w-[887px] rounded-tr-lg rounded-br-lg flex items-center overflow-x-scroll overflow-y-hidden scrollbar-hide">
        {loading ? (
          <div className="w-full flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          books.map((book) => (
            <div 
              key={book.id} 
              className="flex-shrink-0 w-[167px] mx-7 cursor-pointer"
              onClick={() => handleBookClick(book.id)}
            >
              <BookCard
                isIntro={true}
                title={book.title}
                author={book.author.author_Name}
                year={new Date(book.created_at).getFullYear()}
                rating={4.5}
                imageUrl={book.image || "/assets/Rectangle 12.png"}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewArrivals;
