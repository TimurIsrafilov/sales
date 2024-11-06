import { combineReducers } from "redux";

import { reducer as salesReducer } from "@/services/sales/reducer";
import { reducer as cardReducer } from "@/services/card/reducer";
import { reducer as timerReducer } from "@/services/timer/reducer";

export const reducer = combineReducers({
  sales: salesReducer,
  card: cardReducer,
  timer: timerReducer,
});
