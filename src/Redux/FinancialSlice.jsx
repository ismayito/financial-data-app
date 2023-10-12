import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://financialmodelingprep.com/api/v3/etf/list?apikey=Uzp6uPPYHijJhgsqRJ47VGkhzdZW3Yi1';
// const url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15';
const initialState = {
  financial: [],
  financialItemDetailsArray: [],
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
      financialItemDetail: (state, action) => {
        const id = action.payload;
        const filteredData = state.financial.filter((item) => item.symbol === id);
        return (
          { ...state, financialItemDetailsArray: filteredData }
        );
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchFinance.pending, (state) => ({
        ...state, isLoading: false,
      }));
      builder.addCase(fetchFinance.fulfilled, (state, action) => ({
        ...state, isLoading: false, financial: action.payload,
      }));
      builder.addCase(fetchFinance.rejected, (state, action) => ({
        ...state, isLoading: false, error: action.payload,
      }));
    },
  },
);
export const { extraReducers, financialItemDetail, itemDetailDisplay } = FinancialSlice.actions;
export default FinancialSlice.reducer;
