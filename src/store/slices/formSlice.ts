import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  formData: any;
}

const initialState: FormState = {
  formData: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<any>) => {
      state.formData = action.payload;
    },
  },
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer; 