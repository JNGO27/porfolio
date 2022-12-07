import { Navbar, HeroBanner, AboutMe, Projects, Skills, ContactMe, Footer } from "../components";
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
        <ContactMe />
        <Footer />
      </main>
    </div>
  )
}

export default Home;