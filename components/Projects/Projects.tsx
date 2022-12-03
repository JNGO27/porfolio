import styles from './styles.module.css';

import { Devices } from '../';

type Props = {};

type Project = {
  caseStudy: number;
  laptopImgPath?: string;
  tabletImgPath?: string;
  mobileImgPath?: string;
};

const project1: Project = { caseStudy: 1 }; 
const project2: Project = { caseStudy: 2 }; 
const project3: Project = { caseStudy: 3 }; 

const devicesArr = [project1, project2, project3];

const Projects = (props: Props) => {
  return (
    <section className={styles.projects}>
      <h1 className={styles.heading}>Projects</h1>
      {devicesArr.map(project => (
        <div key={project.caseStudy} className={styles["case-study"]}>
          <h2 className={styles["case-study-heading"]}>Case Study {project.caseStudy} of {devicesArr.length}</h2>
          <Devices />
        </div>
      ))}
    </section>
  )
}

export default Projects;