import Image from "next/image";

import { Laptop } from '../../assets';
import { TS } from "../../assets/technologies";
import { tsStyles, laptopStyles } from "./imagesStyles";
import styles from './styles.module.css';

const HeroBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles["banner-content"]}>
        <h1 className={styles["banner-text"]}>Hi there, I&apos;m Joseph.<em className={styles["banner-text-gradient"]}> Full Stack Software Engineer.</em> I love building products.</h1>
        <p>I&apos;m a Software Engineer who has a deep internal satisfaction through striving to achieve Mastery in my craft and strongly enjoy both Front-End and Back-End development. I have a vision to always get better, never stop learning, and ultimately keep building!</p>
      </div>
      <div className={styles["banner-self"]}>
        <div className={styles["icon-wrapper"]}>
          <Image src={TS} width={50} height={50} alt="typescript-png" style={tsStyles} />
        </div>
        <h6 className={styles["laptop-name"]}>Joseph Napoleon Ochoa</h6>
        <div className={styles["decoration-one"]} />
          <Image src={Laptop} alt="laptop-svg" style={laptopStyles}/>
        <div className={styles["decoration-two"]} />
      </div>
    </section>
  )
}

export default HeroBanner;