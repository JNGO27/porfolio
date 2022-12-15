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
              <Image src={project.mobileImg} alt="mobile-device-img" objectFit="fill" style={mobileImgStyles} />
          </div>
          </div>
        </div>
        <div className={styles.laptop}>
          <div className={styles["inner-laptop-border"]}>
            <div className={styles["inner-laptop-screen"]}>
              <Image src={project.laptopImg} alt="laptop-device-img" objectFit="fill" style={laptopImgStyles} />
            </div> 
            <div className={styles["laptop-bottom"]}>
              <div className={styles["laptop-bottom-decoration"]}></div>
            </div>
          </div>
        </div>
        <div className={styles.tablet}>
          <div className={styles["tablet-laptop-border"]}>
            <div className={styles["tablet-laptop-screen"]}>
              <Image src={project.tabletImg} alt="tablet-device-img" objectFit="fill" style={tabletImgStyles} />
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Devices;