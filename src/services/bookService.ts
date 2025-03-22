import { Book } from '@/types/book';

const API_URL = process.env.NEXT_PUBLIC_API_BOOKS_URL;

export const getAllBooks = async (): Promise<Book[]> => {
  try {
    const response = await fetch(`${API_URL}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

export const getBookById = async (id: string): Promise<Book> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch book details');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching book details:', error);
    throw error;
  }
}; 