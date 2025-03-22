export interface Author {
  Id: number;
  author_Name: string;
  created_at: string;
  updated_at: string | null;
  created_by: string;
  updated_by: string | null;
}

export interface Binding {
  id: number;
  binding_name: string;
  created_at: string;
  updated_at: string | null;
  created_by: string;
  updated_by: string | null;
}

export interface Category {
  id: number;
  category_name: string;
  created_at: string;
  updated_at: string | null;
  created_by: string;
  updated_by: string | null;
}

export interface Book {
  id: string;
  isbn_no: string;
  title: string;
  image: string | null;
  language: string;
  edition: string;
  price: string;
  no_of_copies: number;
  stock: string;
  created_at: string;
  updated_at: string | null;
  created_by: string;
  updated_by: string | null;
  author: Author;
  binding: Binding;
  category: Category;
} 