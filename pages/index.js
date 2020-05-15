import Head from 'next/head'
import styles from './home.module.css'
import Hero from '../components/hero'
import ExperienceSection from '../components/experienceSection'
import ProjectsSection from '../components/projectsSection'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.appContainer}>
      <Head>
        <title>Michael Urban</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>

      <Hero />

      <main className={styles.mainContainer}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            experience.
          </div>
          <div className={styles.experienceContainer}>
            <ExperienceSection />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            projects.
          </div>
          <ProjectsSection />
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div >
  )
}
