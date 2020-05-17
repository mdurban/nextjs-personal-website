import React from 'react'
import styles from './projects.module.css'

const ProjectsSection = () => (
  <>
    <div className={styles.projectContainer}>
      <div className={styles.projectDescription}>
        <div className={styles.projectTitle}>MoneyForNoobs</div>
        <div className={styles.projectSubTitle}>When I tried learning the basics of finances, I was frustrated at how confusing it was. I had a difficult time finding any blog posts or podcasts aimed at people who knew nothing and I found myself lost in sea of cryptic mathematical equations and unfamiliar lingo. The basics of money is something that I feel everyone should know, yet it feels so hard to learn.</div>
        <div className={styles.projectSubTitle}>My goal is to create a blog where people can start learning the basics in an accessible way. I want to have a place where people who know nothing about finances will feel welcome and not overwhelmed.</div>
        <div className={`${styles.projectSubTitle} ${styles.projectTechStack}`}>Tech Stack: React, Redux, SASS, Gatsby</div>

      </div>
      <div className={styles.projectImages} >
        <a href='https://www.moneyfornoobs.com' target='_blank'>
          <div className={styles.imageOutline}>
            <img className={styles.workImage} src="/mfn-desktop-full.png" alt="Money For Noobs" />
          </div>
        </a>
      </div>
    </div>

    <div className={styles.projectContainer}>
      <div className={styles.projectImages}>
        <a href='https://rubygems.org/gems/rspec-bash/versions/0.1.0' target='_blank'>
          <div className={styles.imageOutline}>
            <img className={styles.workImage} src="/rspec-bash.png" alt="rspec-bash" />
          </div>
        </a>
      </div>
      <div className={styles.projectDescription}>
        <div className={styles.projectTitle}>rspec-bash (Bash Testing Library)</div>
        <div className={styles.projectSubTitle}>Co-author of rspec-bash, an open-source Ruby gem that provides a framework for unit testing bash code.</div>
        <div className={`${styles.projectSubTitle} ${styles.projectTechStack}`}>Tech Stack: Bash, Ruby</div>
      </div>
    </div>

    <div className={styles.projectContainer}>
      <div className={styles.projectDescription}>
        <div className={styles.projectTitle}>Representatives Finder Website</div>
        <div className={styles.projectSubTitle}>Website that helps users search for their representatives based on their location. Gives information for city level officials up to federal.</div>
        <div className={`${styles.projectSubTitle} ${styles.projectTechStack}`}>Tech Stack: React, Redux, SASS</div>
      </div>
      <div className={styles.projectImages}>
        <a href='https://luiscarlin.github.io/representatives/' target='_blank'>
          <div className={styles.imageOutline}>
            <img className={styles.workImage} src="/reps.png" alt="Representatives" />
          </div>
        </a>
      </div>
    </div>

    <div className={styles.projectContainer}>
      <div className={styles.sideBySideImages}>
        <div className={styles.imageOutline}>
          <img className={styles.singleImage} src="/prototype.png" alt="Real Estate" />
        </div>
      </div>
      <div className={styles.projectDescription}>
        <div className={styles.projectTitle}>Real Estate Auction Prototype</div>
        <div className={styles.projectSubTitle}>Develop mobile application prototype to help startup try and secure first round of funding.</div>
        <div className={styles.projectSubTitle}>The prototype was used by the company to show investors what functionality they were planning on developing.</div>
        <div className={styles.projectSubTitle}>It hooked into an in-house cryptocurrency application to allow users to bid on real estate property using digital currency.</div>
        <div className={`${styles.projectSubTitle} ${styles.projectTechStack}`}>Tech Stack: React, Redux, MaterialUI, styled components</div>
      </div>
    </div>
  </>
)

export default ProjectsSection