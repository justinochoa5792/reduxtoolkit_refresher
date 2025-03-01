import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    { id: "1", name: "The Godfather" },
    { id: "2", name: "The Departed" },
  ],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    removeMovie: (state, action) => {},
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
