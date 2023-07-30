import { movieAction } from "./movie.actions";

export function movieReducer(state, action) {
  switch (action.type) {
    case movieAction.load:
      return action.payload;
    default:
      return state;
  }
}
