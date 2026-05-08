import React from "react";
import TypewriterText from "../components/TypewriterText";
import PortfolioSection from "../components/PortfolioSection";

const cv = (vars: Record<string, string>) =>
  vars as unknown as React.CSSProperties;

export default function Home() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="tmp-header-area-start header-one header--sticky header--transparent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-content">
                <div className="logo">
                  <a href="/">
                    <img className="logo-dark" src="/assets/images/logo/white-logo.png" alt="Tabeen Haider - Web Developer" />
                    <img className="logo-white" src="/assets/images/logo/white-logo.png" alt="Tabeen Haider - Web Developer" />
                  </a>
                </div>
                <div className="tmp-mainmenu-nav d-none d-xl-block">
                  <nav className="navbar-example2 onepagenav">
                    <div className="custom-nav-pill">
                      <ul className="tmp-mainmenu nav nav-pills">
                        <li className="current"><a className="smoth-animation" href="#home">Home</a></li>
                        <li className="nav-item"><a className="smoth-animation" href="#about">About</a></li>
                        <li className="nav-item"><a className="smoth-animation" href="#service">Services</a></li>
                        <li className="nav-item"><a className="smoth-animation" href="#resume">Skills</a></li>
                        <li className="nav-item"><a className="smoth-animation" href="#journey">Journey</a></li>
                        <li className="nav-item"><a className="smoth-animation" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="smoth-animation" href="#contacts">Contact</a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="tmp-header-right">
                  <div className="social-share-wrapper d-none d-md-block">
                    <div className="social-link">
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      <a href="https://www.linkedin.com/in/tabeen-haider/"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="https://www.facebook.com/profile.php?id=100083396250503"><i className="fa-brands fa-facebook-f"></i></a>
                    </div>
                  </div>
                  <div className="tmp-side-collups-area d-block d-xl-none">
                    <button className="hamberger-menu humberger_menu_active">
                      <i id="menuBtn" className="fa-light fa-bars humberger-menu"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <div className="d-block d-xl-none">
        <div className="tmp-popup-mobile-menu">
          <div className="inner">
            <div className="header-top">
              <div className="logo">
                <a href="/" className="logo-area">
                  <img className="logo-dark" src="/assets/images/logo/white-logo-reeni.png" alt="logo" />
                  <img className="logo-white" src="/assets/images/logo/white-logo-reeni.png" alt="logo" />
                </a>
              </div>
              <div className="close-menu">
                <button className="close-button tmp-round-action-btn">
                  <i className="fa-sharp fa-light fa-xmark"></i>
                </button>
              </div>
            </div>
            <ul className="tmp-mainmenu onepagenav-click">
              <li><a className="smoth-animation" href="#home">Home</a></li>
              <li><a className="smoth-animation" href="#about">About</a></li>
              <li><a className="smoth-animation" href="#service">Services</a></li>
              <li><a className="smoth-animation" href="#portfolio">Portfolio</a></li>
              <li><a className="smoth-animation" href="#resume">Resume</a></li>
              <li><a className="smoth-animation" href="#journey">Journey</a></li>
              <li><a className="smoth-animation" href="#contacts">Contact</a></li>
            </ul>
            <div className="social-wrapper mt--40">
              <span className="subtitle">find with me</span>
              <div className="social-link">
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/tabeen-haider/"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BANNER ===== */}
      <div className="banner-area-one-main-demo tmp-section-gap shape-move" id="home">
        <div className="container">
          <div className="row align-items-center">
            {/* Left: text content */}
            <div className="col-lg-6 col-md-12">
              <div className="banner-hero-text">
                <span className="banner-hello-tag">HELLO</span>
                <h1 className="banner-name-heading">i&apos;m <span >Tabeen Haider</span></h1>
                <h2 className="banner-role-line">
                  A <TypewriterText />.
                </h2>
                <p className="banner-para">I craft exceptional digital experiences with modern technologies, building scalable applications from concept to deployment.</p>
               <div className="about-btn mt--40 tmp-scroll-trigger tmp-fade-in animation-order-6">
                      <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon" href="#portfolio">
                        <div className="icon-reverse-wrapper">
                          <span className="btn-text">View Portfolio</span>
                          <div className="btn-hack"></div>
                          <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                          <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                          <span className="btn-icon"><i className="fa-regular fa-arrow-right"></i></span>
                          <span className="btn-icon"><i className="fa-regular fa-arrow-right"></i></span>
                        </div>
                      </a>
                    </div>
              </div>
            </div>
            {/* Right: person + designation */}
            <div className="col-lg-6 col-md-12">
              <div className="banner-main-demo-inner-content">
                <img src="/assets/images/banner/user-compressed.png" alt="banner" className="main-demo" />
                <div className="absolute-designation">
                  <h2 className="up float-anim">{'Web Developer'}</h2>
                  <h2 className="down float-anim-slow">Designer</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tmp-banner-circle">
          <img className="tmp-banner-circle-1" src="/assets/images/banner/shape/01.svg" alt="circle-image" />
          <img className="tmp-banner-circle-2" src="/assets/images/banner/shape/02.svg" alt="circle-image" />
          <img className="tmp-banner-circle-3" src="/assets/images/banner/shape/03.svg" alt="circle-image" />
          <img className="tmp-banner-circle-4" src="/assets/images/banner/shape/04.svg" alt="circle-image" />
        </div>
        <div className="separator-animated-border border-top-footer animated-true"></div>
        <div className="slider-bg-light">
          <img className="blocksync-scroll-trigger fade_in animation-order-8" src="/assets/images/banner/shape/light.svg" alt="Top Light Shape" />
        </div>
        <div className="slider-bg-dot-shape">
          <div className="wrapper blocksync-scroll-trigger blocksync-stars-area fade_in animation-order-16">
            <div className="blocksync-stars"></div>
            <div className="blocksync-stars2"></div>
            <div className="blocksync-stars3"></div>
          </div>
        </div>
      </div>

      {/* ===== ABOUT ===== */}
      <section className="about-us-area tmp-section-gapBottom" id="about">
        {/* Section heading watermark */}
        <div className="about-section-heading">
          <span className="about-section-watermark" aria-hidden="true">ABOUT ME</span>
          <h2 className="about-section-title">About Me</h2>
          <div className="about-section-divider">
            <span className="about-section-divider-dot"></span>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center g-5 gy-5">
            {/* Left: avatar */}
            <div className="col-lg-5 col-md-12 d-flex justify-content-center">
              <div className="about-avatar-wrap">
                <div className="about-avatar-circle">
                  <img src="/assets/images/about/01(1).webp" alt="Tabeen Haider" />
                </div>
                <div className="about-float-badge about-badge-top">
                  <i className="fa-regular fa-code"></i>
                  <span>Developer</span>
                </div>
                <div className="about-float-badge about-badge-bottom">
                  <i className="fa-solid fa-graduation-cap"></i>
                  <span>CS Student</span>
                </div>
              </div>
            </div>
            {/* Right: info */}
            <div className="col-lg-7 col-md-12">
              <div className="about-info-wrap">
                <h2 className="about-greeting" style={{marginBottom:"18px"}}>Hey! I&apos;m <span className="about-name-highlight">Tabeen Haider</span></h2>
                <p className="about-bio">I&apos;m Tabeen Haider, a Web developer and Computer Science student with 4+ years of experience. I specialize in building clean, responsive, and dynamic websites using HTML, CSS, JavaScript, React, NextJs, PostgreSQL, Prisma and MongoDB.</p>
                <p className="about-bio">I&apos;m always leveling up my skills and currently diving deeper into backend and DevOps. Whether it&apos;s full-time or freelance, I&apos;m open to exciting opportunities where I can grow and build great stuff with amazing people.</p>
                <h4 className="about-sub-heading">What I Do</h4>
                <div className="about-skills">
                  <span className="about-skill-tag"><i className="fa-regular fa-display"></i> Frontend Development</span>
                  <span className="about-skill-tag"><i className="fa-regular fa-code"></i> Backend Development</span>
                  <span className="about-skill-tag"><i className="fa-solid fa-graduation-cap"></i> Computer Science</span>
                </div>
                <h4 className="about-sub-heading">Connect With Me</h4>
                <div className="about-socials">
                  <a className="about-social-icon" href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
                  <a className="about-social-icon" href="https://www.linkedin.com/in/tabeen-haider/" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a className="about-social-icon" href="https://www.facebook.com/profile.php?id=100083396250503" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  <a className="about-social-icon" href="mailto:iamtabeenhaider@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
                </div>
                <a className="about-resume-btn" href="#">View Resume</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <div className="tmp-service-area tmp-section-gapBottom" id="service">
        {/* Section heading watermark */}
        <div className="about-section-heading">
          <span className="about-section-watermark" aria-hidden="true">WHAT I DO</span>
          <h2 className="about-section-title">What I Do</h2>
          <div className="about-section-divider">
            <span className="about-section-divider-dot"></span>
          </div>
        </div>
        <div className="container">
          <div className="about-us-section-card row g-5 animation-action-2">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 paralax-image">
              <div className="about-us-card tmp-scroll-trigger tmponhover single-animation active tmp-fade-in animation-order-4" style={cv({'--x': '153px', '--y': '11px'})}>
                <div className="card-head">
                  <div className="logo-img"><i className="fa-brands fa-wordpress"></i></div>
                  <h3 className="card-title">Custom WordPress Solutions</h3>
                </div>
                <p className="card-para">Delivering fast, secure, and fully customized WordPress static sites tailored to your business needs, ensuring a robust and easily manageable online presence.</p>
                <div className="tmp-light light-center"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 paralax-image">
              <div className="about-us-card tmp-scroll-trigger tmponhover single-animation tmp-fade-in animation-order-5" style={cv({'--x': '193px', '--y': '152px'})}>
                <div className="card-head">
                  <div className="logo-img"><i className="fa-regular fa-layer-group"></i></div>
                  <h3 className="card-title">Enterprise Portals &amp; Next.js</h3>
                </div>
                <p className="card-para">Architecting high-performance static websites and large-scale, complex web portals using Next.js. Built for exceptional speed, SEO optimization, and seamless user experiences at scale.</p>
                <div className="tmp-light light-center"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 paralax-image">
              <div className="about-us-card tmp-scroll-trigger tmponhover single-animation tmp-fade-in animation-order-4" style={cv({'--x': '339px', '--y': '-1px'})}>
                <div className="card-head">
                  <div className="logo-img"><i className="fa-regular fa-cubes"></i></div>
                  <h3 className="card-title">SaaS Product Engineering</h3>
                </div>
                <p className="card-para">End-to-end development of comprehensive Software-as-a-Service (SaaS) platforms, transforming complex business requirements into intuitive, scalable, and market-ready products.</p>
                <div className="tmp-light light-center"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 paralax-image">
              <div className="about-us-card tmp-scroll-trigger tmponhover single-animation tmp-fade-in animation-order-5" style={cv({'--x': '15px', '--y': '61px'})}>
                <div className="card-head">
                  <div className="logo-img"><i className="fa-regular fa-microchip-ai"></i></div>
                  <h3 className="card-title">AI-Integrated Web Applications</h3>
                </div>
                <p className="card-para">Building next-generation, modern web apps powered by cutting-edge AI integrations. Designed to automate workflows and deliver intelligent, dynamic user experiences.</p>
                <div className="tmp-light light-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== COUNTER ===== */}
      <div className="counter-funfacts-area tmp-section-gapBottom">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="counter-card tmp-scroll-trigger tmp-fade-in tmponhover animation-order-1">
                <h3 className="counter counter-title"><span className="odometer" data-count="4">0</span>+</h3>
                <p className="counter-para">Years of Experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="counter-card tmp-scroll-trigger tmp-fade-in tmponhover animation-order-2">
                <h3 className="counter counter-title"><span className="odometer" data-count="50">0</span>+</h3>
                <p className="counter-para">Projects Completed</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="counter-card tmp-scroll-trigger tmp-fade-in tmponhover animation-order-3">
                <h3 className="counter counter-title"><span className="odometer" data-count="30">0</span>+</h3>
                <p className="counter-para">Satisfied Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="counter-card tmp-scroll-trigger tmp-fade-in tmponhover animation-order-4">
                <h3 className="counter counter-title"><span className="odometer" data-count="30">0</span>+</h3>
                <p className="counter-para">Technologies Mastered</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SKILLS ===== */}
      <section className="skills-expertise-area " id="resume">
        <div className="about-section-heading">
          <span className="about-section-watermark" aria-hidden="true">SKILLS</span>
          <h2 className="about-section-title">Skills &amp; Expertise</h2>
          <div className="about-section-divider">
            <span className="about-section-divider-dot"></span>
          </div>
        </div>
        <div className="container">
          <p className="skills-description mb-8">From frontend frameworks to backend technologies, these are the tools I use<br className="d-none d-md-block" /> to craft exceptional digital experiences and solve complex problems.</p>
        </div>
        <div className="skills-marquee-wrapper">
          {[
            {
              dir: 'left',
              skills: [
                { icon: 'fa-brands fa-wordpress',  label: 'WordPress',     color: '#21759B' },
                { icon: 'fa-brands fa-html5',       label: 'HTML5',         color: '#E34F26' },
                { icon: 'fa-brands fa-css3-alt',    label: 'CSS3',          color: '#1572B6' },
                { icon: 'fa-brands fa-js',          label: 'JavaScript',    color: '#F7DF1E' },
                { icon: 'fa-solid fa-code',         label: 'TypeScript',    color: '#3178C6' },
                { icon: 'fa-brands fa-react',       label: 'React',         color: '#61DAFB' },
                { icon: 'fa-solid fa-layer-group',  label: 'Next.JS',       color: '#ffffff' },
                { icon: 'fa-brands fa-node-js',     label: 'Node.JS',       color: '#68A063' },
                { icon: 'fa-brands fa-docker',      label: 'Docker',        color: '#2496ED' },
                { icon: 'fa-brands fa-git-alt',     label: 'Git',           color: '#F05032' },
                { icon: 'fa-brands fa-bootstrap',   label: 'Bootstrap',     color: '#7952B3' },
                { icon: 'fa-solid fa-database',     label: 'MySQL',         color: '#4479A1' },
                { icon: 'fa-solid fa-database',     label: 'PostgreSQL',    color: '#336791' },
              ],
            },
            {
              dir: 'right',
              skills: [
                { icon: 'fa-brands fa-github',      label: 'GitHub',        color: '#ffffff' },
                { icon: 'fa-solid fa-bolt',         label: 'Vite.JS',       color: '#646CFF' },
                { icon: 'fa-brands fa-figma',       label: 'Figma',         color: '#F24E1E' },
                { icon: 'fa-brands fa-linux',       label: 'Linux',         color: '#FCC624' },
                { icon: 'fa-brands fa-microsoft',   label: 'VS Code',       color: '#007ACC' },
                { icon: 'fa-solid fa-wind',         label: 'Tailwind CSS',  color: '#06B6D4' },
                { icon: 'fa-solid fa-cube',         label: 'Prisma',        color: '#5a67d8' },
                { icon: 'fa-solid fa-palette',      label: 'Material UI',   color: '#007FFF' },
                { icon: 'fa-solid fa-vector-square',label: 'Framer',        color: '#0055FF' },
                { icon: 'fa-solid fa-cloud-arrow-up', label: 'Vercel',      color: '#ffffff' },
                { icon: 'fa-solid fa-cloud',        label: 'Netlify',       color: '#00C7B7' },
                { icon: 'fa-solid fa-server',       label: 'Coolify',       color: '#6C47FF' },
                { icon: 'fa-brands fa-font-awesome',label: 'FontAwesome',   color: '#528DD7' },
              ],
            },
            {
              dir: 'left',
              skills: [
                { icon: 'fa-solid fa-paper-plane',  label: 'Postman',       color: '#FF6C37' },
                { icon: 'fa-brands fa-meta',        label: 'META',          color: '#0467DF' },
                { icon: 'fa-solid fa-vector-square',  label: 'Framer Motion', color: '#BB22CC' },
                { icon: 'fa-solid fa-fire',         label: 'Firebase',      color: '#FFCA28' },
                { icon: 'fa-solid fa-leaf',         label: 'Supabase',      color: '#3ECF8E' },
                { icon: 'fa-brands fa-stripe',      label: 'Stripe',        color: '#635BFF' },
                { icon: 'fa-brands fa-aws',         label: 'AWS',           color: '#FF9900' },
                { icon: 'fa-solid fa-credit-card',  label: 'PayFast',       color: '#1A82E2' },
                { icon: 'fa-solid fa-hashtag',      label: 'C#',            color: '#239120' },
                { icon: 'fa-solid fa-diagram-project', label: 'n8n',        color: '#EA4B71' },
                { icon: 'fa-solid fa-briefcase',    label: 'Zoho',          color: '#E42527' },
                { icon: 'fa-brands fa-microsoft',   label: 'MS Office',     color: '#D83B01' },
                { icon: 'fa-brands fa-cloudflare',  label: 'CloudFlare',    color: '#F38020' },
              ],
            },
          ].map((row, rowIdx) => (
            <div key={rowIdx} className={`skills-marquee-track skills-track-${row.dir}`}>
              {[...row.skills, ...row.skills].map((skill, i) => (
                <span key={i} className="skill-pill">
                  <i className={skill.icon} style={{color: skill.color}}></i>
                  {skill.label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ===== MY JOURNEY ===== */}
      <section className="journey-section tmp-section-gap" id="journey">
        <div className="container">
          <div className="about-section-heading mb--60">
            <span className="about-section-watermark" aria-hidden="true">MY STORY</span>
            <p className="journey-eyebrow">THE STORY SO FAR</p>
            <h2 className="journey-title">MY <span className="journey-title-accent">JOURNEY</span></h2>
            <div className="about-section-divider">
              <span className="about-section-divider-dot"></span>
            </div>
          </div>
          <div className="journey-timeline">
            {/* Empty track */}
            <div className="journey-track"></div>
            {/* Fill — height driven by scroll JS */}
            <div className="journey-fill" id="journeyFill">
              <div className="journey-fill-glow" id="journeyGlow"></div>
            </div>
            {[
              { year: '2022', icon: 'fa-solid fa-code',          title: 'The Curiosity Phase',      desc: 'Discovered the world of web development. Started with HTML, CSS, and JavaScript fundamentals. Built my first static websites and fell in love with creating things for the web.' },
              { year: '2024', icon: 'fa-solid fa-graduation-cap', title: 'Engineering Foundation',   desc: 'Started B.Tech in Information Technology. Diving deep into data structures, algorithms, and software engineering principles. Building full-stack applications with React, Node.js, and databases.' },
              { year: '2025', icon: 'fa-solid fa-briefcase',      title: 'Product Builder',          desc: 'Launched ThinkVerse — a SaaS platform for structured idea management. Learned product development, user experience design, and the importance of shipping real products to real users.' },
              { year: '2026', icon: 'fa-solid fa-robot',          title: 'AI Development',           desc: 'Currently building Devory, an AI-driven platform helping students showcase and manage their projects. Exploring machine learning, natural language processing, and intelligent automation.' },
              { year: '2027', icon: 'fa-solid fa-rocket',         title: 'Scaling Vision',           desc: 'Aiming to master advanced AI/ML systems and production-grade engineering. Goal: Build technology that impacts millions and contribute to open-source communities.' },
            ].map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className="journey-row">
                  {/* Left column */}
                  <div className="journey-col journey-col--left">
                    {isLeft && (
                      <div className="journey-card">
                        <div className="journey-year-row">
                          <span className="journey-year-num">{item.year}</span>
                          <span className="journey-year-dash"></span>
                        </div>
                        <div className="journey-card-header journey-card-header--left">
                          <h3 className="journey-card-title">{item.title}</h3>
                          <div className="journey-icon-box"><i className={item.icon}></i></div>
                        </div>
                        <p className="journey-card-desc">{item.desc}</p>
                      </div>
                    )}
                  </div>
                  {/* Center dot */}
                  <div className="journey-col journey-col--center">
                    <div className="journey-dot"></div>
                  </div>
                  {/* Right column */}
                  <div className="journey-col journey-col--right">
                    {!isLeft && (
                      <div className="journey-card">
                        <div className="journey-year-row">
                          <span className="journey-year-dash"></span>
                          <span className="journey-year-num">{item.year}</span>
                        </div>
                        <div className="journey-card-header journey-card-header--right">
                          <div className="journey-icon-box"><i className={item.icon}></i></div>
                          <h3 className="journey-card-title">{item.title}</h3>
                        </div>
                        <p className="journey-card-desc">{item.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            {/* End cap row */}
            <div className="journey-row journey-row--end">
              <div className="journey-col journey-col--left"></div>
              <div className="journey-col journey-col--center">
                <div className="journey-end-dot"></div>
              </div>
              <div className="journey-col journey-col--right"></div>
            </div>
            <p className="journey-end-label-row">TO BE CONTINUED</p>
          </div>
        </div>
      </section>

      <PortfolioSection />

      {/* ===== CONTACT ===== */}
      <section className="get-in-touch-area" id="contacts">
        <div className="container">
          <div className="get-in-touch-wrapper position-relative overflow-hidden">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="contact-inner">
                  <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="title-left">Get Ready To Create Great</span>
                  </div>
                  <ul className="ft-link v2">
                    <li className="tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation">
                      <span className="ft-icon"><i className="fa-solid fa-envelope"></i></span>
                      <div className="ft-link-wrap">
                        <h4 className="link-title">E-mail:</h4>
                        <a href="#">iamtabeen@gmail.com</a>
                      </div>
                    </li>
                    <li className="tmp-scroll-trigger tmp-fade-in animation-order-2">
                      <span className="ft-icon"><i className="fa-solid fa-location-dot"></i></span>
                      <div className="ft-link-wrap">
                        <h4 className="link-title">Location:</h4>
                        <div>Punjab, Pakistan</div>
                      </div>
                    </li>
                    <li className="tmp-scroll-trigger tmp-fade-in animation-order-3 tmp-link-animation">
                      <span className="ft-icon"><i className="fa-solid fa-location-dot"></i></span>
                      <div className="ft-link-wrap">
                        <h4 className="link-title">Contact:</h4>
                        <a href="#">+92 328 5765363</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-inner">
                  <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="title">GET IN TOUCH</span>
                  </div>
                  <div className="contact-form">
                    <div id="form-messages" className="error"></div>
                    <form className="tmp-dynamic-form" id="contact-form" method="POST" action="https://inversweb.com/product/html/virtuo/mailer.php">
                      <div className="contact-form-wrapper row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="name" id="contact-name" placeholder="Your Name" type="text" required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="phone" id="contact-phone" placeholder="Phone Number" type="tel" required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" id="contact-email" name="email" placeholder="Your Email" type="email" required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" type="text" id="subject" name="subject" placeholder="Subject" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea className="input-field" placeholder="Your Message" name="message" id="contact-message" required></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="tmp-button-here">
                            <button className="tmp-btn hover-icon-reverse radius-round w-100" name="submit" type="submit" id="submit">
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">Appointment Now</span>
                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="tmp-light light-top-left active"></div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <div className="tmp-footer-area footer-style-4 tmp-section-gapTop pb--50">
        <div className="plr--150 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15">
          <div className="row">
            <div className="col-lg-12">
              <div className="for-animation-inner">
                <div className="cta__line-wrap-1"><img src="https://cdn.prod.website-files.com/672799259500d2477d1eafa5/6732fb6df497a3fa7a857752_Vector 7.svg" loading="lazy" alt="" height={118} className="cta__line-1" /></div>
                <div className="cta__line-wrap-2"><img className="cta__line-2" src="https://cdn.prod.website-files.com/672799259500d2477d1eafa5/6732fb6df497a3fa7a857752_Vector 7.svg" loading="lazy" alt="" height={118} /></div>
                <div className="footer-area text-center">
                  <div className="logo">
                    <a href="/">
                      <img src="/assets/images/logo/white-logo.png" alt="Tabeen Haider -  Web Developer" />
                    </a>
                  </div>
                  <p className="description mt--30">
                    &copy; {new Date().getFullYear()}. All rights reserved by Tabeen Haider. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== PORTFOLIO MODAL ===== */}
      <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="fa-solid fa-xmark"></i></span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolio-popup-thumbnail">
                    <div className="image">
                      <img className="w-100" src="/assets/images/portfolio/portfolio-04.jpg" alt="slide" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="text-content">
                    <h3 id="portfolio-modal-title"></h3>
                    <p id="portfolio-modal-desc" className="mb--30"></p>
                    <div id="portfolio-modal-tags" className="portfolio-modal-tags mt--20"></div>
                    <div className="button-group mt--16">
                      <a id="portfolio-live-preview-btn" className="tmp-btn btn-border tmp-modern-button radius-round portfolio-modal-preview-btn" href="#" target="_blank" rel="noopener noreferrer">
                        <span className="btn-text">LIVE PREVIEW</span>
                        <i className="fa-regular fa-arrow-up-right-from-square ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CHAT WIDGET ===== */}
      <div className="ready-chatting-option tmp-ready-chat">
        <input type="checkbox" id="click" />
        <label htmlFor="click">
          <i className="fab fa-facebook-messenger"></i>
          <i className="fas fa-times"></i>
        </label>
        <div className="wrapper">
          <div className="head-text">Let&apos;s chat with me? - Online</div>
          <div className="chat-box">
            <div className="desc-text">Please fill out the form below to start chatting with me directly.</div>
            <form className="tmp-dynamic-form" action="#">
              <div className="field">
                <input className="input-field" name="name" placeholder="Your Name" type="text" required />
              </div>
              <div className="field">
                <input className="input-field" name="email" placeholder="Your Email" type="email" required />
              </div>
              <div className="field textarea">
                <textarea className="input-field" placeholder="Your Message" name="message" required></textarea>
              </div>
              <div className="field-1 mt--20">
                <button className="tmp-btn btn-border tmp-modern-button">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Send Message</span>
                    <span className="btn-hack"></span>
                    <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                    <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ===== SCROLL TO TOP ===== */}
      <div className="scrollToTop">
        <div className="arrowUp"><i className="fa-light fa-arrow-up"></i></div>
        <div className="water">
          <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
            <use href="#wave"></use>
          </svg>
          <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
            <use href="#wave"></use>
          </svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 20" style={{display: 'none'}}>
            <symbol id="wave">
              <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z" fill="#fff"></path>
              <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z" fill="#fff"></path>
              <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z" fill="#fff"></path>
              <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z" fill="#fff"></path>
            </symbol>
          </svg>
        </div>
      </div>

      {/* ===== DEMO MODAL ===== */}
      <div className="demo-modal-area">
        <div className="wrapper">
          <div className="tmp-modal-inner">
            <div className="close-icon">
              <button className="demo-close-btn"><span><i className="fa-sharp fa-light fa-xmark"></i></span></button>
            </div>
            <div className="demo-top text-center">
              <div style={{display:'flex', justifyContent:'center', marginBottom:'16px'}}>
                <img src="/assets/images/logo/white-logo.png" alt="Logo" style={{width:'70px', height:'auto'}} />
              </div>
            </div>
            <ul className="popuptab-area nav nav-tabs" id="popuptab" role="tablist">
              <li className="nav-item"><a className="nav-link active demo-dark" id="demodark-tab" data-bs-toggle="tab" href="#demodark" role="tab" aria-controls="demodark" aria-selected="true">Dark Demo</a></li>
              <li className="nav-item"><a className="nav-link demo-light" id="demolight-tab" data-bs-toggle="tab" href="#demolight" role="tab" aria-controls="demolight" aria-selected="false">Light Demo</a></li>
            </ul>
            <div className="tab-content" id="popuptabContent">
              <div className="tab-pane show active" id="demodark" role="tabpanel" aria-labelledby="demodark-tab">
                <div className="content">
                  <div className="row">
                    {[
                      { href: 'index.html', img: 'home-1.png', label: 'Main Demo' },
                      { href: 'index-02.html', img: 'home-2.png', label: 'Demo 02' },
                      { href: 'index-03.html', img: 'home-3.png', label: 'Demo 03' },
                      { href: 'index-04.html', img: 'home-4.png', label: 'Demo 04' },
                      { href: 'index-05.html', img: 'home-5.png', label: 'Demo 05' },
                      { href: 'index-06.html', img: 'home-6.png', label: 'Demo 06' },
                      { href: 'index-07.html', img: 'home-7.png', label: 'Demo 07' },
                      { href: 'index-08.html', img: 'home-8.png', label: 'Demo 08' },
                      { href: 'index-09.html', img: 'home-9.png', label: 'Demo 09' },
                      { href: 'index-10.html', img: 'home-10.png', label: 'Demo 10' },
                      { href: 'index-11.html', img: 'home-11.png', label: 'Demo 11' },
                      { href: 'index-12.html', img: 'home-12.png', label: 'Demo 12' },
                      { href: 'index-13.html', img: 'home-13.png', label: 'Demo 13' },
                      { href: 'index-14.html', img: 'home-14.png', label: 'Demo 14' },
                      { href: 'index-15.html', img: 'home-15.png', label: 'Demo 15' },
                      { href: 'index-16.html', img: 'home-16.png', label: 'Demo 16' },
                      { href: 'index-17.html', img: 'home-17.png', label: 'Demo 17' },
                      { href: '#', img: 'coming-soon.png', label: 'Demo 21' },
                    ].map((demo) => (
                      <div key={demo.label + '-dark'} className="col-lg-4 col-md-6 col-12">
                        <div className="single-demo">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href={demo.href}>
                                <img className="w-100" src={`/assets/images/demo/${demo.img}`} alt="Personal Portfolio" />
                                <span className="overlay-content"><span className="overlay-text">View Demo <i className="feather-external-link"></i></span></span>
                              </a>
                            </div>
                            <div className="inner"><h3 className="title"><a href={demo.href}>{demo.label}</a></h3></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="demolight" role="tabpanel" aria-labelledby="demolight-tab">
                <div className="content">
                  <div className="row">
                    {[
                      { href: 'index-white.html', img: 'home-1-white.png', label: 'Main Demo' },
                      { href: 'index-02-white.html', img: 'home-2-white.png', label: 'Demo 02' },
                      { href: 'index-03-white.html', img: 'home-3-white.png', label: 'Demo 03' },
                      { href: 'index-04-white.html', img: 'home-4-white.png', label: 'Demo 04' },
                      { href: 'index-05-white.html', img: 'home-5-white.png', label: 'Demo 05' },
                      { href: 'index-06-white.html', img: 'home-6-white.png', label: 'Demo 06' },
                      { href: 'index-07-white.html', img: 'home-7-white.png', label: 'Demo 07' },
                      { href: 'index-08-white.html', img: 'home-8-white.png', label: 'Demo 08' },
                      { href: 'index-09-white.html', img: 'home-9-white.png', label: 'Demo 09' },
                      { href: 'index-10-white.html', img: 'home-10-white.png', label: 'Demo 10' },
                      { href: 'index-11-white.html', img: 'home-11-white.png', label: 'Demo 11' },
                      { href: 'index-12-white.html', img: 'home-12-white.png', label: 'Demo 12' },
                      { href: 'index-13-white.html', img: 'home-13-white.png', label: 'Demo 13' },
                      { href: 'index-14-white.html', img: 'home-14-white.png', label: 'Demo 14' },
                      { href: 'index-15-white.html', img: 'home-15-white.png', label: 'Demo 15' },
                      { href: 'index-16-white.html', img: 'home-16-white.png', label: 'Demo 16' },
                      { href: 'index-17-white.html', img: 'home-17-white.png', label: 'Demo 17' },
                      { href: '#', img: 'coming-soon-white.png', label: 'Demo 21' },
                    ].map((demo) => (
                      <div key={demo.label + '-light'} className="col-lg-4 col-md-6 col-12">
                        <div className="single-demo">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href={demo.href}>
                                <img className="w-100" src={`/assets/images/demo/${demo.img}`} alt="Personal Portfolio" />
                                <span className="overlay-content"><span className="overlay-text">View Demo <i className="feather-external-link"></i></span></span>
                              </a>
                            </div>
                            <div className="inner"><h3 className="title"><a href={demo.href}>{demo.label}</a></h3></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
