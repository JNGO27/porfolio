import { Navbar, HeroBanner, AboutMe } from "../components";
import styles from './page.module.css'; 

const Home = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles["main-content"]}>
        <HeroBanner />
        <AboutMe />
      </main>
    </div>
  )
}

export default Home;