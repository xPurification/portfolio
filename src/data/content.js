/**
 * Portfolio Content Data
 * =====================
 * All portfolio content in one place for easy updates.
 * Updated: January 2026
 */

export const profile = {
  name: "Devon Purification",
  title: "Software Developer & QA Engineer",
  tagline: "Full-Stack | AI/ML Integration | Test Automation",
  email: "devon.purification@gmail.com",
  phone: "(954) 789-7091",
  linkedin: "linkedin.com/in/devonpurification",
  github: "github.com/xPurification",
  portfolio: "devon-purification.vercel.app",
  summary: `Software Developer and QA Engineer with 2+ years specializing in full-stack development, AI/ML integration, and test automation. Expert in Python/JavaScript automation frameworks, API testing, and CI/CD pipelines. Proven ability to leverage LLMs for workflow optimization.`,
};

export const experience = [
  {
    id: 1,
    title: "QA Engineer",
    company: "MyBambu",
    type: "Digital Payment Platform",
    location: "West Palm Beach, FL",
    startDate: "May 2025",
    endDate: "November 2025",
    highlights: [
      "Engineered test automation frameworks using Python (Pytest) and JavaScript (Selenium), reducing manual testing by 40% across iOS, Android, and web platforms.",
      "Designed 500+ automated test cases for REST APIs and microservices using Postman, validating payment processing, KYC compliance, and authentication workflows.",
      "Identified and resolved 300+ defects using NewRelic, AWS CloudWatch, and Firebase, reducing production incidents by 25%.",
      "Implemented CI/CD integration with GitHub Actions, reducing deployment time by 30%; integrated Claude and Gemini for test automation.",
    ],
  },
  {
    id: 2,
    title: "Software Engineering Researcher",
    company: "Florida Atlantic University",
    type: "AI/ML Research Lab",
    location: "Boca Raton, FL",
    startDate: "January 2024",
    endDate: "August 2024",
    highlights: [
      "Developed deep learning models using TensorFlow and PyTorch, achieving 15% improvement in brain segmentation accuracy and 92% Alzheimer's detection precision.",
      "Built data processing pipelines with Pandas/NumPy to preprocess 10,000+ medical imaging datasets; utilized Claude API for research automation.",
    ],
  },
  {
    id: 3,
    title: "Engineering Intern",
    company: "Motorola Solutions Inc.",
    type: "Internship",
    location: "Fort Lauderdale, FL",
    startDate: "June 2018",
    endDate: "August 2019",
    highlights: [
      "Assisted in debugging C++ codebase and analyzing system logs to support software quality assurance initiatives.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  minor: "Artificial Intelligence",
  school: "Florida Atlantic University",
  location: "Boca Raton, FL",
  startDate: "August 2021",
  endDate: "August 2024",
  gpa: "3.71/4.0",
  honors: ["Magna Cum Laude", "President's List", "Dean's List"],
  coursework: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Structures and Algorithms",
    "Digital Image Processing",
    "Full-Stack Web Development",
    "Operating Systems",
  ],
};

export const skills = {
  languages: ["Python", "JavaScript", "Java", "SQL", "C/C++", "HTML/CSS"],
  testing: ["Selenium", "Appium", "Pytest", "Postman", "Jest", "JUnit", "TestRail", "Katalon Studio", "XCode"],
  frameworks: ["React", "Node.js", "Spring Boot", "TensorFlow", "PyTorch", "Django", "Claude API", "Gemini", "AWS", "Docker", "Git", "Jira"],
  databases: ["MySQL", "MongoDB", "PostgreSQL"],
};

export const projects = [
  {
    id: 1,
    title: "SmartQA Agent",
    description: "AI-powered test automation agent using Claude API that analyzes web applications, generates test cases, and executes automated tests with minimal human intervention.",
    techStack: ["Python", "Claude API", "Selenium", "FastAPI"],
    github: "https://github.com/xPurification",
    live: null,
    highlights: [
      "Built autonomous QA agent using Claude API that analyzes web applications, generates test cases, and executes automated tests with minimal human intervention",
      "Implemented intelligent test case prioritization and self-healing test scripts that automatically adapt to UI changes"
    ],
    year: "2026",
    category: "AI/ML Automation",
    featured: true,
  },
  {
    id: 2,
    title: "AI Code Review Assistant",
    description: "CLI tool that performs automated code reviews using Gemini, analyzing pull requests and local code for bugs, security vulnerabilities, and code quality issues.",
    techStack: ["Python", "Gemini API", "GitHub API", "Click"],
    github: "https://github.com/xPurification",
    live: null,
    highlights: [
      "Developed CLI tool that performs automated code reviews using Gemini, analyzing pull requests and local code for bugs, security vulnerabilities, and code quality issues",
      "Implemented GitHub API integration to fetch PRs and generate detailed review reports with actionable suggestions"
    ],
    year: "2026",
    category: "AI/ML Automation",
    featured: true,
  },
];
