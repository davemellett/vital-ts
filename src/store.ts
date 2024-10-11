import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "./teams/teamsSlice";

export const store = configureStore({
  reducer: {
    teams: teamsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {teams: TeamsState, ...}
export type AppDispatch = typeof store.dispatch;
