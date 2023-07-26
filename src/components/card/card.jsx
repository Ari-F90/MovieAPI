import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./card.scss";

Card.propTypes = {
  movie: PropTypes.object,
};

export function Card({ movie }) {
  const image = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className="card">
      <Link to={`/details/${movie.id}`}>
        <img src={image} alt={movie.title} className="card__image"></img>
      </Link>
      <div className="card__title">{movie.title}</div>
    </li>
  );
}
