import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://financialmodelingprep.com/api/v3/etf/list?apikey=Uzp6uPPYHijJhgsqRJ47VGkhzdZW3Yi1';
const initialState = {
  financial: [],
  isLoading: false,
  error: null,
};

export const fetchFinance = createAsyncThunk('fruits/fetchFruits', () => {
  const result = axios.get(`${url}`).then((response) => response.data);
  return result;
});

const FinancialSlice = createSlice(
  {
    name: 'FinancialSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder.addCase(fetchFinance.pending, (state) => ({
        ...state, isLoading,
      })),
      builder.addCase(fetchFinance.fulfilled, (state, action) => ({
        ...state, isLoading: false, financial: action.payload,
      })),
      builder.addCase(fetchFinance.rejected, (state, action) => ({
        ...state, isLoading: false, error: action.payload,
      }));
    },
  },
);
export const { extraReducers } = FinancialSlice.actions;
export default FinancialSlice.reducer;
