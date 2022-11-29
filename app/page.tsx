import { Navbar, HeroBanner } from "../components";
import styles from './page.module.css'; 

const Home = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles["main-content"]}>
        <HeroBanner />
      </main>
    </div>
  )
}

export default Home;