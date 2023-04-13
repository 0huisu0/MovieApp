import PropsTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, medium_cover_image, title, summary, genres }) {
    return (
        <div>
            <img src={medium_cover_image} alt={title}></img>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.PropsTypes = {
    id: PropsTypes.number.isRequired,
    medium_cover_image: PropsTypes.string.isRequired,
    title: PropsTypes.string.isRequired,
    summary: PropsTypes.string.isRequired,
    genres: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};

export default Movie;
