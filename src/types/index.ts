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

export interface Publisher {
  id: number;
  publisher_name: string;
  created_at: string;
  updated_at: string | null;
  created_by: string;
  updated_by: string | null;
}

export interface BookFormData {
  title: string;
  price: string;
  no_of_copies: number;
  isbn_no: string;
  edition: string;
  publisher_id: number;
  author_id: number;
  binding_id: number;
  category_id: number;
  shelf_id: number;
  floor_id: number;
  language: string;
  authorName?: string;
  categoryName?: string;
  bindingName?: string;
  shelfNo?: number | string;
  floorNo?: number;
  publisherName?: string;
}

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

export interface SignUpPayload {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  role: string;
}

export interface SigninPayload {
  username: string;
  password: string;
  role: string;
}
