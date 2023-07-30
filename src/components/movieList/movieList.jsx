/* eslint-disable no-unused-vars */
import { useEffect, useContext } from "react";
import { Card } from "../card/card";
import "./movieList.scss";
import { MoviesContext } from "../../movies/context/movies.context";

export function MovieList() {
  const { movies, loadMovies } = useContext(MoviesContext);

  useEffect(() => {
    loadMovies("/discover/movie");
  }, [loadMovies]);

  return (
    <>
      <ul className="film-container">
        {movies.map((item) => (
          <Card key={item.id} movie={item}></Card>
        ))}
      </ul>
    </>
  );
}
