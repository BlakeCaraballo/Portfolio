import styles from "./Card.module.css"

function Card(){
    return(
        <div className={styles.card}>
            <img className={styles.cardImg }src="src/assets/bic1.png" alt="profile picture" />
            <h2 className={styles.cardTitle}>Blake Caraballo</h2>
            <p className={styles.cardText}>Blake is a Full Stack Web Developer with a B.S. in Computer Science from Georgia State University</p>
        </div>
    );
}

export default Card