import { Author } from "@/types";
import { getAccessToken } from "../utils/auth";

export const fetchAuthors = async (): Promise<Author[]> => {
  const accessToken = getAccessToken();
  const response = await fetch("http://localhost:3000/author", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch authors");
  }

  return response.json();
};
