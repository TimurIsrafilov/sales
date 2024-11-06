import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "@/utils/api";

export const loadSales = createAsyncThunk("sales/loadSales", async () => {
  return api.getSalesData();
});
