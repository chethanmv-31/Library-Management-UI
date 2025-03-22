import axios from 'axios';

const options = {
  method: 'GET',
  url: process.env.NEXT_PUBLIC_RAPID_API_URL,
  params: {
    cat: 'famous',
    count: '10'
  },
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPID_API_HOST
  }
};

export const getQuotes = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};