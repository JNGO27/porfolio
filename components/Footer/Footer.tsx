import Image from 'next/image';

import { GitHub, Twitter, LinkedIn } from '../../assets';
import { githubStyles } from './imageStyles';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["links-container"]}>
        <h4 className={styles.developer}>Developed by <em>Joseph Ochoa</em></h4>
        <div className={styles["links-container-inner"]}>
        <a className={styles["styled-outside-link"]} target="_blank" href="https://twitter.com/jngo27" rel="noopener noreferrer">
          <Image className={styles.icon} src={Twitter} alt="github-icon" />
          <h5 className={styles["styled-outside-link"]}>Twitter</h5>
        </a>
        <a className={styles["styled-outside-link"]} target="_blank" href="https://github.com/JNGO27/porfolio" rel="noopener noreferrer">
          <Image className={styles.icon} src={GitHub} alt="github-icon" style={githubStyles}/>
          <h5 className={styles["styled-outside-link"]}>Source Code</h5>
        </a>
        <a className={styles["styled-outside-link"]} target="_blank" href="https://www.linkedin.com/in/joseph-ochoa-14a69aa0" rel="noopener noreferrer">
          <Image className={styles.icon} src={LinkedIn} alt="github-icon" />
          <h5 className={styles["styled-outside-link"]}>LinkedIn</h5>
        </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;