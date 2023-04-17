import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./Detail.module.css";
import { IoStar } from "react-icons/io5";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    let history = useHistory();

    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    const goHome = () => {
        history.push("/");
    };

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className={styles.wrap}>
                    <div className={styles.header}>
                        <p onClick={goHome} className={styles.logo}>
                            HOME
                        </p>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.contentIn}>
                            <div className={styles.imgArea}>
                                <img
                                    src={movie.large_cover_image}
                                    alt={movie.title}
                                ></img>
                            </div>
                            <div className={styles.descArea}>
                                <h1 className={styles.title}>
                                    {movie.title_long}
                                </h1>
                                <div className={styles.rating}>
                                    <IoStar
                                        style={{
                                            height: "30px",
                                            // backgroundColor: "blue",
                                        }}
                                    />
                                    <span>{movie.rating}</span>
                                </div>
                                <p className={styles.full}>
                                    {movie.description_full.length > 470
                                        ? `${movie.description_full.slice(
                                              0,
                                              470
                                          )}...`
                                        : movie.description_full}
                                </p>
                                <ul className={styles.genre}>
                                    {movie.genres.slice(0, 2).map((genre) => (
                                        <li key={genre}>{genre}</li>
                                    ))}
                                </ul>
                                <div className={styles.link}>
                                    <a
                                        href={movie.url}
                                        style={{
                                            fontSize: "19px",
                                            color: "#fff",
                                        }}
                                    >
                                        View More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Detail;
