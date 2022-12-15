import Image from 'next/image';
import Link from 'next/link';

import { CodingIcon, MenuIcon } from '../../assets';
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
        <Link href="#about-me">About Me</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#contact">Contact</Link>
      </nav>
      <Image className={styles.menu} src={MenuIcon} alt="menu-icon" />
    </header>
  )
}

export default Navbar;