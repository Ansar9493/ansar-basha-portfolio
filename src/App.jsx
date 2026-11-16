import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {

  
useEffect(() => {
  const ctx = gsap.context(() => {
    // Hero entrance animation
    gsap.from('.hero-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    })

    gsap.from('.hero-card', {
      opacity: 0,
      x: 60,
      duration: 1.2,
      delay: 0.2,
      ease: 'power3.out',
    })

    // Animate sections when they enter the screen
    gsap.utils.toArray('.section').forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    })
  })

  return () => ctx.revert()
}, [])


  return (
    <div className="portfolio">
      
<nav className="navbar">
  <a href="#home" className="logo">
    ANSAR<span>.</span>
  </a>

  <div className="nav-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#education">Education</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#contact" className="nav-contact">Let's Talk ↗</a>
  </div>
</nav>


      <main>
        
<section className="hero" id="home">
  <div className="hero-content">
    <p className="intro">HELLO, I'M</p>

    <h1>
      Ansar Basha<br />
      <span>Developer.</span>
    </h1>

    <p className="hero-description">
      I build modern web applications and explore the possibilities
      of Artificial Intelligence.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-button">
        Explore My Work
      </a>

      <a href="/resume.pdf" download className="secondary-button">
        Download Resume ↓
      </a>
    </div>
  </div>

  <div className="hero-card">
    <div className="profile-image-wrapper">
      <img
        src="/images/profile.png"
        alt="Ansar Basha"
        className="profile-image"
      />
    </div>

    <h2>Ansar Basha</h2>
    <p>Developer & AI Enthusiast</p>

    <div className="card-line"></div>

    <p className="card-footer">
      WEB DEVELOPMENT · AI · TECHNOLOGY
    </p>
  </div>
</section>


        
<section className="about section" id="about">
  <div className="about-layout">

    <div className="about-content">
      <p className="section-label">GET TO KNOW ME</p>

      <h2>
        Building Ideas Into
        <span className="heading-dot"> Digital Reality.</span>
      </h2>

      <p className="about-text">
        I'm Ansar Basha, a Computer Science Engineering student
        passionate about web development, software engineering,
        and Generative AI.
      </p>

      <p className="about-text">
        I enjoy transforming ideas into practical applications,
        experimenting with emerging technologies, and continuously
        improving my problem-solving skills.
      </p>

      <p className="about-text">
        My goal is to build intelligent, useful, and user-friendly
        digital solutions by combining full-stack development
        with Artificial Intelligence.
      </p>

      <a href="#contact" className="primary-button about-button">
        Let's Connect ↗
      </a>
    </div>

    <div className="about-highlights">

      <div className="about-highlight-card">
        <span className="highlight-icon">🎓</span>
        <div>
          <h3>Computer Science</h3>
          <p>B.Tech · Expected 2026</p>
        </div>
      </div>

      <div className="about-highlight-card">
        <span className="highlight-icon">💻</span>
        <div>
          <h3>Development</h3>
          <p>Web & Full-Stack Technologies</p>
        </div>
      </div>

      <div className="about-highlight-card">
        <span className="highlight-icon">✦</span>
        <div>
          <h3>Artificial Intelligence</h3>
          <p>Generative AI · LLMs · RAG</p>
        </div>
      </div>

      <div className="about-highlight-card">
        <span className="highlight-icon">🚀</span>
        <div>
          <h3>Career Focus</h3>
          <p>Software Development & AI</p>
        </div>
      </div>

    </div>
  </div>
</section>


        
<section className="section" id="skills">
  <p className="section-label">MY TECHNICAL TOOLKIT</p>
  <h2>Skills & Technologies<span className="heading-dot">.</span></h2>
  <p className="skills-description">
    Technologies and tools I use to build applications,
    explore AI, and solve real-world problems.
  </p>

  <div className="skills-grid">

    <div className="skill-category">
      <div className="skill-category-icon">⌘</div>
      <h3>Frontend Development</h3>
      <p>Building responsive and interactive user interfaces.</p>
      <div className="skill-tags">
        <span>HTML5</span>
        <span>CSS3</span>
        <span>JavaScript</span>
        <span>React.js</span>
        <span>Bootstrap</span>
      </div>
    </div>

    <div className="skill-category">
      <div className="skill-category-icon">⚙</div>
      <h3>Backend Development</h3>
      <p>Developing application logic and working with data.</p>
      <div className="skill-tags">
        <span>Python</span>
        <span>C</span>
        <span>C++</span>
        <span>Django</span>
        <span>SQL</span>
      </div>
    </div>

    <div className="skill-category">
      <div className="skill-category-icon">✦</div>
      <h3>AI & Generative AI</h3>
      <p>Building intelligent applications with modern AI tools.</p>
      <div className="skill-tags">
        <span>LangChain</span>
        <span>LLMs</span>
        <span>RAG</span>
        <span>Gemini API</span>
        <span>NumPy</span>
        <span>Pandas</span>
      </div>
    </div>

    <div className="skill-category">
      <div className="skill-category-icon">⌘</div>
      <h3>Tools & Platforms</h3>
      <p>Tools I use for development and automation.</p>
      <div className="skill-tags">
        <span>Git</span>
        <span>GitHub</span>
        <span>n8n</span>
        <span>Google Colab</span>
        <span>Stable Diffusion</span>
      </div>
    </div>

  </div>
</section>



<section className="section" id="education">
  <p className="section-label">MY ACADEMIC JOURNEY</p>
  <h2>Education<span className="heading-dot">.</span></h2>

  <div className="timeline">
    <div className="timeline-card">
      <span className="timeline-year">2022 — 2026</span>
      <h3>Bachelor of Technology — Computer Science</h3>
      <p className="timeline-place">
        Rayalaseema University College of Engineering
      </p>
      <p className="timeline-detail">
        Final-year B.Tech student focused on software development,
        web technologies, and Artificial Intelligence.
      </p>
      <span className="timeline-score">85%</span>
    </div>

    <div className="timeline-card">
      <span className="timeline-year">Diploma</span>
      <h3>Diploma — Electrical & Electronics Engineering</h3>
      <p className="timeline-place">Pulivendula</p>
      <p className="timeline-detail">
        Completed diploma studies in Electrical and Electronics Engineering.
      </p>
      <span className="timeline-score">85%</span>
    </div>

    <div className="timeline-card">
      <span className="timeline-year">School Education</span>
      <h3>Secondary School Certificate</h3>
      <p className="timeline-place">Sri Vikas High School</p>
      <p className="timeline-detail">
        Completed secondary school education.
      </p>
      <span className="timeline-score">10 CGPA</span>
    </div>
  </div>
</section>



<section className="section" id="experience">
  <p className="section-label">WHERE I'VE GAINED EXPERIENCE</p>
  <h2>Experience<span className="heading-dot">.</span></h2>

  <div className="timeline">
    <div className="timeline-card">
      <span className="timeline-year">Mentorship Experience</span>
      <h3>IoT Project Mentor</h3>
      <p className="timeline-place">StemBot Solutions</p>
      <p className="timeline-detail">
        Mentored government school students through Atal Tinkering
        Labs, guiding them in IoT concepts, project development,
        and hands-on technology activities.
      </p>
    </div>

    <div className="timeline-card">
      <span className="timeline-year">Technical Training</span>
      <h3>Electrical Substation Training Intern</h3>
      <p className="timeline-place">
        Government Electrical Substation
      </p>
      <p className="timeline-detail">
        Gained practical exposure to electrical substation
        operations, equipment, and power distribution systems.
      </p>
    </div>
  </div>
</section>



<section className="section" id="certifications">
  <p className="section-label">MY ACHIEVEMENTS</p>
  <h2>Certifications<span className="heading-dot">.</span></h2>
  <p className="skills-description">
    Courses and training programs that helped me strengthen
    my technical skills.
  </p>

  <div className="certifications-grid">
    <div className="certification-card">
      <div className="certification-icon">✦</div>
      <span className="certification-type">INTERNSHIP</span>
      <h3>Data Science Internship</h3>
      <p className="certification-provider">PySpiders</p>
      <p className="certification-description">
        Practical learning experience in Data Science and
        related technical concepts.
      </p>
    </div>

    <div className="certification-card">
      <div className="certification-icon">⌘</div>
      <span className="certification-type">COURSE CERTIFICATE</span>
      <h3>Web Development</h3>
      <p className="certification-provider">NxtWave</p>
      <p className="certification-description">
        Training in HTML, CSS, and JavaScript fundamentals
        for building web applications.
      </p>
    </div>
  </div>
</section>

        
  

<section className="section" id="projects">
  <p className="section-label">SELECTED WORK</p>
  <h2>Featured Projects<span className="heading-dot">.</span></h2>

  <p className="projects-intro">
    A selection of projects where I apply software development,
    automation, and Generative AI to solve practical problems.
  </p>

  <div className="projects-grid">

    <div className="project-card">
      <div className="project-top">
        <span className="project-number">01</span>
        <span className="project-type">AI AGENT</span>
      </div>

      <h3>SkillMap-Agent</h3>

      <p>
        An AI-powered career intelligence agent that researches
        industry skills and discovers relevant job opportunities
        in India.
      </p>

      <div className="project-tags">
        <span>Python</span>
        <span>LangChain</span>
        <span>Gemini</span>
        <span>Tavily</span>
        <span>JSearch</span>
      </div>

      <a
        href="https://github.com/Ansar9493/SkillMap-Agent"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        Explore Project <span>↗</span>
      </a>
    </div>

    <div className="project-card">
      <div className="project-top">
        <span className="project-number">02</span>
        <span className="project-type">GENERATIVE AI</span>
      </div>

      <h3>Document-Based AI Chatbot</h3>

      <p>
        A Retrieval-Augmented Generation chatbot that retrieves
        relevant information from documents and generates
        context-based answers.
      </p>

      <div className="project-tags">
        <span>Python</span>
        <span>LangChain</span>
        <span>Gemini</span>
        <span>ChromaDB</span>
        <span>RAG</span>
      </div>

      <span className="project-status">AI Application</span>
    </div>

    <div className="project-card">
      <div className="project-top">
        <span className="project-number">03</span>
        <span className="project-type">AI AUTOMATION</span>
      </div>

      <h3>LinkedIn Content Automation</h3>

      <p>
        An n8n automation workflow that summarizes articles,
        creates LinkedIn posts, generates images using Stable
        Diffusion, and automates publishing.
      </p>

      <div className="project-tags">
        <span>n8n</span>
        <span>Gemini API</span>
        <span>Stable Diffusion</span>
        <span>API Integration</span>
      </div>

      <span className="project-status">Automation Workflow</span>
    </div>

    <div className="project-card">
      <div className="project-top">
        <span className="project-number">04</span>
        <span className="project-type">CYBERSECURITY</span>
      </div>

      <h3>PhishNetra</h3>

      <p>
        A multi-layer intelligent email phishing detection
        system designed to identify suspicious emails,
        malicious URLs, and potential phishing threats.
      </p>

      <div className="project-tags">
        <span>Python</span>
        <span>Machine Learning</span>
        <span>Cybersecurity</span>
        <span>Email Security</span>
      </div>

      <span className="project-status">Final Year Project</span>
    </div>

  </div>
</section>




        
<section className="section contact" id="contact">
  <p className="section-label">LET'S WORK TOGETHER</p>

  <div className="contact-content">
    <h2>
      Have a project in mind?
      <span className="heading-dot"> Let's talk.</span>
    </h2>

    <p className="contact-description">
      I'm always interested in learning, collaborating, and
      building meaningful projects with technology.
      Feel free to reach out!
    </p>

    <a
      href="mailto:ansargajula7@gmail.com"
      className="primary-button contact-button"
    >
      Say Hello ↗
    </a>

    <div className="contact-links">
      <a href="https://linkedin.com/in/ansar-basha-gajula/"
         target="_blank" rel="noreferrer">
        LinkedIn ↗
      </a>

      <a href="https://github.com/Ansar9493"
         target="_blank" rel="noreferrer">
        GitHub ↗
      </a>

      <a href="mailto:ansargajula7@gmail.com">
        Email ↗
      </a>
    </div>
  </div>
</section>


        <div className="social-links">
          <a
            href="https://github.com/Ansar9493"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com/in/ansar-basha-gajula/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

      </main>

      
<footer className="footer">
  <p>Designed & Built by <span>Ansar Basha</span></p>
  <p className="footer-note">
    © {new Date().getFullYear()} Ansar Basha. All rights reserved.
  </p>
</footer>

    </div>
  )
}

export default App
