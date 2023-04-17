import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, medium_cover_image, title }) {
    return (
        <div className={styles.movie}>
            <img
                src={medium_cover_image}
                alt={title}
                className={styles.img}
            ></img>
            <div className={styles.cover}>
                <h2 className={styles.title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
            </div>
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
