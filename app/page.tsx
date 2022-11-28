import { Navbar, HeroBanner } from "../components";
import styles from './page.module.css'; 

const Home = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      {/* <HeroBanner /> */}
    </div>
  )
}

export default Home;