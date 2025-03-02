import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeMovie } from "../movieSlice";

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  const handleRemoveMovie = (movieId) => {
    dispatch(removeMovie(movieId));
  };
  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            {movie.name}
            <button onClick={() => handleRemoveMovie(movie.id)}>
              Delete Movie
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
