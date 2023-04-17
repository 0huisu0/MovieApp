import styles from "./Loading.module.css";

function Loading() {
    return (
        <div className={styles.wrap}>
            <h1 className={styles.loading}>Loading...</h1>
        </div>
    );
}

export default Loading;
