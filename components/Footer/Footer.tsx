import Image from 'next/image';

import { GitHub } from '../../assets';
import { githubStyles } from './imageStyles';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["developer-container"]}>
        <h4 className={styles.developer}>Developed by <em>Joseph Ochoa</em></h4>
        <a className={styles["source-code"]} target="_blank" href="https://github.com/JNGO27/porfolio" rel="noopener noreferrer">
          <Image src={GitHub} width={35} height={35} alt="github-icon" style={githubStyles}/>
          <h5 className={styles["source-code"]}>Source Code</h5>
        </a>
      </div>
    </footer>
  )
}

export default Footer;