import { configureStore } from '@reduxjs/toolkit';
import FinancialSlice from './FinancialSlice';

const store = configureStore({
  reducer: {
    financial: FinancialSlice,
  },
});

export default store;
