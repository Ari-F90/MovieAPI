/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { MovieApiRepo } from "../../../movies/services/movie.api.repo";

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
    });
  }, [id, repo]);

  return (
    <>
      <div>
        <div>{movie.title}</div>
      </div>
    </>
  );
}
