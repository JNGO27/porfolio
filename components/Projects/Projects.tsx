import { Devices } from '../';
import styles from './styles.module.css';
import { projectsArr } from '../../utils/constants';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h1 className={styles.heading}>Projects</h1>
      {projectsArr.map(project => (
        <div key={project.caseStudy} className={styles["case-study"]}>
          <h2 className={styles["case-study-heading"]}>Case Study {project.caseStudy} of {projectsArr.length}</h2>
          <Devices project={project} />
        </div>
      ))}
    </section>
  )
}

export default Projects;