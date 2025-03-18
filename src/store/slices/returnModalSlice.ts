import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ReturnModalState {
  showPendingPayments: boolean;
  showPaymentModal: boolean;
}

const initialState: ReturnModalState = {
  showPendingPayments: false,
  showPaymentModal: false,
};

const returnModalSlice = createSlice({
  name: 'returnModal',
  initialState,
  reducers: {
    setShowPendingPayments: (state, action: PayloadAction<boolean>) => {
      state.showPendingPayments = action.payload;
    },
    setShowPaymentModal: (state, action: PayloadAction<boolean>) => {
      state.showPaymentModal = action.payload;
    },
    resetReturnModal: (state) => {
      return initialState;
    },
  },
});

export const {
  setShowPendingPayments,
  setShowPaymentModal,
  resetReturnModal,
} = returnModalSlice.actions;

// Selectors
export const selectShowPendingPayments = (state: RootState) => state.returnModal.showPendingPayments;
export const selectShowPaymentModal = (state: RootState) => state.returnModal.showPaymentModal;

export default returnModalSlice.reducer; 