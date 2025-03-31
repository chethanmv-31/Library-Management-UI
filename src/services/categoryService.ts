import {Category} from "@/types";

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch('http://localhost:3000/category');
    return response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};