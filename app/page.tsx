import { Navbar, HeroBanner, AboutMe, Projects, Skills } from "../components";
import styles from './page.module.css'; 

const Home = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles["main-content"]}>
        <HeroBanner />
        <AboutMe />
        <Projects />
        <Skills />
      </main>
    </div>
  )
}

export default Home;