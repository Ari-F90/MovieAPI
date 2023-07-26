import { useState, useEffect } from "react";
import { loadMovies } from "../../services/repository/movies.api.repo";
import { Card } from "../card/card";
import "./movieList.scss";

export function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies("/discover/movie").then((data) => {
      setMovies(data.results);
      console.log(data);
    });
  }, []);
  return (
    <ul className="film-container">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie}></Card>
      ))}
    </ul>
  );
}
