import axios from "axios";

const BASE_URL = "http://localhost:3001/auth";

interface SignUpPayload {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  role: string;
}
interface SigninPayload {
  username: string;
  password: string;
  role: string;
}

interface SigninResponse {
  accessToken: string;
}

export const authService = {
  signup: async (payload: SignUpPayload) => {
    try {
      const response = await axios.post(`${BASE_URL}/signup`, payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  signin: async (payload: SigninPayload) => {
    try {
      const response = await axios.post(`${BASE_URL}/signin`, payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  
  isAuthenticated: () => {
    const token = localStorage.getItem('accessToken');
    return !!token;
  },

  requireAuth: (redirect: () => void) => {
    if (!authService.isAuthenticated()) {
      alert('Please login to access this feature');
      redirect();
      return false;
    }
    return true;
  }
};
