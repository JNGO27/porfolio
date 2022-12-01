import Image from 'next/image';
import Link from 'next/link';

import { CodingIcon } from '../../assets';
import { selfStyles } from './imageStyles';
import styles from './styles.module.css';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <div className={styles["me-container"]}> 
        <div className={styles["me-image-outline"]}>
          <Image src={CodingIcon} height={40} width={40} alt="myself-image" style={selfStyles}/>
        </div>
        <h2 className={styles["my-name"]}>Joseph Napoleon Ochoa</h2>
      </div>
      <nav className={styles.navbar}>
        <Link href="#about-me">About Me</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Navbar;