import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import Loading from "../components/Loading";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMoives] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=year`
            )
        ).json();
        setMoives(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className={styles.wrap}>
                    <div className={styles.header}>
                        <p className={styles.logo}>MOVIE LIST</p>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.contentIn}>
                            <div className={styles.movies}>
                                {movies.map((movie) => (
                                    <Movie
                                        key={movie.id}
                                        id={movie.id}
                                        medium_cover_image={
                                            movie.medium_cover_image
                                        }
                                        title={movie.title}
                                        summary={movie.summary}
                                        genres={movie.genres}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
