import styles from './styles.module.css';

type Props = {  
};

const Devices = (props: Props) => {
  return (
    <>
      <div className={styles.devices}>
        <div className={styles.phone}>
          <div className={styles["inner-phone-border"]}>
            <div className={styles["inner-phone-screen"]}>
              <div className={styles["phone-decoration"]}></div>
          </div>
          </div>
        </div>
        <div className={styles.laptop}>
          <div className={styles["inner-laptop-border"]}>
            <div className={styles["inner-laptop-screen"]}></div> 
            <div className={styles["laptop-bottom"]}>
              <div className={styles["laptop-bottom-decoration"]}></div>
            </div>
          </div>
        </div>
        <div className={styles.tablet}>
          <div className={styles["tablet-laptop-border"]}>
            <div className={styles["tablet-laptop-screen"]}></div> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Devices;