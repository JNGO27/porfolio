import styles from './styles.module.css';

const ContactMe = () => {
  return (
    <form className={styles["contact-form"]} action="https://formsubmit.co/josephochoa91@gmail.com" method="POST">
      <h1 className={styles.heading}>Contact Me</h1>
      <div className={styles.decoration}>
        <div className={styles["user-info"]}>
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="name" name="name" placeholder="Your Name" required />
        </div>
        <div className={styles["message-container"]}>
          <textarea className={styles.message} name="texarea" placeholder="Your Message" />
        </div>
      </div>
      <button className={styles.send} type="submit">Send Message</button>
    </form>
  )
}

export default ContactMe;