import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Blake</h1>
            <p className={styles.description}>I am a Full Stack Developer With 4 years of experience using React and Node.js. 
                Please Reach out if you would like to learn more.
            </p>
            <a className={styles.contactBtn} href="mailto:blakecaraballo1@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/bic1.png")} alt="Hero Img" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero