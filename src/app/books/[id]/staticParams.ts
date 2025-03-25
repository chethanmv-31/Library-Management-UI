import { getAllBooks } from "@/services/bookService";

export async function generateStaticParams() {
  try {
    const books = await getAllBooks();
    return books.map((book) => ({
      id: book.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    // Return an empty array as fallback to prevent build failure
    return [];
  }
} 