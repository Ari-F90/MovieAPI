import PropTypes from "prop-types";

Card.propTypes = {
  movie: PropTypes.element.isRequired,
};

export function Card({ movie }) {
  const image = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div>
      <img src={image} alt={movie.title}></img>
      <li>{movie.title}</li>
    </div>
  );
}
