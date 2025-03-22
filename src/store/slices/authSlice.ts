import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  showLoginAlert: boolean;
}

const initialState: AuthState = {
  showLoginAlert: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setShowLoginAlert: (state, action: PayloadAction<boolean>) => {
      state.showLoginAlert = action.payload;
    },
  },
});

export const { setShowLoginAlert } = authSlice.actions;
export default authSlice.reducer; 