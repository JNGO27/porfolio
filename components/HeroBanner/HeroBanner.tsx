import Image from "next/image";

import { Laptop } from '../../assets';
import styles from './styles.module.css';

const HeroBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles["banner-content"]}>
        <h1 className={styles["banner-text"]}>Hi there, I'm Joseph.<em className={styles["banner-text-gradient"]}> Full Stack Software Engineer.</em> I love building products.</h1>
        <p>I'm a Software Engineer who has a deep internal satisfaction through striving to achieve Mastery in my craft and strongly enjoy both Front-End and Back-End development. I have a vision to always get better, never stop learning, and ultimately keep building!</p>
      </div>
      <div className={styles["banner-self"]}>
        <div className={styles.decoration} />
        <Image src={Laptop} width={550} height={550} alt="laptop-svg" style={{ position: "absolute", inset: 0, margin: "auto" }}/>
        <div className={styles.decoration} />
      </div>
    </section>
  )
}

export default HeroBanner;