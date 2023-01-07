import Image from 'next/image';

import { Self } from '../../assets';
import { portraitStyles } from './imageStyles';
import styles from './styles.module.css';

const AboutMe = () => {
  return (
    <section className={styles["about-me"]} id="about-me">
      <div className={styles["picture-frame-wrapper"]}>
      <div className={styles["picture-frame"]}>
        <Image src={Self} width={225} height={225} alt="self-image" style={portraitStyles}/>
        <div className={styles["heading-wrapper"]}>
          <h1 className={styles.heading}>About Me</h1>
        </div>
      </div>
      </div>
      <div className={styles.container}>
        <div className={styles.decoration} />
        <div className={styles.content}>
          <p>I wasn&apos;t always a software engineer. In fact, I spent many years as a musician, performing, teaching, and constantly thinking about music. I became highly skilled at playing the <a className="styled-link" target="_blank" href="https://www.youtube.com/watch?v=O4jGiTPMI6g" rel="noopener noreferrer">Classical Guitar</a> and still love it to this day. However, as I journeyed through my music career, I became fascinated with the concept of identity and began to wonder what I would do if I wasn&apos;t doing music, and if I could find something else that I enjoyed just as much. This question led me to consider all the different versions of myself and, eventually, I ended up in the world of programming.
          </p>
          <p>Now, I am thrilled to say that I have found just as much passion and satisfaction in this craft as I did in music. I have spent years working to become as skilled as possible, completing multiple training programs and building projects that I am proud of. I have graduated from <a className="styled-link" target="_blank" href="https://launchschool.com/" rel="noopener noreferrer">Launch School</a> a multi-year, assessment-based online school that focuses on the fundamentals of programming. After my studies there, I continued my education by completing numerous courses and attending the <a className="styled-link" target="_blank" href="https://www.jsmastery.pro/" rel="noopener noreferrer">JSM Masterclass Experience</a> where I worked with a global team, made projects, and received mentorship from <a className="styled-link" target="_blank" href="https://stars.github.com/profiles/adrianhajdin/" rel="noopener noreferrer">GitHub Star and YouTuber Adrian Hajdin(JavaScript Mastery)</a> and other senior engineers.
          </p>
          <p>In my free time, I enjoy fine dining, traveling to new places, weightlifting, and learning about people. However, my primary focus is always on improving my skills as a software engineer.</p>
        </div>
        <div className={styles.decoration} />
      </div>
    </section>
  )
}

export default AboutMe;