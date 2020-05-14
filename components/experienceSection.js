import React from 'react'
import styles from './experience.module.css'

const ExperienceSection = () => (
  <>
    <div className={styles.jobSection}>
      <div className={styles.company}>Pillar Technology (now part of Accenture)</div>
      <div className={styles.jobDate}>Nov. 2014 - Present // Columbus, OH</div>
      <div className={styles.jobSummary}>Software developer focused on web development and designing user-friendly applications while writing clean, maintainable code</div>
      <div className={styles.jobContainer}>
        <div className={styles.jobProjectTitle}>Internal Project</div>
        <div className={styles.jobProjectDescription}>Tech Lead on internal web portal to help regional leadership track employee chargeability and project metrics</div>
        <div className={styles.jobProjectTechnologies}>Technologies: JavaScript, React, Redux, node.js</div>
        <div className={styles.jobProjectTitle}>Health Science</div>
        <div className={styles.jobProjectDescription}>Tech Lead on Emergency Room mobile application that helps stroke unit teams manage critical care schedules</div>
        <div className={styles.jobProjectTechnologies}>Technologies: JavaScript, React Native, Redux, C#</div>
        <div className={styles.jobProjectTitle}>Natural Resource</div>
        <div className={styles.jobProjectDescription}>Data visualization dashboard helping client view status, efficiency and operating cost of gas and oil wells</div>
        <div className={styles.jobProjectTechnologies}>Technologies: JavaScript, React, Redux, node.js</div>
        <div className={styles.jobProjectTitle}>Healthcare</div>
        <div className={styles.jobProjectDescription}>Tech Lead for client’s web application which helps thousands of patients schedule services with their healthcare providers</div>
        <div className={styles.jobProjectTechnologies}>Technologies: JavaScript, React, Redux, Cordova, C#</div>
        <div className={styles.jobProjectTitle}>Retail</div>
        <div className={styles.jobProjectDescription}>Warehouse execution system which helped employees ship 200,000 units of merchandise daily</div>
        <div className={styles.jobProjectTechnologies}>Technologies: Java, Groovy, Ruby, Spring Boot, MongoDB, Bash</div>
      </div>
    </div>
    <div className={styles.jobSection}>
      <div className={styles.company}>Cisco Systems</div>
      <div className={styles.jobDate}>Aug. 2013 - Nov. 2014 // San Jose, CA</div>
      <div className={styles.jobSummary}>Software Engineer responsible for contributing to test automation framework for testing company's rack servers</div>
      <div className={styles.jobContainer}>
        <div className={styles.jobProjectTitle}>Hardware</div>
        <div className={styles.jobProjectDescription}>Wrote libraries and test scripts for automation framework that ran regression tests against rack servers</div>
        <div className={styles.jobProjectTechnologies}>Technologies: Tcl, Bash</div>
      </div>
    </div>
  </>
)

export default ExperienceSection