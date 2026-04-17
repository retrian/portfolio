import { useEffect, useState } from 'react'
import cwfLogo from './assets/cwf_logo.jpg'
import masterwordLogo from './assets/masterword_services_logo.jpg'
import profilePicture from './assets/profile picture.webp'
import wellboreLogo from './assets/wellbore_integrity_solutions_logo.jpg'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

const navItems = [
  { label: 'home', href: '#home' },
  { label: 'about', href: '#about' },
  { label: 'career', href: '#career' },
  { label: 'papers', href: '#papers' },
  { label: 'projects', href: '#projects' },
  { label: 'coursework', href: '#coursework' },
]

const careerItems = [
  {
    company: 'CWF.LOL',
    location: 'Houston, TX',
    title: 'Product Analyst & Developer',
    period: 'Jun 2025 - Present',
    logo: cwfLogo,
    logoAlt: 'CWF.LOL logo',
    skills: [
      'PostgreSQL',
      'TypeScript',
      'Riot API',
      'Data Modeling',
      'Product Analysis',
    ],
    description:
      'At CWF.LOL, I launched and supported a competitive gaming platform that combined analytics, leaderboards, clubs, and tournaments into one user experience. I used PostgreSQL/SQL to structure and manage platform data, TypeScript to build and maintain core site functionality, and Riot APIs to pull and organize player and match data for rankings, reporting, and performance tracking. I also coordinated data updates, reporting logic, and platform improvements to strengthen usability, improve information accuracy, and create a more reliable analytics experience. During beta launch, I used usage patterns and user feedback to refine features, helping the platform reach about 100 monthly visitors and 2,000 page views.',
  },
  {
    company: 'MASTERWORD',
    location: 'Houston, TX',
    title: 'Intern / Data Analyst',
    period: 'Jun 2024 - Feb 2025',
    logo: masterwordLogo,
    logoAlt: 'MasterWord logo',
    skills: [
      'Power BI',
      'Excel',
      'KPI Tracking',
      'Workforce Analytics',
      'Process Improvement',
    ],
    description:
      'At MasterWord, I supported operational and workforce analysis by reviewing roughly 10,000 call logs each month to identify irregularities, flag potential billing abuse, and improve oversight of interpreter activity. I built Power BI dashboards tracking utilization, call duration, and throughput to support staffing decisions, workflow planning, and reporting visibility. I also managed an Excel spreadsheet focused on employee time utilization, helping organize and monitor workforce data more effectively. In addition, I partnered with Talent Acquisition on funnel reporting and process tracking, contributing to a 45% reduction in time-to-hire from 21 to 12 days.',
  },
  {
    company: 'WELLBORE INTEGRITY SOLUTIONS',
    location: 'Houston, TX',
    title: 'CNC Mill Machinist',
    period: 'Jun 2023 - Aug 2023',
    logo: wellboreLogo,
    logoAlt: 'Wellbore Integrity Solutions logo',
    skills: [
      'Quality Control',
      'SPC Data',
      'Production Metrics',
      'Tolerance Checks',
      'Process Improvement',
    ],
    description:
      'At Wellbore Integrity Solutions, I worked as a machinist producing metal parts used in oilfield operations by setting up materials, operating CNC equipment, and following production plans to ensure each part was made to specification. My work included placing raw metal blocks into the machine, running programmed jobs, changing parts and tooling as needed, and checking finished pieces against required measurements and tolerances. I also documented basic SPC and production data, tracked cycle time, scrap, and rework, and worked with supervisors on small process improvements to support quality, accuracy, and compliance.',
  },
]

const papers = [
  {
    title: 'Minimum Wage and Business Impact',
    meta: 'Dec 2024',
    href: `${baseUrl}Minimum%20Wage%20and%20Business%20Impact.pdf`,
    summary:
      'This paper analyzes how minimum wage increases affect employment, pricing, and business stability, finding that smaller and family-owned businesses face greater strain than larger firms.',
  },
  {
    title: 'International Institutions and Climate Economics',
    meta: 'Dec 2023',
    href: `${baseUrl}Utilizing%20International%20Economic%20Institutions%20to%20Curb%20Economic%20Impacts%20of%20Climate%20Change%20FINAL%20PAPER.pdf`,
    summary:
      'This paper analyzes the effectiveness of the IMF and United Nations in mitigating the economic effects of climate change and finds that stronger policy mechanisms, enforcement tools, and climate-linked financial reforms are needed to improve outcomes.',
  },
]

const projects = [
  {
    title: 'Regression Analysis of Minimum Wage',
    stack: 'R / SQL / Power BI',
    accent: 'RM',
    href: `${baseUrl}minimum-wage.html`,
    description:
      'Used SQL to organize and query data, R to clean the dataset and run multivariate regression analysis, and Power BI to visualize findings on employment, pricing, and business outcomes.',
  },
  {
    title: 'Aggie Tracker',
    stack: 'JS / SQL / CSS',
    accent: 'AT',
    href: `${baseUrl}aggie-tracker.html`,
    description:
      'Developed a player analytics website using JavaScript, SQL, and CSS to track performance across ~130 players and ~33,000 matches over 6 months. Built a leaderboard and structured match database, while automating KPI refreshes to improve reporting, surface trends, and support clearer performance analysis.',
  },
]

const coursework = [
  'POLS 447 - National Security Policy',
  'POLS 412 - International Political Economy',
  'FINC 409 - Finance Principles',
  'MKTG 409 - Principles of Marketing',
  'POLS 340 - Public Administration',
  'POLS 309 - Polimetrics',
  'POLS 308 - Game Theoretic Methods',
  'MGMT 309 - Survey of Management',
  'CSCE 222 - Discrete Structures',
  'ACCT 209 - Accounting Principles',
  'POLS 209 - Political Research Methods',
  'ISTM 209 - Business Information System',
  'MGMT 209 - Business Regulations & Law',
  'ECON 203 - Principles of Economics',
]

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.17 3 3.5 3.72 3.5 4.66c0 .92.65 1.66 1.71 1.66h.02c1.11 0 1.79-.74 1.79-1.66C6.99 3.72 6.34 3 5.25 3ZM20.5 12.65c0-3.53-1.88-5.17-4.39-5.17-2.02 0-2.92 1.11-3.42 1.89V8.5H9.31c.04.57 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.13-.92.27-.68.88-1.39 1.9-1.39 1.34 0 1.87 1.03 1.87 2.55V20H20.5v-7.35Z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.09 3.3 9.4 7.88 10.92.58.1.79-.25.79-.56 0-.28-.01-1.2-.02-2.18-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.17a10.98 10.98 0 0 1 5.76 0c2.19-1.48 3.16-1.17 3.16-1.17.63 1.59.24 2.76.12 3.05.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.75-.01 3.13 0 .31.21.67.8.55A11.53 11.53 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5.5h18A1.5 1.5 0 0 1 22.5 7v10A1.5 1.5 0 0 1 21 18.5H3A1.5 1.5 0 0 1 1.5 17V7A1.5 1.5 0 0 1 3 5.5Zm0 1.7V7l9 6.25L21 7v.2l-8.57 5.95a.75.75 0 0 1-.86 0L3 7.2Zm18 9.6V8.9l-8.14 5.65a2.25 2.25 0 0 1-2.57 0L3 8.9v7.9h18Z" />
    </svg>
  )
}

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 17.25a.74.74 0 0 1-.53-.22l-6-6a.75.75 0 1 1 1.06-1.06L12 15.44l5.47-5.47a.75.75 0 0 1 1.06 1.06l-6 6a.74.74 0 0 1-.53.22Z" />
    </svg>
  )
}

function App() {
  const [isNavVisible, setIsNavVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollY

      if (currentScrollY <= 24) {
        setIsNavVisible(true)
      } else if (scrollDelta > 6) {
        setIsNavVisible(false)
      } else if (scrollDelta < -6) {
        setIsNavVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="app-shell">
      <header className={`site-header ${isNavVisible ? 'site-header-visible' : 'site-header-hidden'}`}>
        <div className="site-header-inner">
          <a className="brand" href="#home">
            <span className="brand-mark" aria-hidden="true">
              //
            </span>{' '}
            Ian Torres
          </a>

          <nav className="site-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <h1>
              <span>Hello,</span>
              <span>I'm Ian</span>
              <span>Welcome to my Portfolio!</span>
            </h1>

            <div className="social-links" aria-label="Social links">
              <a href="https://www.linkedin.com/in/ianctorres/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://github.com/retrian" target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href="mailto:ianctorress@gmail.com" aria-label="Email">
                <MailIcon />
              </a>
              <a
                className="resume-button"
                href={`${baseUrl}Ian-Torres-Resume.pdf`}
                target="_blank"
                rel="noreferrer"
                aria-label="Resume"
              >
                resume
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="portrait-ring">
              <div className="portrait-card">
                <img src={profilePicture} alt="" />
              </div>
            </div>
          </div>

          <a className="scroll-indicator" href="#about" aria-label="Scroll to about section">
            <ArrowDownIcon />
          </a>
        </section>

        <section className="content-section about-section" id="about">
          <div className="section-heading">
            <p className="section-label">about me</p>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I am a recent Texas A&M graduate with a background in Political Science and
                Business, and I have developed a strong interest in analytical work through
                both professional experience and independent projects. My path into analysis
                came from enjoying work that required structure, problem solving, and
                attention to detail, whether that meant reviewing large sets of records,
                building dashboards, tracking performance, or organizing information in a
                way that others could act on. Over time, I found that I was most interested
                in roles where I could take complex information, make sense of it, and use
                it to support better decisions.
              </p>

              <p>
                My experience has exposed me to different sides of analytical work,
                including operations, reporting, workforce data, process tracking, and
                platform analytics. From reviewing call logs and monitoring utilization data
                at MasterWord, to building data-driven tools and reporting systems through
                personal projects, I have continued to strengthen my ability to work with
                information in a practical and results-focused way. I am especially drawn to
                analyst roles because they combine critical thinking, organization, and
                problem solving in a way that creates real value.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section" id="career">
          <div className="section-heading">
            <p className="section-label">career</p>
          </div>

          <div className="stack-list career-list">
            {careerItems.map((item) => (
              <article className="info-card career-card" key={item.title + item.company}>
                <div className="career-company-row">
                  <div className="career-company-brand">
                    <img src={item.logo} alt={item.logoAlt} className="career-logo" />
                    <h3>{item.company}</h3>
                  </div>
                  <span>{item.location}</span>
                </div>

                <div className="career-role-row">
                  <p className="career-role">{item.title}</p>
                  <p className="muted-text">{item.period}</p>
                </div>

                {item.description ? (
                  <p className="career-description">{item.description}</p>
                ) : (
                  <ul className="career-bullets">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}

                <div className="career-skills">
                  {item.skills.map((skill) => (
                    <span className="career-skill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="papers">
          <div className="section-heading">
            <p className="section-label">papers</p>
          </div>

          <div className="papers-list">
            {papers.map((paper) => (
              <article className="paper-row" key={paper.title}>
                <span className="paper-bullet" aria-hidden="true"></span>
                <div className="paper-card">
                  <div className="paper-title-row">
                    <h3>
                      <a href={paper.href} target="_blank" rel="noreferrer">
                        {paper.title}
                      </a>
                    </h3>
                    <span>{paper.meta}</span>
                  </div>
                  <p>{paper.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-heading">
            <div className="section-heading-inline">
              <p className="section-label">projects</p>
              <p className="section-note">(click for more info)</p>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <a className="project-card" key={project.title} href={project.href}>
                <div className="project-visual" aria-hidden="true">
                  <span>{project.accent}</span>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.stack.split(' / ').map((item) => (
                      <span className="project-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="content-section" id="coursework">
          <div className="section-heading">
            <p className="section-label">relevant coursework</p>
          </div>

          <div className="coursework-list">
            {coursework.map((item) => (
              <div className="coursework-row" key={item}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
