import Image from 'next/image';

import { ProjectType } from '../../types';
import { mobileImgStyles, laptopImgStyles, tabletImgStyles } from './imageStyles';
import { ProjectCard } from '../';
import styles from './styles.module.css';

type Props = { project: ProjectType };

const Devices = ({ project }: Props) => {
  return (
    <>
      <div className={styles.devices}>
        <div className={styles.phone}>
          <div className={styles["inner-phone-border"]}>
            <div className={styles["inner-phone-screen"]}>
              <div className={styles["phone-decoration"]}></div>
              <Image src={project.mobileImg} alt="mobile-device-img" width={85} height={185} style={mobileImgStyles} />
          </div>
          </div>
        </div>
        <div className={styles.laptop}>
          <div className={styles["inner-laptop-border"]}>
            <div className={styles["inner-laptop-screen"]}>
              <Image src={project.laptopImg} alt="laptop-device-img" width={390} height={234} style={laptopImgStyles} />
            </div> 
            <div className={styles["laptop-bottom"]}>
              <div className={styles["laptop-bottom-decoration"]}></div>
            </div>
          </div>
        </div>
        <div className={styles.tablet}>
          <div className={styles["tablet-laptop-border"]}>
            <div className={styles["tablet-laptop-screen"]}>
              <Image src={project.tabletImg} alt="tablet-device-img" width={255} height={155} style={tabletImgStyles} />
            </div> 
          </div>
        </div>
        <ProjectCard title={project.title} content={project.content} tech={project.tech} />
      </div>
    </>
  )
}

export default Devices;