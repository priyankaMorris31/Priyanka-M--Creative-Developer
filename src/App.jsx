import React, { useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Download, ExternalLink, Github, Linkedin, Mail, MapPin,
  Menu, X, ChevronDown, Sparkles, Figma, Gamepad2, BriefcaseBusiness,
  Award, Code2, Send
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

const projects = [
  {
    title: "Figma Design Studio",
    category: "Figma",
    icon: Figma,
    description: "UI concepts, responsive layouts, prototypes and polished user flows.",
    path: "/projects/figma",
    number: "01"
  },
  {
    title: "Unity 3D Experiences",
    category: "Unity 3D",
    icon: Gamepad2,
    description: "AR exploration and 3D FPS gameplay built with Unity and C#.",
    path: "/projects/unity",
    number: "02"
  },
  {
    title: "AmsonWebz Internship",
    category: "Work",
    icon: BriefcaseBusiness,
    description: "Real-world responsive websites and template customization from Nov 2024–May 2025.",
    path: "/projects/work",
    number: "03"
  }
];

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const location = useLocation();

  const nav = (path) => {
    setOpen(false);
    setDrop(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="nav">
        <Link to="/" className="brand" onClick={() => nav("/")}>
          <span className="brand-mark">P</span>
          <span>PRIYANKA<span className="accent">.M</span></span>
        </Link>

        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>

        <div className={`nav-links ${open ? "show" : ""}`}>
          <Link className={location.pathname === "/" ? "active" : ""} to="/" onClick={() => nav("/")}>Home</Link>
          <a href="/#about" onClick={() => setOpen(false)}>About</a>
          <div className="dropdown">
            <button onClick={() => setDrop(!drop)} className="drop-btn">
              Projects <ChevronDown size={15} className={drop ? "rotate" : ""}/>
            </button>
            {drop && (
              <div className="dropdown-menu">
                <Link to="/projects/figma" onClick={() => nav("/projects/figma")}>Figma Projects</Link>
                <Link to="/projects/unity" onClick={() => nav("/projects/unity")}>Unity 3D Projects</Link>
                <Link to="/projects/work" onClick={() => nav("/projects/work")}>Work Projects</Link>
              
              </div>
            )}
          </div>
          <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
          <a className="nav-cta" href="/Priyanka_M_Resume.pdf" download>Resume <Download size={15}/></a>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="footer">
        <div>
          <strong>PRIYANKA<span className="accent">.M</span></strong>
          <p>Front-End Developer · UI/UX Enthusiast</p>
        </div>
        <div className="footer-links">
          <a href="mailto:priyankabtech2020@gmail.com"><Mail size={17}/></a>
          <a href="https://www.linkedin.com/in/priyanka-m-3585a125b" target="_blank" rel="noreferrer"><Linkedin size={17}/></a>
          <a href="https://github.com/priyankaMorris31" target="_blank" rel="noreferrer"><Github size={17}/></a>
        </div>
      </footer>
    </>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="orb orb-a"></div>
        <div className="orb orb-b"></div>
        <div className="hero-grid"></div>
        <div className="hero-content">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="eyebrow"><Sparkles size={15}/> FRONT-END DEVELOPER · UI/UX</div>
            <h1>Building digital<br/><span className="gradient-text">experiences</span> that connect.</h1>
            <p className="hero-copy">
              Hi, I’m Priyanka M — an entry-level Front-End Developer and UI/UX enthusiast
              who turns ideas and designs into responsive, user-friendly web interfaces.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">Explore my work <ArrowRight size={18}/></a>
              <a className="btn ghost" href="mailto:priyankabtech2020@gmail.com">Let’s talk <Mail size={17}/></a>
            </div>
          </motion.div>
        </div>
        <div className="scroll-hint">SCROLL TO EXPLORE <span></span></div>
      </section>

      <section id="about" className="section">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-grid">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
            <h2>Design thinking.<br/><span className="muted">Developer mindset.</span></h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
            <p className="large-text">
              I enjoy translating UI designs into functional experiences and collaborating
              with teams to create clean, visually appealing solutions.
            </p>
            <div className="info-row">
              <div><span>EDUCATION</span><strong>B.Tech Information Technology</strong><small>Jaya Engineering College · 2020–2024 · CGPA 8.1</small></div>
              <div><span>LOCATION</span><strong>Chennai, India</strong><small>Open to frontend & UI/UX opportunities</small></div>
            </div>
          </motion.div>
        </div>

        <div className="skills">
          {["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Figma", "Canva", "Responsive Design", "UI Prototyping", "GitHub", "Unity 3D"].map((s,i) =>
            <motion.span key={s} initial={{opacity:0, scale:.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*.04}}>{s}</motion.span>
          )}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-head">
          <div><div className="section-label">02 / SELECTED WORK</div><h2>Three sides of my<br/><span className="gradient-text">creative stack.</span></h2></div>
          <Link className="text-link" to="/projects/figma">View showcases <ArrowRight size={17}/></Link>
        </div>
        <div className="project-grid">
          {projects.map((p,i) => <ProjectCard key={p.title} {...p} index={i}/>)}
        </div>
      </section>

      <section className="section achievements">
        <div className="section-label">03 / HACKATHONS & ACHIEVEMENTS</div>
        <div className="achievement-grid">
          <Achievement
                title="LexiBattle"
                meta="HACKATHON · VIBTHON 2025 · DEC 2025"

                role="Game Developer" 

                text="Worked as a developer on the team to build LexiBattle, a multiplayer word-search game. Contributed to implementing the game interface and interaction flow, multiplayer modes, and Sui blockchain wallet connectivity."

                technologies={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Sui Blockchain",
                  "Multiplayer"
                ]}
              />
          <Achievement
            title="Unity Game Developer"
            meta="HACKATHON · AVALANCHE TEAM · AUG 2025"
            role="Unity Game Developer"
            text="Designed and developed gameplay features for a 3D FPS game using Unity and C#. Worked on player movement, weapon and shooting systems, animations, UI, environment integration and combat interactions."
            technologies={[
              "Unity",
              "C#",
              "3D",
              "Gameplay"
            ]}
          />             

        <Achievement 
  title="Fuji Locker"
  meta="UNFOLD · OCT 2023"
  role="Frontend Developer"

  text="Fuji Locker is a Web3 digital document storage platform designed for secure and tamper-resistant document management. I developed responsive and interactive interfaces using React.js, built reusable components, implemented project and team sections, and integrated UI components with Web3-related functionality."

  technologies={[
    "React.js",
    "Web3",
    "Responsive Design",
    "Reusable Components"
  ]}

  link="https://devfolio.co/projects/fuji-locker-6760"
  linkText="View Hackathon"
/>
        
        </div>
      </section>

      {/* Research & Publications */}
<section className="section" id="research">
  <div className="section-header">
    <span className="section-number">04</span>

    <div>
      <p className="eyebrow">RESEARCH & PUBLICATIONS</p>
      <h2>Research & Publications</h2>
    </div>
  </div>

  <div className="research-card">
    <div className="research-icon">
      📄
    </div>

    <div className="research-content">
      <span className="research-meta">
        IJARCCE · APRIL 2024
      </span>

      <h3>Smart College View Using Augmented Reality</h3>

      <p>
        Published a research paper titled
        <strong> “Smart College View Using Augmented Reality” </strong>
        in the International Journal of Advanced Research in Computer
        and Communication Engineering (IJARCCE).
      </p>

      <div className="research-details">
        <span>AR Foundation</span>
        <span>Unity 3D</span>
        <span>ARCore</span>
        <span>ARKit</span>
      </div>

      <div className="research-info">
        <div>
          <small>PUBLICATION</small>
          <strong>Volume 13, Issue 4</strong>
        </div>

        <div>
          <small>DATE</small>
          <strong>April 2024</strong>
        </div>

        <div>
          <small>DOI</small>
          <strong>10.17148/IJARCCE.2024.134187</strong>
        </div>
      </div>

      <div className="research-actions">
        <a
          href="https://doi.org/10.17148/IJARCCE.2024.134187"
          target="_blank"
          rel="noreferrer"
        >
          View Publication ↗
        </a>

        <a
          href="/certificates/Smart-College-View-Publication.pdf"
          target="_blank"
          rel="noreferrer"
        >
          View Certificate ↗
        </a>
      </div>
    </div>
  </div>
</section>

<section className="section certs">
  <div className="section-label">05 / CERTIFICATIONS</div>

  <div className="cert-grid">

    {/* Certificate 1 */}
    <div className="certificate-card">

      <div className="certificate-preview">
        <Award size={30} />
        <span>GOOGLE · COURSERA</span>
      </div>

      <div className="certificate-info">

        <span className="mini-label">
          GOOGLE · COURSERA
        </span>

        <h3>
          The Bits and Bytes of Computer Networking
        </h3>

        <p>
          Completed June 13, 2026
        </p>

        <div className="certificate-actions">

          <a
            className="btn ghost"
            href="/certificates/Google-Bits-and-Bytes-of-Computer-Networking.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Certificate <ExternalLink size={15} />
          </a>

          <a
            className="verify-link"
            href="https://coursera.org/verify/H5ACCPFA22YF"
            target="_blank"
            rel="noreferrer"
          >
            Verify Credential <ExternalLink size={14} />
          </a>

        </div>

      </div>

    </div>


    {/* Certificate 2 */}
    <div className="certificate-card">

      <div className="certificate-preview">
        <Award size={30} />
        <span>GOOGLE · COURSERA</span>
      </div>

      <div className="certificate-info">

        <span className="mini-label">
          GOOGLE · COURSERA
        </span>

        <h3>
          Technical Support Fundamentals
        </h3>

        <p>
          Completed April 27, 2026
        </p>

        <div className="certificate-actions">

          <a
            className="btn ghost"
            href="/certificates/Google-Technical-Support-Fundamentals.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Certificate <ExternalLink size={15} />
          </a>

          <a
            className="verify-link"
            href="https://coursera.org/verify/6KTSNBQEZELN"
            target="_blank"
            rel="noreferrer"
          >
            Verify Credential <ExternalLink size={14} />
          </a>

        </div>

      </div>

    </div>

    {/* Certificate 3 */}
    <div className="certificate-card">

      <div className="certificate-preview">
        <Award size={30} />
        <span>Udemy · COURSERA</span>
      </div>

      <div className="certificate-info">

        <span className="mini-label">
          Udemy · COURSERA
        </span>

        <h3>
         SQL- The Complete Introduction to SQL programming
        </h3>

        <p>
          Completed Oct 4, 2024
        </p>

        <div className="certificate-actions">

          <a
            className="btn ghost"
            href="/certificates/Udemy-SQL-The-Complete-Introduction-to-SQL-programming.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Certificate <ExternalLink size={15} />
          </a>

          <a
            className="verify-link"
            href="https://www.udemy.com/course/sql-the-complete-introduction-to-sql-programming/learn/lecture/31781414?start=1#overview"
            target="_blank"
            rel="noreferrer"
          >
            Verify Credential <ExternalLink size={14} />
          </a>

        </div>

      </div>

    </div>

    {/* Certificate 4 */}
    <div className="certificate-card">

      <div className="certificate-preview">
        <Award size={30} />
        <span>Udemy · COURSERA</span>
      </div>

      <div className="certificate-info">

        <span className="mini-label">
          Udemy · COURSERA
        </span>

        <h3>
        Digital Marketing Foundation for Beginners
        </h3>

        <p>
          Completed July 5, 2024
        </p>

        <div className="certificate-actions">

          <a
            className="btn ghost"
            href="/certificates/Udemy-Digital-Marketing-Foundation-for-Beginners.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Certificate <ExternalLink size={15} />
          </a>

          <a
            className="verify-link"
            href="https://www.udemy.com/course/digital-marketing-foundation-for-beginners/learn/lecture/31781414?start=1#overview"
            target="_blank"
            rel="noreferrer"
          >
            Verify Credential <ExternalLink size={14} />
          </a>

        </div>

      </div>

    </div>

    {/* Certificate 5 */}
    <div className="certificate-card">

      <div className="certificate-preview">
        <Award size={30} />
        <span>Udemy · COURSERA</span>
      </div>

      <div className="certificate-info">

        <span className="mini-label">
          Udemy · COURSERA
        </span>

        <h3>
        Digital Marketing Foundation for Beginners
        </h3>

        <p>
          Completed July 5, 2024
        </p>

        <div className="certificate-actions">

          <a
            className="btn ghost"
            href="/certificates/Udemy-Digital-Marketing-Foundation-for-Beginners.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Certificate <ExternalLink size={15} />
          </a>

          <a
            className="verify-link"
            href="https://www.udemy.com/course/digital-marketing-foundation-for-beginners/learn/lecture/31781414?start=1#overview"
            target="_blank"
            rel="noreferrer"
          >
            Verify Credential <ExternalLink size={14} />
          </a>

        </div>

      </div>

    </div>

    {/* Certificate 7 */}
    <div className="certificate-card">

      <div className="certificate-preview">
        <Award size={30} />
        <span>Udemy · COURSERA</span>
      </div>

      <div className="certificate-info">

        <span className="mini-label">
          Udemy · COURSERA
        </span>

        <h3>
        HTML & CSS - Certification Course for Beginners
        </h3>

        <p>
          Completed July 13, 2023
        </p>

        <div className="certificate-actions">

          <a
            className="btn ghost"
            href="/certificates/Udemy-HTML-CSS-Certification-Course-for-Beginners.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Certificate <ExternalLink size={15} />
          </a>

          <a
            className="verify-link"
            href="https://www.udemy.com/course/html-css-certification-course-for-beginners/learn/lecture/31781414?start=1#overview"
            target="_blank"
            rel="noreferrer"
          >
            Verify Credential <ExternalLink size={14} />
          </a>

        </div>

      </div>

    </div>

  </div>
</section>

      <Contact />
    </>
  );
}

function ProjectCard({title, category, description, icon: Icon, path, number, index}) {
  return <motion.div className="project-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay:index*.1}}>
    <div className="card-top"><span>{number}</span><Icon size={22}/></div>
    <div><span className="mini-label">{category}</span><h3>{title}</h3><p>{description}</p></div>
    <Link to={path} className="circle-arrow"><ArrowRight size={18}/></Link>
  </motion.div>
}

function Achievement({ title, meta,  role, text, technologies, link, linkText }) {
  return (
    <div className="achievement">

      <div className="achievement-icon">
        <Code2 size={20} />
      </div>

      <span className="mini-label">
        {meta}
      </span>

      <h3>
        {title}
      </h3>
      {/* My Role */}
      {role && (
        <div className="achievement-role">
          <span>MY ROLE</span>
          <strong>{role}</strong>
        </div>
      )}

      <p>
        {text}
      </p>

      <div className="achievement-tech">
        {technologies.map((tech) => (
          <span key={tech}>
            {tech}
          </span>
        ))}
      </div>

      {link && (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="achievement-link"
  >
    {linkText || "View Project"}
    <ArrowRight size={15} />
  </a>
)}

    </div>
  );
}

function Contact() {
  return <section id="contact" className="section contact">
    <div className="section-label">05 / CONTACT</div>
    <div className="contact-grid">
      <div>
        <h2>Let’s create<br/><span className="gradient-text">something useful.</span></h2>
        <p className="large-text">Recruiter, collaborator, or fellow builder? I’d love to hear from you.</p>
        <div className="contact-details">
          <a href="mailto:priyankabtech2020@gmail.com"><Mail size={18}/> priyankabtech2020@gmail.com</a>
          <a href="tel:+916384695504"><span>☎</span> +91 6384695504</a>
          <span><MapPin size={18}/> Chennai, India</span>
        </div>
      </div>
      <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); window.location.href=`mailto:priyankabtech2020@gmail.com?subject=Portfolio Contact from ${e.target.name.value}&body=${encodeURIComponent(e.target.message.value)}`}}>
        <input name="name" placeholder="Your name" required/>
        <input name="email" type="email" placeholder="Your email" required/>
        <textarea name="message" rows="6" placeholder="Tell me about your opportunity..." required></textarea>
        <button className="btn primary" type="submit">Send message <Send size={16}/></button>
      </form>
    </div>
  </section>
}

function CategoryPage({type}) {
  const data = {
    figma: {
  label: "FIGMA SHOWCASE",
  title: "Interfaces with intention.",
  intro:
    "A collection of UI/UX projects focused on visual design, responsive layouts, mobile experiences and user-friendly interfaces.",
  icon: Figma,
  color: "FIGMA · UI/UX",

  items: [
    [
      "Food Delivery App UI",
      "A mobile food delivery interface designed in Figma with screens for cart management, user login and payment selection.",
      "https://www.figma.com/design/1m0OiD9X5Vm0ciekBz1qDD/food-delivery?node-id=38-245&p=f&t=DoGcDDpKaDkxWnsR-0",
      "/images/projects/food-delivery-mockup.png"
    ],

    [
      "Saravana Travels Website",
      "A travel website interface designed with a clean navigation structure, destination-focused visuals and travel-focused content.",
      "https://www.figma.com/proto/bPptaSjrtdj1eFkNTLKz8r/Saravan-Travles?node-id=34-3&t=DoGcDDpKaDkxWnsR-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
      "/images/projects/Saravan-Travles.png"
    ],

    [
      "Travel App UI",
      "A mobile travel application concept featuring onboarding, travel discovery and login screens.",
      "https://www.figma.com/design/okYex1E8smzf3QUtmfbGxZ/project-1?node-id=0-1&p=f&t=DoGcDDpKaDkxWnsR-0",
      "/images/projects/travel-app.png"
    ]
  ]
},

 unity: {
  label: "UNITY 3D SHOWCASE",
  title: "Interactive worlds.",
  intro:
    "Unity projects combining 3D environments, augmented reality, gameplay systems and interactive experiences.",
  icon: Gamepad2,
  color: "UNITY · 3D · AR",

  items: [
    [
      "Smart College View Using Augmented Reality",
      "An AR-based virtual campus exploration project developed using Unity 3D. I created and integrated 3D campus assets, configured the Unity scene and implemented interactive AR experiences for exploring the college environment.",
      "YOUR_SMART_COLLEGE_GITHUB_LINK",
      "/images/projects/smart-college-view.png"
    ],

    [
      "Unity Game Developer — FPS Hackathon",
      "A 3D first-person shooter game developed using Unity and C#. I worked on player movement, weapon and shooting systems, animations, UI, environment integration and combat interactions.",
      "YOUR_FPS_GAME_GITHUB_LINK",
      "/images/projects/Starkshoot-lite.jpg"
    ]
  ]
},
work: {
  label: "AMSONWEBZ INTERNSHIP",

  title: "Real-world web development.",

  intro:
    "Web Developer Intern at AmsonWebz from November 2024 to May 2025. I worked on responsive business websites, customized website templates, improved user interfaces and collaborated with designers and developers.",

  icon: BriefcaseBusiness,

  color: "WEB DEVELOPMENT",

  items: [
    [
      "MV Engineering",

      "A six-page responsive website developed for a fabrication and construction company. I worked on the website interface, responsive layouts and template customization to create a clean and professional user experience.",

      "https://mvengineering.in/",

      "/images/projects/mvengineering.png"
    ],

    [
      "Venes Stones",

      "A responsive website for a natural stone supplier. I worked on the website layout, responsive design and content presentation to showcase the company's products and services across different screen sizes.",

      "https://website2023.in/venesstones.in/Demo1/",

      "/images/projects/venesstones.png"
    ],

    [
      "Deen Shah International",

      "A product-focused website for a leather goods brand. I worked on the frontend interface, responsive layouts and website customization to create a clean and user-friendly product presentation.",

      "https://deenshahinternational.com/",

      "/images/projects/deenshahinternational.png"
    ],

    [
      "Om Sai Ram Garden Apartments",

      "A product-focused website for a leather goods brand. I worked on the frontend interface, responsive layouts and website customization to create a clean and user-friendly product presentation.",

      "https://website2023.in/omsairamgarden/updated-6/index.html",

      "/images/projects/omsairamgarden.png"
    ]
  ]
}
  }[type];

  const Icon = data.icon;
  return <section className="category-page">
    <div className="category-hero">
      <div className="section-label">{data.label}</div>
      <div className="category-title-row">
        <div><h1>{data.title}</h1><p>{data.intro}</p></div>
        <div className="big-icon"><Icon size={46}/></div>
      </div>
    </div>
    <div className="category-content">
      {data.items.map((item, i) =>
  <motion.article
    className="case-study"
    key={item[0]}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >

    <div className="case-number">
      0{i + 1}
    </div>

    <div className="case-body">

      <span className="mini-label">
        {data.color}
      </span>

      <h2>{item[0]}</h2>

      <p>{item[1]}</p>

{item[3] && (
  <img
    src={item[3]}
    alt={`${item[0]} website`}
    className="project-image"
  />
)}

      {/* Website Link */}
{item[2] && (
  <a
    href={item[2]}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    {type === "work" ? "View Website" : type === "figma" ? "View Figma Design" : "View GitHub Repository"}
    <ArrowRight size={16} />
  </a>
)}
    </div>

  </motion.article>
)}
    </div>
  </section>
}

function App() {
  return <Layout>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects/figma" element={<CategoryPage type="figma"/>}/>
      <Route path="/projects/unity" element={<CategoryPage type="unity"/>}/>
      <Route path="/projects/work" element={<CategoryPage type="work"/>}/>
    </Routes>
  </Layout>
}

export default App;