import Image from 'next/image';

import { GitHub, WebLink } from '../../assets';
import { iconStyles } from './imageStyles';
import styles from './styles.module.css';

type Props = { 
  title: string;
  content: string;
  tech: string[];
  link: string;
  github: string;
};

const ProjectCard = ({ title, content, tech, link, github }: Props) => {
  return (
    <div className={styles["project-card"]}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.background}>
      <p className={styles.content}>{content}</p>
        <h4 className={styles["tech-heading"]}>Technologies Used:</h4>
        <ul className={styles["tech-list"]}>
          {tech.map((technology, idx) => (
            <li key={idx + 1}>
              <h5 className={styles.tech}>{"- " + technology}</h5>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles["icons-container"]}>
        {link && github ?
          <>
          <a target="_blank" href={link} rel="noopener noreferrer">
            <Image src={WebLink} width={50} height={50} alt="weblink-icon" style={iconStyles} />
          </a>
          <a  target="_blank" href={github} rel="noopener noreferrer">
            <Image src={GitHub} width={34} height={34} alt="github-icon" style={iconStyles} />
          </a>
          </>
        :
        <h3>in progress...</h3>
      }
      </div>
    </div>
  )
}

export default ProjectCard;