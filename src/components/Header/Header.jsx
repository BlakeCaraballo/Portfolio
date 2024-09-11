
import styles from './Header.module.css'


function Header(){

    return(
        <header>
            <h1>Blake Caraballo - 678-982-3652 - BlakeCaraballo1@gmail.com</h1>
            <nav className={styles.navbar}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
 
}

export default Header