import { Binding } from "@/types";
import { getAccessToken } from "../utils/auth";

export const fetchBindings = async (): Promise<Binding[]> => {
  const accessToken = getAccessToken();
  const response = await fetch("http://localhost:3000/binding", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch bindings");
  }

  return response.json();
};
