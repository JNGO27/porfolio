import { SingleSkill } from '../';
import { allSkills } from '../../utils/constants';
import styles from './styles.module.css';

const Skills = () => {
  return (
    <section className={styles.section} id="skills">
      <h1 className={styles.heading}>Skills</h1>
      <ul className={styles.skills}>
        {allSkills.map((skillArr, idx) => (
          <li key={idx + 1}>
            <SingleSkill skillList={skillArr} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills;