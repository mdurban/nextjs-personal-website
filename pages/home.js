import Head from 'next/head'
import Link from 'next/link'

import styles from './home.module.css'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Michael Urban
          </h1>
          {/* <div className={styles.heroTitle}>Making money easy</div> */}
          <div className={styles.heroSubtitle}>
            After robots take over the world, our code will be the last evidence of human existence.
          </div>
          <br />
          <div className={styles.heroSubtitle}>
            So it better be good.
          </div>
        </div>
      </div>

      <main>
        <div>
          Take a look at some of my work.
        </div>
        <div className={styles.projects}>

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
              <img className={styles.workImage} src="/oil-map.png" alt="Vercel Logo" />
            </div>
            <div className={styles.projectDescription}>
              <div className={styles.projectTitle}>Oil Well Efficiency Dashboard</div>
              <div className={styles.projectSubTitle}>Data visualization dashboard that helps client view status, efficiency and operating cost of gas and oil wells across the country</div>
              <div className={styles.projectSubTitle}><span className={styles.descriptionLeader}>Tech Stack: </span>React, Redux, MaterialUI</div>
            </div>
          </div>

          <div className={styles.projectContainer}>
            <div className={styles.projectDescription}>
              <div className={styles.projectTitle}>Real Estate Auction Prototype</div>
              <div className={styles.projectSubTitle}>Helped develop mobile application prototype that secured first round of funding for real estate startup.</div>
              <div className={styles.projectSubTitle}>The prototype was used by the company to show investors what functions they were planning on developing.</div>
              <div className={styles.projectSubTitle}>It hooked into an in-house cryptocurrency application to allow users to bid on real estate property using digital currency.</div>
              <div className={styles.projectSubTitle}><span className={styles.descriptionLeader}>Tech Stack: </span>React, Redux, MaterialUI, styled components</div>
            </div>
            <div className={styles.sideBySideImages}>
              <img className={styles.singleImage} src="/prototype-1.png" alt="Vercel Logo" />
              <img className={styles.singleImage} src="/prototype-2.png" alt="Vercel Logo" />
            </div>
          </div>

          <div className={styles.projectContainer}>
            <div className={styles.projectImages}>
              <img className={styles.workImage} src="/reps.png" alt="Vercel Logo" />
            </div>
            <div className={styles.projectDescription}>
              <div className={styles.projectTitle}>Representatives Finder Website</div>
              <div className={styles.projectSubTitle}>Website that helps users search for their representatives based on their location. Gives information for city level officials up to federal.</div>
              <div className={styles.projectSubTitle}><span className={styles.descriptionLeader}>Tech Stack: </span>React, Redux, SASS</div>
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
          <div>Website handcrafted by <span className={styles.footerHighlight}>me</span> specifically for <span className={styles.footerHighlight}>you</span>.</div>
          <div>Built using React and Next.js</div>
          <div>
            Find my code on <a className={styles.iconLink} href='https://www.github.com/mdurban' target='_blank'><img src="/github-logo.png" alt="Github Logo" className="logo" /></a>
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

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #e2e2e2;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #e2e2e2;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
