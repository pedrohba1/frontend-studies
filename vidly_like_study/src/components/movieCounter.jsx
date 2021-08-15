import React from "react";

const MovieCounter = ({ allMovies }) => {
  return allMovies.length !== 0 ? (
    <p> Showing {allMovies.length} movies in the database</p>
  ) : (
    <p>no movies in the database</p>
  );
};

export default MovieCounter;
