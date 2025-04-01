import axios from "axios";

interface Quote {
  id: number;
  quote: string;
  author: string;
}

export const getQuotes = async (): Promise<Quote> => {
  try {
    const response = await axios.get<Quote>(
      "https://dummyjson.com/quotes/random"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching quotes:", error);
    throw error;
  }
};
