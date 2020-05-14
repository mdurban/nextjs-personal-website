import Head from 'next/head'
import styles from './home.module.css'
import Experience from '../components/experience';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Michael Urban</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
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
              <span className={styles.descriptionLeader}> So it better be good.</span><span className={styles.blinkingCursor}>|</span>
            </div>
          </div>
        </div>
        <img className={styles.headerImage} src='/robot-friends.jpg'></img>
      </div>

      <main className={styles.mainContainer}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            experience.
          </div>
          <div className={styles.experienceContainer}>
            <Experience />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            projects.
          </div>
          <div className={styles.projectContainer}>
            <div className={styles.projectDescription}>
              <div className={styles.projectTitle}>MoneyForNoobs</div>
              <div className={styles.projectSubTitle}>When I tried learning the basics of finances, I was frustrated at how confusing it was. I had a difficult time finding any blog posts or podcasts aimed at people who knew nothing and I found myself lost in sea of cryptic mathematical equations and unfamiliar lingo. The basics of money is something that I feel everyone should know, yet it feels so hard to learn.</div>
              <div className={styles.projectSubTitle}>My goal is to create a blog where people can start learning the basics in an accessible way. I want to have a place where people who know nothing about finances will feel welcome and not overwhelmed.</div>
              <div className={styles.projectSubTitle}><span className={styles.descriptionLeader}>Tech Stack: </span>React, Redux, SASS, Gatsby</div>

            </div>
            <div className={styles.projectImages} >
              <a href='https://www.moneyfornoobs.com' target='_blank'>
                <img className={styles.workImage} src="/mfn-desktop-full.png" alt="Vercel Logo" />
              </a>
            </div>
          </div>

          <div className={styles.projectContainer}>
            <div className={styles.projectImages}>
              <a href='https://rubygems.org/gems/rspec-bash/versions/0.1.0' target='_blank'>
                <img className={styles.workImage} src="/rspec-bash.png" alt="Vercel Logo" />
              </a>
            </div>
            <div className={styles.projectDescription}>
              <div className={styles.projectTitle}>rspec-bash (Bash Testing Library)</div>
              <div className={styles.projectSubTitle}>Co-author of rspec-bash, an open-source Ruby gem that provides a framework for unit testing bash code.</div>
              <div className={styles.projectSubTitle}><span className={styles.descriptionLeader}>Tech Stack: </span>Bash, Ruby</div>
            </div>
          </div>

          <div className={styles.projectContainer}>
            <div className={styles.projectDescription}>
              <div className={styles.projectTitle}>Representatives Finder Website</div>
              <div className={styles.projectSubTitle}>Website that helps users search for their representatives based on their location. Gives information for city level officials up to federal.</div>
              <div className={styles.projectSubTitle}><span className={styles.descriptionLeader}>Tech Stack: </span>React, Redux, SASS</div>
            </div>
            <div className={styles.projectImages}>
              <a href='https://luiscarlin.github.io/representatives/' target='_blank'>
                <img className={styles.workImage} src="/reps.png" alt="Vercel Logo" />
              </a>
            </div>
          </div>

          <div className={styles.projectContainer}>
            <div className={styles.sideBySideImages}>
              <img className={styles.singleImage} src="/prototype-1.png" alt="Vercel Logo" />
              <img className={styles.singleImage} src="/prototype-2.png" alt="Vercel Logo" />
            </div>
            <div className={styles.projectDescription}>
              <div className={styles.projectTitle}>Real Estate Auction Prototype</div>
              <div className={styles.projectSubTitle}>Helped develop mobile application prototype that secured first round of funding for real estate startup.</div>
              <div className={styles.projectSubTitle}>The prototype was used by the company to show investors what functions they were planning on developing.</div>
              <div className={styles.projectSubTitle}>It hooked into an in-house cryptocurrency application to allow users to bid on real estate property using digital currency.</div>
              <div className={styles.projectSubTitle}><span className={styles.descriptionLeader}>Tech Stack: </span>React, Redux, MaterialUI, styled components</div>
            </div>
          </div>
        </div>
      </main>

      <footer>
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

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #e2e2e2;
          padding-top: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          text-decoration: none;
        }


        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

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
