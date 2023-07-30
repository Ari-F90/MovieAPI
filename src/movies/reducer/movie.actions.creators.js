import { movieAction } from "./movie.actions";

export const loadMovieCreator = (payload) => {
  return {
    type: movieAction.load,
    payload,
  };
};
