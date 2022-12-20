import { Devices } from '../';
import styles from './styles.module.css';
import { projectsArr } from '../../utils/constants';
import { ProjectCard } from '../';

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h1 className={styles.heading}>Projects</h1>
      {projectsArr.map(project => (
        <div key={project.caseStudy} className={styles["case-study"]}>
          <h2 className={styles["case-study-heading"]}>Case Study {project.caseStudy} of {projectsArr.length}</h2>
          <div className={styles["case-study-inner"]}>
            <Devices project={project} />
            <ProjectCard title={project.title} content={project.content} tech={project.tech} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects;