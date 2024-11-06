import { createSlice } from "@reduxjs/toolkit";
import { TypeSalesData } from "@/types/types";
import { RootState } from "../store";
import { loadSales } from "./actions";

type TypeSalesState = {
  sales: TypeSalesData | null;
  loading: boolean;
  error: unknown;
};

const initialState: TypeSalesState = {
  sales: null,
  loading: false,
  error: null,
};

export const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSales.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadSales.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loadSales.fulfilled, (state, action) => {
        state.loading = false;
        state.sales = action.payload;
      });
  },
});

export const getSales = (state: RootState) => state.sales.sales;
export const getSalesLoading = (state: RootState) => state.sales.loading;
export const getSalesError = (state: RootState) => state.sales.error;

export const reducer = salesSlice.reducer;
export default reducer;
