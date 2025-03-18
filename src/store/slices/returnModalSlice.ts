import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ReturnModalState {
  showPendingPayments: boolean;
}

const initialState: ReturnModalState = {
  showPendingPayments: false,
};

const returnModalSlice = createSlice({
  name: 'returnModal',
  initialState,
  reducers: {
    setShowPendingPayments: (state, action: PayloadAction<boolean>) => {
      state.showPendingPayments = action.payload;
    },
    resetReturnModal: (state) => {
      return initialState;
    },
  },
});

export const {
  setShowPendingPayments,
  resetReturnModal,
} = returnModalSlice.actions;

// Selectors
export const selectShowPendingPayments = (state: RootState) => state.returnModal.showPendingPayments;

export default returnModalSlice.reducer; 