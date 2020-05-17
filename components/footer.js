import React from 'react'
import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footerContainer}>
    <div className={styles.contactContainer}>
      <a href='https://www.linkedin.com/in/urbanmike/' target='_blank'>
        <img className={styles.contactImage} src='/linkedIn-logo.png'></img>
      </a>
      <a href='mailto:mike.david.urban@gmail.com' target='_blank'>
        <img className={styles.contactImage} src='/gmail.svg'></img>
      </a>
      <a href='https://www.github.com/mdurban' target='_blank'>
        <img className={styles.contactImage} src='/github-logo-circle.svg'></img>
      </a>
    </div>
    <div className={styles.footerCredits}>
      <div>Built with love using React and Next.js</div>
      <div>Banner image courtesy of <a className={styles.footerLink} href="https://www.freepik.com/free-photos-vectors/technology">freepik</a></div>
    </div>
  </footer>
)

export default Footer