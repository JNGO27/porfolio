import Image from 'next/image';

import { Self } from '../../assets';
import { portraitStyles } from './imageStyles';
import styles from './styles.module.css';

const AboutMe = () => {
  return (
    <div className={styles["about-me"]}>
      <div className={styles["picture-frame"]}>
        <Image src={Self} width={250} height={250} alt="self-image" style={portraitStyles}/>
        <div className={styles["heading-wrapper"]}>
          <h1 className={styles.heading}>About Me</h1>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>I wasn't always a Software Engineer. I spent many years as a musician performing music, teaching music, and constantly thinking about music. I got quite skilled at the <a className="styled-link" target="_blank" href="https://www.youtube.com/watch?v=O4jGiTPMI6g" rel="noopener noreferrer">Classical Guitar</a> and still really love it! While on my music journey,
            I became enthusiastically excited around the concept of identity and thought about what I would do if I wasn't doing music and could I enjoy it as much as music?. This question lead me to think about the many possible versions of myself and long story short, I landed in the world of programming!
          </p>
          <p>Fast forward today, I'm very excited to say that I ended up loving this craft as much as music! I have spent years trying to become as skilled as possible in this craft by completing multiple training program and building projects that I'm proud of.
            I've completed <a className="styled-link" target="_blank" href="https://launchschool.com/" rel="noopener noreferrer">Launch School</a> a multi-year rigorous assessment based online school that focuses on the fundamentals of programming. After my studies there, I continued my studies completing many courses, and then attended the  <a className="styled-link" target="_blank" href="https://www.jsmastery.pro/" rel="noopener noreferrer">JSM Masterclass Experience</a> where I got worked with a global team, made projects, and got code reviews from <a className="styled-link" target="_blank" href="https://stars.github.com/profiles/adrianhajdin/" rel="noopener noreferrer">GitHub Star and YouTuber Adrian Hajdin(JavaScript Mastery)</a> and other Senior Engineers.
          </p>
          <p>I spend most of my time improving my crafts, but I also enjoy fine-dining, seeing new places, weight-lifting and learing about people.</p>
         <div className={styles.decoration} />
         <div className={styles.decoration} />
        </div>
      </div>
    </div>
  )
}

export default AboutMe