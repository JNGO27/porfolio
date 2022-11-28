import Image from 'next/image';
import Link from 'next/link';

import Self from '../../assets/myself.jpg';
import styles from './styles.module.css';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <div className={styles['me-container']}> 
        <Image src={Self} height={40} width={40} alt="myself-image" style={{ borderRadius: "50%" }}/>
        <h2 className={styles['my-name']}>Joseph Napoleon Ochoa</h2>
      </div>
      <nav className={styles.navbar}>
        <Link href="#home">Home</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#about-me">About Me</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Navbar