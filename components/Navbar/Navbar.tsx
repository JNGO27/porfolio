import Image from 'next/image';
import Link from 'next/link';

import { Self } from '../../assets';
import { selfStyles } from './imageStyles';
import styles from './styles.module.css';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <div className={styles['me-container']}> 
        <Image src={Self} height={40} width={40} alt="myself-image" style={selfStyles}/>
        <h2 className={styles['my-name']}>Joseph Napoleon Ochoa</h2>
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

export default Navbar