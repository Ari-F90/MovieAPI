import { MovieApiRepo } from "../services/movie.api.repo";
import { useMemo } from "react";
import { useMovies } from "../hooks/use.movies";
import PropTypes from "prop-types";
import { MoviesContext } from "./movies.context";

MoviesContextProvider.propTypes = {
  children: PropTypes.element,
};

export function MoviesContextProvider({ children }) {
  const moviesRepo = useMemo(() => new MovieApiRepo(), []);
  const context = {
    ...useMovies(moviesRepo),
  };

  return (
    <MoviesContext.Provider value={context}>{children}</MoviesContext.Provider>
  );
}
