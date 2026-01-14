// Portfolio constants

export const SITE_CONFIG = {
  name: "Anish Sharma",
  title: "DevOps Engineer",
  description: "DevOps Engineer building reliable infrastructure with Docker, Kubernetes, and Terraform. Automating everything with Python and Bash.",
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
  { href: "#projects", label: "Projects", num: "02" },
  { href: "#contact", label: "Contact", num: "03" },
] as const;

export const SKILLS_DATA = {
  infrastructure: ["Docker", "Kubernetes", "Terraform", "Linux"],
  automation: ["Python", "Bash", "CI/CD Pipelines", "GitOps"],
  platforms: ["Harness", "GitHub Actions", "AWS", "Azure"],
  monitoring: ["Prometheus", "Grafana", "Log Management", "Alerting"],
} as const;

export const EXPERIENCE_DATA = [
  {
    title: "DevOps Engineer",
    company: "Current Company",
    location: "Remote / Hybrid",
    period: "Jan 2026 - Present",
    highlights: [
      "Building and maintaining CI/CD pipelines with Harness",
      "Container orchestration with Docker and Kubernetes",
      "Infrastructure as Code with Terraform",
      "Automation scripts in Python and Bash",
    ],
  },
  {
    title: "Process Associate",
    company: "Sun Knowledge Services Inc.",
    location: "Kolkata, India",
    period: "Mar 2025 - Oct 2025",
    highlights: [
      "Healthcare data verification & standardization for US facilities",
      "SQL-based data management and RCM optimization",
      "Dashboard design for revenue cycle analytics",
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
    description: "AI-powered codebase search using RAG. Ask questions about your code in plain English and get accurate, cited answers. Features semantic code indexing and vector embeddings.",
    tags: ["Python", "RAG", "ChromaDB", "FastAPI", "Docker"],
    github: "https://github.com/Anish2905/CodeRAG",
    external: null,
    featured: true,
    date: "Dec 2025",
  },
  {
    id: 2,
    title: "CareerFlow",
    description: "Full-stack job application tracker with offline-first architecture. Features IndexedDB for local storage, Turso cloud sync, JWT auth with bcrypt, rate limiting, and background sync.",
    tags: ["Express.js", "JavaScript", "IndexedDB", "Turso", "JWT"],
    github: "https://github.com/Anish2905/CAREERFLOW",
    external: "https://careerflow-live.vercel.app",
    featured: true,
    date: "Dec 2025",
  },
  {
    id: 3,
    title: "Nebula Player",
    description: "Netflix-style local media streaming player with React, Express.js, and FFmpeg. Features TMDB API integration for automatic metadata, on-the-fly transcoding, and playback tracking with resume functionality.",
    tags: ["React", "Express.js", "FFmpeg", "TMDB API", "TypeScript"],
    github: "https://github.com/Anish2905/Nebula-Player",
    external: null,
    featured: true,
    date: "Oct 2025",
  },
  {
    id: 4,
    title: "PCOSVision",
    description: "CNN model to detect PCOS from ultrasound images using TensorFlow/Keras. Includes data preprocessing, early stopping, model checkpointing, and ROC curve evaluation for diagnostic accuracy.",
    tags: ["Python", "TensorFlow", "CNN", "OpenCV", "Medical AI"],
    github: "https://github.com/Anish2905/PCOSVision",
    external: null,
    featured: true,
    date: "Mar 2025",
  },
  {
    id: 5,
    title: "Tic-Tac-Toe Sliding",
    description: "Modern neon-themed Tic-Tac-Toe game with animated win effects, fluid scaling, and unique move limit mechanic. Fully mobile-responsive with touch support.",
    tags: ["JavaScript", "CSS", "HTML", "Game Dev"],
    github: "https://github.com/Anish2905/tic-tac-toe-sliding",
    external: "https://tic-tac-toe-git-main-anish2905s-projects.vercel.app/",
    featured: false,
    date: "2025",
  },
  {
    id: 6,
    title: "Music Controller - Squid Game",
    description: "Python GUI app with Tkinter and Pygame for audio playback. Implements 'Red Light, Green Light' logic with play/pause automation and event-driven programming.",
    tags: ["Python", "Tkinter", "Pygame", "GUI"],
    github: "https://github.com/Anish2905/Music-Controller---Squid-Game-Red-Light-Green-Light",
    external: null,
    featured: false,
    date: "Jan 2025",
  },
] as const;

export const TERMINAL_COMMANDS: Record<string, string> = {
  whoami: `
  ╭─────────────────────────────────────────╮
  │           ANISH SHARMA                  │
  │          DevOps Engineer                │
  ╰─────────────────────────────────────────╯
  
  🎓 B.Tech CSE (AIML) @ UEM Kolkata (Graduating July 2026)
  📍 Based in Kolkata, India
  
  I build reliable infrastructure and automate everything.
  Docker, Kubernetes, Terraform, and CI/CD pipelines are
  my daily tools. Python and Bash scripts are my sidekicks.
  
  Currently working on: Infrastructure automation, GitOps
  
  ✓ Open to DevOps/SRE opportunities
`,
  help: `
  ╭─────────────────────────────────────────╮
  │           AVAILABLE COMMANDS            │
  ╰─────────────────────────────────────────╯
  
    whoami     →  Who am I? Quick intro
    skills     →  My technical toolkit
    projects   →  What I've built
    exp        →  Work experience
    certs      →  Certifications earned
    contact    →  How to reach me
    socials    →  My online presence
    stack      →  DevOps tech stack
    clear      →  Clear the terminal
`,
  stack: `
  ╭─────────────────────────────────────────╮
  │          DEVOPS TECH STACK              │
  ╰─────────────────────────────────────────╯
  
  CONTAINERS & ORCHESTRATION
  ├─ Docker      ████████████░░  Containerization
  ├─ Kubernetes  ████████████░░  Orchestration
  └─ Helm        ████████░░░░░░  Package Manager
  
  INFRASTRUCTURE AS CODE
  ├─ Terraform   ████████████░░  IaC
  └─ Ansible     ████████░░░░░░  Config Mgmt
  
  CI/CD & AUTOMATION
  ├─ Harness     ████████████░░  Primary Platform
  ├─ GitHub Actions  ████████████░░  Workflows
  └─ Jenkins     ████████░░░░░░  Legacy Pipelines
  
  SCRIPTING
  ├─ Python      ████████████░░  Automation
  └─ Bash        ████████████░░  Shell Scripts
`,
  skills: `
  ╭─────────────────────────────────────────╮
  │          TECHNICAL TOOLKIT              │
  ╰─────────────────────────────────────────╯
  
  INFRASTRUCTURE
  ├─ Docker      ████████████░░  Containers
  ├─ Kubernetes  ████████████░░  Orchestration
  ├─ Terraform   ████████████░░  IaC
  └─ Linux       ████████████░░  System Admin
  
  AUTOMATION
  ├─ Python      ████████████░░  Scripting
  ├─ Bash        ████████████░░  Shell
  └─ CI/CD       ████████████░░  Pipelines
  
  PLATFORMS
  ├─ Harness     ████████████░░  DevOps Platform
  ├─ AWS         ████████░░░░░░  Cloud
  └─ Git/GitHub  ████████████░░  Version Control
`,
  projects: `
  ╭─────────────────────────────────────────╮
  │          FEATURED PROJECTS              │
  ╰─────────────────────────────────────────╯
  
  🔍 CODERAG
     AI-powered codebase search using RAG
     Python • ChromaDB • FastAPI • Docker
     
  💼 CAREERFLOW
     Offline-first job application tracker
     JavaScript • IndexedDB • Turso • PWA
     
  🎬 NEBULA PLAYER
     Netflix-style local media streaming app
     React • Express • FFmpeg • TMDB API
     
  🏥 PCOSVISION
     CNN model for PCOS detection from ultrasound
     TensorFlow • OpenCV • Medical AI
  
  → Type 'socials' to visit my GitHub
`,
  exp: `
  ╭─────────────────────────────────────────╮
  │          WORK EXPERIENCE                │
  ╰─────────────────────────────────────────╯
  
  ┌─ DEVOPS ENGINEER
  │  Current Role
  │  Jan 2026 - Present
  │
  │  • CI/CD pipeline development with Harness
  │  • Container orchestration (Docker + K8s)
  │  • Infrastructure as Code with Terraform
  │  • Automation scripts in Python & Bash
  └────────────────────────────────────────
  
  ┌─ PROCESS ASSOCIATE
  │  Sun Knowledge Services Inc.
  │  Mar 2025 - Oct 2025
  │
  │  • Healthcare data verification for US facilities
  │  • SQL-based RCM workflow optimization
  │  • Built analytics dashboards for revenue tracking
  └────────────────────────────────────────
`,
  certs: `
  ╭─────────────────────────────────────────╮
  │          CERTIFICATIONS                 │
  ╰─────────────────────────────────────────╯
  
  ✓ Harness Certified Code Repository Developer
  ✓ Google Cybersecurity Professional
  ✓ Databricks Fundamentals Accreditation
  ✓ Generative AI Fundamentals Accreditation
`,
  socials: `
  ╭─────────────────────────────────────────╮
  │          FIND ME ONLINE                 │
  ╰─────────────────────────────────────────╯
  
  GitHub      github.com/Anish2905
  LinkedIn    linkedin.com/in/anish-sharma-82689a159
  Instagram   instagram.com/anish.log
  Email       anishsharma.tech@gmail.com
`,
  contact: `
  ╭─────────────────────────────────────────╮
  │          LET'S CONNECT                  │
  ╰─────────────────────────────────────────╯
  
  📧 Email    anishsharma.tech@gmail.com
  📱 Phone    +91 9874994511
  
  I'm always excited to discuss:
  • DevOps & SRE opportunities
  • Infrastructure automation projects
  • Cloud native technologies
  
  Let's build something reliable together! 🚀
`,
};

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/Anish2905", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/anish-sharma-82689a159", icon: "linkedin" },
  { name: "Instagram", url: "https://www.instagram.com/anish.log", icon: "instagram" },
  { name: "Email", url: "mailto:anishsharma.tech@gmail.com", icon: "email" },
] as const;
