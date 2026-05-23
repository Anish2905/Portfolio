// Portfolio constants

export const SITE_CONFIG = {
  name: "Anish Sharma",
  title: "Full Stack Web Developer",
  description: "I build responsive frontend interfaces and clean backend APIs. Currently a Software Developer at HLTHTek Optimus, working with React, Django, and PostgreSQL.",
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
  backend: ["Python & Django", "REST APIs", "Node.js", "Express.js"],
  database: ["PostgreSQL", "MongoDB", "SQL Basics"],
  devops_cloud: ["AWS Basics", "Docker", "CI/CD & Testing", "Git & GitHub"],
  tools: ["Postman", "Jest", "VS Code"],
} as const;

export const EXPERIENCE_DATA = [
  {
    title: "Software Developer",
    company: "HLTHTek Optimus Private Limited",
    location: "Kolkata, India",
    period: "Jan 2026 - Present",
    highlights: [
      "Contributing to the development and maintenance of frontend web pages using React.js and TypeScript.",
      "Assisting in building and testing backend REST APIs with Python and Django.",
      "Writing clean database queries in PostgreSQL and participating in codebase updates."
    ],
  },
  {
    title: "Process Associate",
    company: "Sun Knowledge Services Inc.",
    location: "Kolkata, India",
    period: "Mar 2025 - Oct 2025",
    highlights: [
      "Assisted with SQL database updates and data verification for US facilities.",
      "Standardized facility records for optimized internal workflow analytics."
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
  
  🎓 B.Tech CSE @ UEM Kolkata (Graduating July 2026)
  💼 Software Developer @ HLTHTek Optimus Private Limited
  📍 Kolkata, West Bengal, India
  
  I build frontend interfaces and backend APIs. My current focus
  is working with React.js, Python, Django, and PostgreSQL.
  
  Currently working on: Feature updates and codebase improvements.
  
  ✓ Employed & open to learning and new opportunities.
`,
  help: `
  ╭────────────────────────────────────────────────────────╮
  │                  AVAILABLE COMMANDS                    │
  ╰────────────────────────────────────────────────────────╯
  
    whoami     →  Who am I? Personal intro & current focus
    skills     →  View my technical capabilities
    exp        →  Explore my work history
    projects   →  Browse my featured projects
    certs      →  Certifications & academic credentials
    status     →  Check my availability status
    socials    →  Find my social links
    contact    →  Get my contact details
    clear      →  Clear the terminal display
`,
  skills: `
  ╭────────────────────────────────────────────────────────╮
  │                   TECHNICAL TOOLKIT                    │
  ╰────────────────────────────────────────────────────────╯
  
  FRONTEND DEVELOPMENT
  ├─ React & Next.js  ████████████░░░░░░  Advanced
  ├─ JS & TS          ████████████░░░░░░  Advanced
  └─ CSS3 & Tailwind  ████████████░░░░░░  Advanced
  
  BACKEND DEVELOPMENT
  ├─ Python & Django  ████████████░░░░░░  Advanced
  ├─ Node & Express   ████████░░░░░░░░░░  Intermediate
  └─ REST APIs        ████████████░░░░░░  Advanced
  
  DATABASES & CLOUD
  ├─ PostgreSQL       ██████████░░░░░░░░  Intermediate
  ├─ MongoDB          ████████░░░░░░░░░░  Intermediate
  └─ AWS & Docker     ████████░░░░░░░░░░  Intermediate
`,
  exp: `
  ╭────────────────────────────────────────────────────────╮
  │                    WORK EXPERIENCE                     │
  ╰────────────────────────────────────────────────────────╯
  
  ┌─ SOFTWARE DEVELOPER
  │  HLTHTek Optimus Private Limited (Jan 2026 - Present)
  │
  │  • Contributing to frontend features with React.js & TS.
  │  • Assisting with Django backend development & testing.
  │  • Writing clean SQL queries and managing PostgreSQL database tasks.
  └─────────────────────────────────────────────────────────
  
  ┌─ PROCESS ASSOCIATE
  │  Sun Knowledge Services Inc. (Mar 2025 - Oct 2025)
  │
  │  • Assisted with SQL database updates and data verification.
  │  • Standardized facility records for internal reporting.
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
  
  🎓 B.Tech Computer Science & Engineering
     University of Engineering & Management, Kolkata
     Expected Graduation: July 2026 | Cumulative GPA: 7.45
`,
  status: `
  ╭────────────────────────────────────────────────────────╮
  │                  AVAILABILITY STATUS                   │
  ╰────────────────────────────────────────────────────────╯
  
  💼 Currently: Employed full-time as a Software Developer
                at HLTHTek Optimus Private Limited.
  
  🎯 Focus:     Building clean code, learning new frameworks,
                and contributing to scalable applications.
  
  🌱 Status:    Focused on my current role, but open to 
                connecting and sharing ideas.
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
  
  Feel free to shoot me an email! Let's connect. 🚀
`,
};

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/Anish2905", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/anish-sharma-82689a159", icon: "linkedin" },
  { name: "Instagram", url: "https://www.instagram.com/anish.log", icon: "instagram" },
  { name: "Email", url: "mailto:anishsharma.tech@gmail.com", icon: "email" },
] as const;
