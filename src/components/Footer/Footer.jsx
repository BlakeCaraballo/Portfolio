import styles from "./Footer.module.css"


function Footer(){

    return(
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Designed by Blake Caraballo</p>
        </footer>
    );
}

export default Footer