import { getAllBooks } from "@/services/bookService";

export async function generateStaticParams() {
  const books = await getAllBooks();
  return books.map((book) => ({
    id: book.id,
  }));
} 