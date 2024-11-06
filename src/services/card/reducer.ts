import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type TypeCardState = {
  card: string | null;
  isCardChosen: boolean;
};

const initialState: TypeCardState = {
  card: null,
  isCardChosen: false,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCard: (state, action) => {
      state.card = action.payload;
      state.isCardChosen = true;
    },
  },
});

export const getCard = (state: RootState) => state.card.card;
export const getIsCardChosen = (state: RootState) => state.card.isCardChosen;
export const { setCard } = cardSlice.actions;

export const reducer = cardSlice.reducer;

export default reducer;
