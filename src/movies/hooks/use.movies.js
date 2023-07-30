/* eslint-disable no-undef */
import { useCallback } from "react";
import { useReducer } from "react";
import * as ac from "../reducer/movie.actions.creators";
import { movieReducer } from "../reducer/movie.reducer";

export function useMovies(repo) {
  const initialState = [];
  const [movies, dispatch] = useReducer(movieReducer, initialState);

  const handleError = (error) => {
    console.log(error.message);
  };

  const loadMovies = useCallback(
    async (param) => {
      try {
        const movies = await repo.loadMoviesAPI(param);
        dispatch(ac.loadMovieCreator(movies.results));
      } catch (error) {
        handleError(error);
      }
    },
    [repo]
  );

  const getMovie = useCallback(
    async (id) => {
      try {
        const movie = await repo.loadOneMovie(id);
        dispatch(ac.loadMovieCreator(movie));
      } catch (error) {
        handleError(error);
      }
    },
    [repo]
  );

  return {
    movies,
    loadMovies,
    getMovie,
  };
}
