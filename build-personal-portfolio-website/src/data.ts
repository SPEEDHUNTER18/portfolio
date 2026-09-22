/* ------------------------------------------------------------------
   JEEVAN M — PORTFOLIO DATA
   AI/ML Junior Engineer, Full Stack Developer & Data Analyst
------------------------------------------------------------------- */

export const profile = {
  fullName: "JEEVAN M",
  firstName: "JEEVAN",
  lastName: "M",
  initials: "JM",
  role: "AI/ML Engineer & Full Stack Dev",
  tagline: "AI/ML • Full Stack • Data Analytics",
  location: "Bengaluru, Karnataka, India",
  email: "jeevanmunisanjeeva@gmail.com",
  phone: "+91 9036179533",
  availability: "Open to exciting opportunities & roles",
  summary:
    "To secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company.",
  about:
    "I am an AI/ML Junior Engineer and Full Stack Developer based in Bengaluru. My journey bridges machine learning model training with high-performance web and mobile application engineering. From building semantic legal search engines and Power BI cohort dashboards to workforce mobile apps and cloud workflows, I turn data and code into real-world impact.",
  stats: [
    { value: "8.75", label: "MCA CGPA" },
    { value: "5+", label: "Key Projects" },
    { value: "4", label: "Certifications" },
    { value: "4", label: "Languages" },
  ],
  socials: [
    { label: "Email", url: "mailto:jeevanmunisanjeeva@gmail.com" },
    { label: "Phone", url: "tel:+919036179533" },
    { label: "GitHub", url: "https://github.com" },
    { label: "LinkedIn", url: "https://linkedin.com" },
  ],
};

export const education = [
  {
    degree: "MCA — Artificial Intelligence, Machine Learning & Data Science",
    institution: "S-Vyasa University",
    period: "2026 — 2027",
    score: "CGPA: 8.75 / 10",
    highlight: "Specialized in advanced deep learning, statistical modeling, data science architectures, and intelligent systems.",
  },
  {
    degree: "BCA — Bachelor of Computer Applications",
    institution: "KLE Society’s Degree College, Nagarabhavi, Bengaluru",
    period: "2022 — 2025",
    score: "CGPA: 7.8 / 10",
    highlight: "Core computer science fundamentals: algorithms, relational databases, software engineering, and web development.",
  },
  {
    degree: "Pre-University Course (2nd PUC / 12th)",
    institution: "Surana PU College, Kengeri, Bengaluru",
    period: "2021 — 2022",
    score: "Percentage: 60.66%",
    highlight: "Pre-university education building analytical reasoning, mathematics, science, and fundamental computing concepts.",
  },
  {
    degree: "Secondary School (10th Standard / SSLC)",
    institution: "Carmel Public School, Kengeri, Bangalore",
    period: "2019 — 2020",
    score: "Percentage: 76.64%",
    highlight: "Foundational academic education, active in extracurricular activities, sports (cricket, volleyball), and early computer studies.",
  },
];

export const experienceData = [
  {
    role: "AIML Intern / Junior Engineer",
    company: "Advi Groups",
    period: "Recent Experience",
    type: "Internship / Full-time Engagement",
    description:
      "Contributed to the development and deployment of machine learning models and intelligent systems. Assisted in end-to-end data collection, preprocessing pipelines, and exploratory data analysis (EDA) to prepare robust datasets for model training and performance validation.",
    tags: ["Machine Learning", "EDA", "Data Preprocessing", "Python", "Model Deployment"],
  },
];

export const projects = [
  {
    index: "01",
    title: "Gen Gizz",
    subtitle: "Workforce Management & Job Discovery App",
    techStack: ["Android Studio", "Dart", "Cloud Firestore"],
    category: "Mobile Application",
    year: "2024",
    description:
      "An all-in-one workforce management and job discovery Android application. Enables employees and freelancers to log daily attendance with precise login/logout tracking, automatically calculating total billable hours worked per session. Includes an integrated job discovery portal allowing users to browse opportunities straight from their phone.",
    highlights: [
      "Automated attendance logging with timestamp verification",
      "Dynamic session & cumulative hour calculation engine",
      "Integrated career & job opportunity search aggregator",
      "Cloud Firestore real-time database synchronization",
    ],
  },
  {
    index: "02",
    title: "E-Commerce Sales Performance Dashboard",
    subtitle: "Business Intelligence & Cohort Analysis",
    techStack: ["Power BI", "DAX", "KPI Design", "Data Modeling"],
    category: "Data Analytics & BI",
    year: "2024",
    description:
      "An interactive end-to-end business intelligence solution built in Power BI providing executive-level visibility into e-commerce revenue streams and customer retention. Features cohort retention matrices to analyze buying behavior over time and uncover trends across product categories, jurisdictions, and seasonal periods.",
    highlights: [
      "Custom DAX measures for retention, churn rate, and LTV",
      "Cohort analysis matrix tracking repeat-purchase cycles",
      "Interactive multi-dimensional drill-downs across categories",
      "Real-time KPI scorecards for executive stakeholders",
    ],
  },
  {
    index: "03",
    title: "Legal Semantic Search",
    subtitle: "Context-Aware Court Case NLP Retrieval",
    techStack: ["Streamlit", "Python", "SQLite", "Semantic Search / NLP"],
    category: "AI / Natural Language Processing",
    year: "2024",
    description:
      "A smart, structured court case repository that abandons brittle keyword matching for vector semantic search. Understands the nuanced legal meaning behind queries so attorneys, researchers, and students can retrieve relevant case law even without knowing exact technical terminology.",
    highlights: [
      "Semantic similarity engine matching queries by intent & context",
      "Structured metadata indexing: case name, court, jurisdiction, verdict",
      "Intuitive Streamlit UI with rapid filtering & case preview",
      "Lightweight SQLite backing for instant vector/record queries",
    ],
  },
  {
    index: "04",
    title: "MockTrack",
    subtitle: "Gamified Coding Quiz & Assessment Platform",
    techStack: ["Android Studio", "Dart", "Firebase", "Gamification"],
    category: "Mobile Application",
    year: "2023",
    description:
      "An interactive Android study companion designed to make learning programming languages fun and engaging through gamified, topic-wise quizzes. Users attempt timed multiple-choice assessments across languages, track score progressions, and prepare for technical interviews and college exams.",
    highlights: [
      "Topic-wise quiz sets covering multiple programming languages",
      "Timed test mode simulating real interview environments",
      "Dynamic score tracking and historical progress graphs",
      "Firebase backend with user state persistence",
    ],
  },
  {
    index: "05",
    title: "Student Management System",
    subtitle: "Digitized Academic Record Management Portal",
    techStack: ["HTML", "Python", "Backend Integration", "Database CRUD"],
    category: "Web Application",
    year: "2023",
    description:
      "A complete web solution built to streamline and digitize student administration for educational institutions. Provides administrative staff and faculty with intuitive tools to manage personal details, enrollment records, attendance logs, grade books, and course allocations.",
    highlights: [
      "Full CRUD operations for student files and credentials",
      "Secure record updates and batch enrollment handling",
      "Attendance and grade report generation modules",
      "Clean, accessible web interface for faculty workflows",
    ],
  },
];

export const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "SQL", "Dart", "HTML5 / CSS3"],
  },
  {
    category: "Frontend & Mobile",
    skills: ["React.js", "React Native", "Android Studio", "UI/UX Design", "Electron"],
  },
  {
    category: "Backend & Databases",
    skills: ["Node.js", "MongoDB", "Firebase / Firestore", "SQLite", "REST APIs"],
  },
  {
    category: "AI, ML & Analytics",
    skills: ["EDA & Preprocessing", "Model Training", "Power BI", "DAX & KPI Design", "Streamlit NLP"],
  },
  {
    category: "Cloud, DevOps & Tools",
    skills: ["AWS (Academy Cloud Foundation)", "Google Colab", "Jira", "Figma", "VS Code", "Selenium"],
  },
  {
    category: "Soft Skills",
    skills: ["Communication", "Problem-Solving", "Team Leadership", "Adaptability"],
  },
];

export const certifications = [
  {
    name: "Data Analytics",
    issuer: "Udemy",
    tag: "Data Science & BI",
  },
  {
    name: "CyberSecurity",
    issuer: "Industry Certified",
    tag: "Security Fundamentals",
  },
  {
    name: "Python Programming",
    issuer: "Certified",
    tag: "Core & Advanced",
  },
  {
    name: "React.js",
    issuer: "Certified",
    tag: "Modern Frontend",
  },
  {
    name: "AWS Academy Cloud Foundation",
    issuer: "AWS Academy",
    tag: "Cloud Architecture",
  },
];

export const achievements = [
  {
    title: "Community & Volunteer Work",
    description: "Active participant in community initiatives, tech mentoring, and volunteer programs.",
  },
  {
    title: "Sports & Athletics",
    description: "Avid cricket and volleyball player — fostering team spirit, strategic agility, and resilience under pressure.",
  },
];

export const spokenLanguages = [
  { name: "English", level: "Professional Working" },
  { name: "Kannada", level: "Native / Fluent" },
  { name: "Hindi", level: "Conversational / Fluent" },
  { name: "Tamil", level: "Conversational" },
];

export const marqueeWords = [
  "Artificial Intelligence",
  "Machine Learning",
  "Power BI Analytics",
  "Full Stack React",
  "Python Engineering",
  "Android & Dart",
  "Cohort Analysis",
  "Cloud & AWS",
];
