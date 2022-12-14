import Image from "next/image";

import { Laptop } from '../../assets';
import { TS } from "../../assets/technologies";
import styles from './styles.module.css';

const HeroBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles["banner-content"]}>
        <h1 className={styles["banner-text"]}>Hi there, I&apos;m Joseph.<em className={styles["banner-text-gradient"]}> Full Stack Software Engineer.</em> I love building products.</h1>
        <p>As a software engineer, I find deep internal satisfaction in striving for mastery in my craft. I am passionate about both front-end and back-end development and am driven to continually improve and learn new skills. My goal is to keep building and never stop learning.</p>
      </div>
      <div className={styles["banner-self"]}>
        <div className={styles["icon-wrapper"]}>
          <Image className={styles["ts-image"]} src={TS} alt="typescript-png" />
        </div>
        <h6 className={styles["laptop-name"]}>Joseph Napoleon Ochoa</h6>
        <div className={styles["decoration-container"]}>
          <div className={styles["decoration-one"]} />
            <Image className={styles["laptop-image"]} src={Laptop} alt="laptop-svg" />
          <div className={styles["decoration-two"]} />
        </div>
      </div>
    </section>
  )
}

export default HeroBanner;