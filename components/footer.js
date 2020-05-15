import React from 'react'
import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footerContainer}>
    <div
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>Built with love using React and Next.js</div>
      <div>Banner image courtesy of <a className={styles.footerLink} href="https://www.freepik.com/free-photos-vectors/technology">freepik</a></div>
      <div>
        Find my code on <a href='https://www.github.com/mdurban' target='_blank'><img src="/github-logo.png" alt="Github Logo" className={styles.footerIcon} /></a>
      </div>
    </div>
  </footer>
)

export default Footer