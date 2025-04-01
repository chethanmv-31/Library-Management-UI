import axios from "axios";
import { store } from "@/store/store";
import { setShowLoginAlert } from "@/store/slices/authSlice";
import { SigninPayload, SignUpPayload } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_AUTH_URL;

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
    const token = localStorage.getItem("accessToken");
    return !!token;
  },

  requireAuth: () => {
    if (!authService.isAuthenticated()) {
      store.dispatch(setShowLoginAlert(true));
      return false;
    }
    return true;
  },

  handleLoginAction: (navigateToLogin: () => void) => {
    store.dispatch(setShowLoginAlert(false));
    navigateToLogin();
  },
};
