import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../movieSlice";

const MovieInput = () => {
  const [addedMovie, setAddedMovie] = useState("");
  const dispatch = useDispatch();

  const handleAddNewMovie = () => {
    if (addedMovie) {
      dispatch(addMovie(addedMovie));
      setAddedMovie("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={addedMovie}
        onChange={(e) => setAddedMovie(e.target.value)}
      />
      <button onClick={handleAddNewMovie}>Add Movie</button>
    </div>
  );
};

export default MovieInput;
