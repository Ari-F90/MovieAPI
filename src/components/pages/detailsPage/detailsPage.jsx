/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { MovieApiRepo } from "../../../movies/services/movie.api.repo";
import "../detailsPage/detailsPage.scss";

Details.propTypes = {
  movie: PropTypes.object,
};

export function Details() {
  const repo = useMemo(() => new MovieApiRepo(), []);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    repo.loadOneMovie(id).then((data) => {
      setMovie(data);
      setGenre(data.genres[0]);
      console.log(data);
    });
  }, [id, repo]);

  const image = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <>
      <div className="detailsPage">
        <img src={image} alt={movie.title} className="detailsPage__image"></img>
        <div className="detailsPage__info">
          <p className="detailsPage__title">
            <strong className="detailsPage__strong">Title: </strong>
            {movie.title}
          </p>
          <p>
            <strong className="detailsPage__strong">Tagline: </strong>
            <span className="detailsPage__tagline"> {movie.tagline} </span>
          </p>
          <p>
            <strong className="detailsPage__strong">Genre: </strong>
            {genre.name}
          </p>
          <p>
            <strong className="detailsPage__strong">Description: </strong>
            {movie.overview}{" "}
          </p>
          <p>
            <strong className="detailsPage__strong">Vote average: </strong>
            {movie.vote_average}
          </p>
        </div>
      </div>
    </>
  );
}
