import Image from 'next/image';

import { CodingIcon, MenuIcon, CloseIcon, } from '../../assets';
import { logoStyles } from './imageStyles';
import styles from './styles.module.css';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <div className={styles["me-container"]}> 
        <div className={styles["me-image-outline"]}>
          <Image src={CodingIcon} height={40} width={40} alt="myself-image" style={logoStyles}/>
        </div>
        <h2 className={styles["my-name"]}>Joseph Napoleon Ochoa</h2>
      </div>
      <nav className={styles.navbar}>
        <a href="#about-me">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a className={styles.resume} target="_blank" href={PDF} rel="noopener noreferrer">Resume</a>
      </nav>
      <input className={styles["mobile-opener"]} type="checkbox" /> 
        <Image className={styles.menu} src={MenuIcon} alt="menu-icon" />
        <Image className={styles.close} src={CloseIcon} alt="clone-menu-icon"/>
        <nav className={styles["mobile-navbar"]}>
          <a href="#about-me">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a className={styles.resume} target="_blank" href={PDF} rel="noopener noreferrer">Resume</a>
        </nav>
    </header>
  )
}

export default Navbar;