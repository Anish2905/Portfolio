// Portfolio constants

export const SITE_CONFIG = {
  name: "Anish Sharma",
  title: "Full Stack Web Developer",
  description: "I build high-performance web systems and scalable architectures. Currently developing at HLTHTek Optimus, crafting robust solutions from frontend interfaces to backend systems.",
  email: "anishsharma.tech@gmail.com",
  phone: "+91 9874994511",
  location: "Kolkata, India",
  github: "https://github.com/Anish2905",
  linkedin: "https://linkedin.com/in/anish-sharma-82689a159",
  instagram: "https://www.instagram.com/anish.log",
  resume: "https://docs.google.com/document/d/1y-vVTbhrMFi1CRQsl0OJP4W-8f1rrMPyA-VGxVoU2hU/edit?usp=sharing",
} as const;

export const NAV_LINKS = [
  { href: "#skills", label: "Skills", num: "01" },
  { href: "#experience", label: "Experience", num: "02" },
  { href: "#projects", label: "Projects", num: "03" },
  { href: "#contact", label: "Contact", num: "04" },
] as const;

export const SKILLS_DATA = {
  frontend: ["React.js", "JavaScript", "TypeScript", "Next.js", "HTML5 & CSS3", "Tailwind CSS"],
  backend: ["Python & Django", "REST APIs", "Node.js", "Express.js", "API Design"],
  database: ["PostgreSQL", "MongoDB", "Redis", "SQL Optimization"],
  devops_cloud: ["AWS (EC2, S3, Lambda)", "Docker", "CI/CD & Testing", "GitHub Actions"],
  tools: ["Postman", "Git/GitHub", "Jest", "VS Code"],
} as const;

export const EXPERIENCE_DATA = [
  {
    title: "Software Developer",
    company: "HLTHTek Optimus Private Limited",
    location: "Kolkata, India",
    period: "Jan 2026 - Present",
    highlights: [
      "Architecting and shipping responsive, user-centric web applications utilizing React.js, Next.js, and TypeScript.",
      "Developing and scaling robust backend microservices and REST APIs using Python, Django, and Express.js.",
      "Designing highly optimized database schemas, writing efficient queries in PostgreSQL, and utilizing Redis for caching.",
      "Deploying scalable, cloud-native systems on AWS (EC2, S3, Lambda) with automated Docker containers.",
      "Implementing comprehensive test suites with Jest and automating robust CI/CD pipelines via GitHub Actions."
    ],
  },
  {
    title: "Process Associate",
    company: "Sun Knowledge Services Inc.",
    location: "Kolkata, India",
    period: "Mar 2025 - Oct 2025",
    highlights: [
      "Engineered automated SQL scripts for healthcare data verification and standardization for US facility partners.",
      "Optimized Revenue Cycle Management (RCM) operations by cleaning databases and tuning query performance.",
      "Designed and deployed analytics dashboards tracking financial metrics, boosting reporting efficiency."
    ],
  },
] as const;

export const EDUCATION_DATA = {
  degree: "B.Tech in Computer Science & Engineering",
  university: "University of Engineering & Management, Kolkata",
  expected: "July 2026",
  gpa: "7.45",
} as const;

export const CERTIFICATIONS = [
  "Harness Certified Code Repository Developer",
  "Google Cybersecurity Certificate",
  "Databricks Fundamentals Accreditation",
  "Generative AI Fundamentals Accreditation",
] as const;

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "CodeRAG",
    description: "AI-powered codebase search using Retrieval-Augmented Generation (RAG). Allows natural language questions to query codebases. Features semantic indexing, AST-based chunking, and ChromaDB vector embeddings.",
    tags: ["Python", "RAG", "ChromaDB", "FastAPI", "Docker"],
    github: "https://github.com/Anish2905/CodeRAG",
    external: null,
    featured: true,
    date: "Dec 2025",
  },
  {
    id: 2,
    title: "CareerFlow",
    description: "Full-stack job application tracker designed with an offline-first architecture. Utilizes IndexedDB for responsive local storage, Turso cloud sync for seamless durability, and secure JWT/bcrypt authentication.",
    tags: ["Express.js", "JavaScript", "IndexedDB", "Turso", "JWT"],
    github: "https://github.com/Anish2905/CAREERFLOW",
    external: "https://careerflow-live.vercel.app",
    featured: true,
    date: "Dec 2025",
  },
  {
    id: 3,
    title: "Nebula Player",
    description: "Netflix-style local media streaming application with React, Express, and FFmpeg. Implements on-the-fly transcoding, dynamic metadata rendering via TMDB API, and stateful video playback resume tracking.",
    tags: ["React", "Express.js", "FFmpeg", "TMDB API", "TypeScript"],
    github: "https://github.com/Anish2905/Nebula-Player",
    external: null,
    featured: true,
    date: "Oct 2025",
  },
  {
    id: 4,
    title: "PCOSVision",
    description: "Deep learning CNN classifier engineered to detect PCOS indicators from ovarian ultrasound imagery using TensorFlow and Keras. Evaluated with high diagnostic accuracy and ROC-AUC curve visualization.",
    tags: ["Python", "TensorFlow", "CNN", "OpenCV", "Medical AI"],
    github: "https://github.com/Anish2905/PCOSVision",
    external: null,
    featured: true,
    date: "Mar 2025",
  },
  {
    id: 5,
    title: "Tic-Tac-Toe Sliding",
    description: "Modern neon-themed Tic-Tac-Toe web game featuring custom sliding mechanics, move limits, responsive touch layouts, and fluid Win2D-like visual particle effects on win conditions.",
    tags: ["JavaScript", "CSS", "HTML", "Game Dev"],
    github: "https://github.com/Anish2905/tic-tac-toe-sliding",
    external: "https://tic-tac-toe-git-main-anish2905s-projects.vercel.app/",
    featured: false,
    date: "2025",
  },
  {
    id: 6,
    title: "Music Controller - Squid Game",
    description: "Python application implementing the 'Red Light, Green Light' audio logic using event-driven Pygame and a Tkinter-based control dashboard. Fully automated and modular codebase.",
    tags: ["Python", "Tkinter", "Pygame", "GUI"],
    github: "https://github.com/Anish2905/Music-Controller---Squid-Game-Red-Light-Green-Light",
    external: null,
    featured: false,
    date: "Jan 2025",
  },
] as const;

export const TERMINAL_COMMANDS: Record<string, string> = {
  whoami: `
  ╭────────────────────────────────────────────────────────╮
  │                     ANISH SHARMA                       │
  │               Full Stack Web Developer                 │
  ╰────────────────────────────────────────────────────────╯
  
  🎓 B.Tech CSE (CSE) @ UEM Kolkata (Graduating July 2026)
  💼 Software Developer @ HLTHTek Optimus Private Limited
  📍 Kolkata, West Bengal, India
  
  I build high-performance web systems and scalable architectures.
  React, Next.js, and modern CSS on the frontend; Python/Django,
  Express, PostgreSQL, and AWS on the backend.
  
  Currently shipping: Scalable enterprise full-stack solutions.
  
  ✓ Employed & always open to discuss high-impact opportunities!
`,
  help: `
  ╭────────────────────────────────────────────────────────╮
  │                  AVAILABLE COMMANDS                    │
  ╰────────────────────────────────────────────────────────╯
  
    whoami     →  Who am I? Personal intro & current focus
    skills     →  View my full technical capabilities
    exp        →  Explore my software development career
    projects   →  Browse my featured software projects
    certs      →  Certifications & academic credentials
    status     →  Check my availability status
    socials    →  Find my links to GitHub, LinkedIn, etc.
    contact    →  Get my email and phone number details
    clear      →  Clear the terminal display
`,
  skills: `
  ╭────────────────────────────────────────────────────────╮
  │                   TECHNICAL TOOLKIT                    │
  ╰────────────────────────────────────────────────────────╯
  
  FRONTEND DEVELOPMENT
  ├─ React & Next.js  ██████████████░░░░  Expert
  ├─ JS & TS          ██████████████░░░░  Expert
  └─ CSS3 & Tailwind  ████████████░░░░░░  Advanced
  
  BACKEND DEVELOPMENT
  ├─ Python & Django  ██████████████░░░░  Expert
  ├─ Node & Express   ████████████░░░░░░  Advanced
  └─ REST API Design  ██████████████░░░░  Expert
  
  DATABASES
  ├─ PostgreSQL       ████████████░░░░░░  Advanced
  ├─ MongoDB          ██████████░░░░░░░░  Proficient
  └─ Redis            ████████░░░░░░░░░░  Intermediate
  
  DEVOPS & CLOUD
  ├─ AWS (EC2/S3/Lmb) ██████████░░░░░░░░  Proficient
  ├─ Docker & CI/CD   ████████████░░░░░░  Advanced
  └─ GitHub Actions   ████████████░░░░░░  Advanced
`,
  exp: `
  ╭────────────────────────────────────────────────────────╮
  │                    WORK EXPERIENCE                     │
  ╰────────────────────────────────────────────────────────╯
  
  ┌─ SOFTWARE DEVELOPER
  │  HLTHTek Optimus Private Limited (Jan 2026 - Present)
  │
  │  • Developing full-stack applications with React & Django.
  │  • Designing optimized SQL schemas and APIs in PostgreSQL.
  │  • Packaging microservices with Docker and deploying to AWS.
  │  • Engineering CI/CD automation & thorough unit test coverage.
  └─────────────────────────────────────────────────────────
  
  ┌─ PROCESS ASSOCIATE
  │  Sun Knowledge Services Inc. (Mar 2025 - Oct 2025)
  │
  │  • Engineered SQL processes to clean & ingest US healthcare data.
  │  • Boosted Revenue Cycle Management (RCM) workflow speeds.
  │  • Created interactive revenue tracking analytics dashboards.
  └─────────────────────────────────────────────────────────
`,
  projects: `
  ╭────────────────────────────────────────────────────────╮
  │                   FEATURED PROJECTS                    │
  ╰────────────────────────────────────────────────────────╯
  
  🔍 CODERAG
     AI-powered codebase search engine using RAG
     Python • ChromaDB • FastAPI • Docker
     
  💼 CAREERFLOW
     Offline-first job application tracker with sync
     Express.js • IndexedDB • Turso • JWT
     
  🎬 NEBULA PLAYER
     Netflix-style media server with transcoding
     React • Express • FFmpeg • TMDB API
     
  🏥 PCOSVISION
     CNN deep learning classifier for PCOS detection
     TensorFlow • OpenCV • Medical AI
  
  Type 'projects' on the website or see 'socials' for links!
`,
  certs: `
  ╭────────────────────────────────────────────────────────╮
  │                     CREDENTIALS                        │
  ╰────────────────────────────────────────────────────────╯
  
  ✓ Harness Certified Code Repository Developer
  ✓ Google Cybersecurity Professional Certificate
  ✓ Databricks Fundamentals Accreditation
  ✓ Generative AI Fundamentals Accreditation
  
  🎓 B.Tech Computer Science & Engineering (AIML)
     University of Engineering & Management, Kolkata
     Expected Graduation: July 2026 | Cumulative GPA: 7.45
`,
  status: `
  ╭────────────────────────────────────────────────────────╮
  │                  AVAILABILITY STATUS                   │
  ╰────────────────────────────────────────────────────────╯
  
  💼 Currently: Employed full-time as a Software Developer
                at HLTHTek Optimus Private Limited.
  
  🎯 Focus:     Building robust web systems, cloud-native APIs,
                and high-fidelity user experiences.
  
  🌱 Status:    Satisfied with my current role, but always
                open to connecting for high-impact full-stack
                advisory or innovative software roles.
`,
  socials: `
  ╭────────────────────────────────────────────────────────╮
  │                     FIND ME ONLINE                     │
  ╰────────────────────────────────────────────────────────╯
  
  GitHub    :: https://github.com/Anish2905
  LinkedIn  :: https://linkedin.com/in/anish-sharma-82689a159
  Instagram :: https://instagram.com/anish.log
  Email     :: anishsharma.tech@gmail.com
`,
  contact: `
  ╭────────────────────────────────────────────────────────╮
  │                     GET IN TOUCH                       │
  ╰────────────────────────────────────────────────────────╯
  
  📧 Email   :: anishsharma.tech@gmail.com
  📱 Phone   :: +91 9874994511
  
  Feel free to shoot me an email! Let's build something
  scalable and remarkable together. 🚀
`,
};

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/Anish2905", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/anish-sharma-82689a159", icon: "linkedin" },
  { name: "Instagram", url: "https://www.instagram.com/anish.log", icon: "instagram" },
  { name: "Email", url: "mailto:anishsharma.tech@gmail.com", icon: "email" },
] as const;
