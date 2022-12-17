import Link from 'next/link';

import styles from './styles.module.css';

const MobileMenu = () => {
  return (
    <nav className={styles.navbar}>
    <Link href="#about-me">About Me</Link>
    <Link href="#projects">Projects</Link>
    <Link href="#skills">Skills</Link>
    <Link href="#contact">Contact</Link>
  </nav>
  )
}

export default MobileMenu;