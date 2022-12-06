import Image from 'next/image';

import { SkillListType } from '../../types';
import styles from './styles.module.css';

type Props = {
  skillList: SkillListType;
}

const SingleSkill = ({ skillList }: Props) => {
  const skillCategory = skillList[0].type;

  return (
    <>
      <h2 className={styles.category}>{skillCategory}</h2>
      <ul className={styles.skill}>
        {skillList.map((skillImg, idx) => (
          <div className={styles["skill-container"]} key={idx + 1}>
            <li className={styles["skill-image"]}><Image src={skillImg.skill} width={100} height={100} alt="SingleSkill-image" /></li>
            <h5 className={styles["skill-name"]}>{skillImg.skillName}</h5>
          </div>
        ))}
      </ul>
    </>
  )
}

export default SingleSkill;