import React from 'react'
import styles from './techStack.module.css'
import TechLabel from './techLabel';

const TechStackLabels = ({ labels }) => (
  <>
    <div className={styles.techStackHeader}>Tech Stack</div>
    {
      labels.map((label, index) => <span key={index} className={styles.techLabel}><TechLabel text={label} /></span>)
    }
  </>
)

export default TechStackLabels