import {createReducer, on} from "@ngrx/store";
import {increment, reset} from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(increment, (state) => state - 1),
  on(reset, (state) => 0)
);
