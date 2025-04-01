import { Publisher } from "@/types";
import { getAccessToken } from "@/utils/auth";

export const fetchPublishers = async (): Promise<Publisher[]> => {
  const accessToken = getAccessToken();

  const response = await fetch("http://localhost:3000/publisher", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch publishers");
  }

  return response.json();
};
