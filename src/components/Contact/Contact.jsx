import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

const Contact = () => {
  return <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to contact me!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                <a href="mailto:blakecaraballo1@gmail.com">BlakeCaraballo1@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/blakecaraballo/">LinkedIn.com/BlakeCaraballo</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
                <a href="https://github.com/BlakeCaraballo">GitHub.com/BlakeCaraballo</a>
            </li>
        </ul>
  </footer>
}

export default Contact