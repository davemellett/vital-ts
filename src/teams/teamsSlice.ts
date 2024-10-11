import { createSlice } from "@reduxjs/toolkit";

import { club as clubs } from "../clubs";

const clubsSlice = createSlice({
  name: "clubs",
  initialState: [],
  reducers: {
    addClub(state: clubs[], action) {
      const newclub: clubs = {
        id: action.payload.id,
        name: action.payload.name,
        coords: action.payload.coords,
        ground: action.payload.ground,
      };
      state.push(newclub);
    },
    resetClubs(state: clubs[]) {
      state.length = 0;
    },
    setClubDistances(state: clubs[], action) {
      const club: clubs | undefined = state.find(
        (club: clubs) => club.id === action.payload.id
      );
      if (club) {
        club.distances = action.payload.distances;
      }
    },
  },
});

export const { addClub, resetClubs, setClubDistances } = clubsSlice.actions;
export default clubsSlice.reducer;
