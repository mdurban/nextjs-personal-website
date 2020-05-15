import React from 'react'
import styles from './hero.module.css'

const Hero = () => (
  <div className={styles.heroContainer}>
    <div className={styles.headerText}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>
          Michael Urban
          </h1>
        <div className={styles.heroSubtitle}>
          After robots take over the world, our code will be the last evidence of human existence.
          </div>
        <br />
        <div className={styles.heroSubtitle}>
          <span className={styles.heroPunchline}> So it better be good.</span><span className={styles.blinkingCursor}>|</span>
        </div>
      </div>
    </div>
    <img className={styles.headerImage} src='/robot-friends.jpg'></img>
  </div>
)

export default Hero