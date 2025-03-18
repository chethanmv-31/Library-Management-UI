import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reducers/formReducer';
import returnModalReducer from './slices/returnModalSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    returnModal: returnModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
