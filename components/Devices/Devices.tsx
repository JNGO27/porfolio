import Image from 'next/image';

import { ProjectType } from '../../types';
import { mobileImgStyles, laptopImgStyles, tabletImgStyles } from './imageStyles';
import styles from './styles.module.css';

type Props = { project: ProjectType };

const Devices = ({ project }: Props) => {
  return (
    <>
      <div className={styles.devices}>
        <div className={styles.phone}>
          <div className={styles["inner-phone-border"]}>
            <div className={styles["inner-phone-screen"]}>
              <Image className={styles["phone-image"]} src={project.mobileImg} alt="mobile-device-img" style={mobileImgStyles} />
          </div>
          </div>
        </div>
        <div className={styles.laptop}>
          <div className={styles["inner-laptop-border"]}>
            <div className={styles["inner-laptop-screen"]}>
              <Image className={styles["laptop-image"]} src={project.laptopImg} alt="laptop-device-img" style={laptopImgStyles} />
            </div> 
            <div className={styles["laptop-bottom"]}>
              <div className={styles["laptop-bottom-decoration"]}></div>
            </div>
          </div>
        </div>
        <div className={styles.tablet}>
          <div className={styles["tablet-laptop-border"]}>
            <div className={styles["tablet-laptop-screen"]}>
              <Image className={styles["tablet-image"]} src={project.tabletImg} alt="tablet-device-img" style={tabletImgStyles} />
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Devices;