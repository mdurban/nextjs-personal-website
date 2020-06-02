import React from 'react'
import styles from './label.module.css'

const TechLabel = ({ text }) => {
  return (
    <div className={styles.labelWrapper}>
      <div className={styles.labelText}>{text}</div>
    </div>
  )
}

export default TechLabel