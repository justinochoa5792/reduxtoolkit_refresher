import React from "react";
import { useSelector } from "react-redux";

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => {
        return <div key={movie.id}>{movie.name}</div>;
      })}
    </div>
  );
};

export default MovieList;
