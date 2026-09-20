import fs from 'fs';
import path from 'path';

const SRC_DIR = './portfolio/src';

const dirs = [
  'components',
  'data',
  'hooks',
  'assets',
  'utils'
];

dirs.forEach(d => {
  fs.mkdirSync(path.join(SRC_DIR, d), { recursive: true });
});

const profileJs = `export const profile = {
  name: "Sri Krishna Gopal Yadav",
  role: "B.Tech CSE Student | Aspiring Software Engineer | Full Stack Developer",
  intro: "I am a B.Tech Computer Science student passionate about software development, full-stack web development, Data Structures & Algorithms, and building real-world applications. I enjoy solving programming problems, participating in hackathons, and continuously improving my skills through projects and practical development.",
  education: {
    degree: "B.Tech CSE",
    college: "ABES Engineering College",
    period: "2025-2029",
    semester: "[Current Semester Placeholder]",
    coursework: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"],
    achievements: [] // Add academic achievements here if any
  },
  location: "[Your Location Placeholder]"
};
`;
fs.writeFileSync(path.join(SRC_DIR, 'data/profile.js'), profileJs);

const socialLinksJs = `export const socialLinks = {
  github: "https://github.com/[your-username]",
  linkedin: "https://linkedin.com/in/[your-username]",
  leetcode: "https://leetcode.com/u/[your-username]",
  geeksforgeeks: "https://auth.geeksforgeeks.org/user/[your-username]",
  codechef: "https://www.codechef.com/users/[your-username]",
  codeforces: "https://codeforces.com/profile/[your-username]",
  hackerrank: "https://www.hackerrank.com/[your-username]",
  instagram: "https://instagram.com/[your-username]",
  whatsapp: "https://wa.me/[your-number]",
  email: "mailto:[your-email@example.com]"
};
`;
fs.writeFileSync(path.join(SRC_DIR, 'data/socialLinks.js'), socialLinksJs);

const projectsJs = `export const projects = [
  {
    title: "Warriors AI Interview Agent",
    description: "AI-powered interview practice platform simulating technical interviews.",
    problem: "Candidates often lack realistic technical interview practice before actual interviews.",
    technologies: ["React.js", "JavaScript", "AI APIs"],
    features: ["Real-time simulated interviews", "Feedback generation", "Customizable technical roles"],
    github: "https://github.com/[your-username]/warriors-ai",
    live: "",
    image: "",
    status: "Completed"
  },
  {
    title: "InterviewPrep",
    description: "Interview preparation resources and company-specific interview/OA notes.",
    problem: "Scattered interview preparation material making it hard for students to find company-specific notes.",
    technologies: ["React.js", "Node.js", "MongoDB", "Firebase", "Razorpay"],
    features: ["Company-wise interview experiences", "OA Notes", "Payment integration for premium material"],
    github: "https://github.com/[your-username]/interview-prep",
    live: "",
    image: "",
    status: "Completed"
  },
  {
    title: "AlgoArena",
    description: "Paid coding contest platform with registration, contests, problem solving, and leaderboard.",
    problem: "Lack of localized, monetizable competitive programming platforms for college-level contests.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Judge0 API"],
    features: ["User registration & payments", "Live leaderboard", "Automated code execution", "Admin dashboard"],
    github: "https://github.com/[your-username]/algo-arena",
    live: "",
    image: "",
    status: "Completed"
  },
  {
    title: "AI Proctor",
    description: "AI-based exam/coding proctoring concept detecting suspicious behavior.",
    problem: "Online assessments are prone to cheating without robust proctoring mechanisms.",
    technologies: ["Python", "OpenCV", "Machine Learning", "React.js"],
    features: ["Camera feed analysis", "Face detection", "Multiple person detection", "Suspicious activity flagging"],
    github: "https://github.com/[your-username]/ai-proctor",
    live: "",
    image: "",
    status: "In Progress"
  },
  {
    title: "RailGuard",
    description: "Train monitoring and anomaly detection platform using simulated telemetry.",
    problem: "Need for real-time monitoring of train parameters to predict and prevent failures.",
    technologies: ["Flask", "Python", "React.js", "WebSockets"],
    features: ["Live telemetry dashboard", "Anomaly detection alerts", "Historical data visualization"],
    github: "https://github.com/[your-username]/railguard",
    live: "",
    image: "",
    status: "Completed"
  },
  {
    title: "Stack Visualizer",
    description: "Interactive tool for understanding stack operations and data structures.",
    problem: "Students struggle to visualize stack operations (push, pop, peek) conceptually.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    features: ["Step-by-step operation visualization", "Custom input handling", "Responsive UI"],
    github: "https://github.com/[your-username]/stack-visualizer",
    live: "https://[your-username].github.io/stack-visualizer",
    image: "",
    status: "Completed"
  }
];
`;
fs.writeFileSync(path.join(SRC_DIR, 'data/projects.js'), projectsJs);

const skillsJs = `export const skills = {
  Languages: ["C++", "JavaScript", "Python", "Java"],
  Frontend: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Vite"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Databases: ["MongoDB", "Firebase", "SQL"],
  Tools: ["Git", "GitHub", "VS Code", "Postman"],
  "Core Concepts": ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"]
};
`;
fs.writeFileSync(path.join(SRC_DIR, 'data/skills.js'), skillsJs);

const achievementsJs = `export const achievements = [
  {
    title: "Bharat Build 2.0",
    type: "Hackathon",
    issuer: "[Issuer Placeholder]",
    year: "[Year Placeholder]",
    link: ""
  },
  {
    title: "AB Talks on AI / ViCoDathon",
    type: "Hackathon",
    issuer: "[Issuer Placeholder]",
    year: "[Year Placeholder]",
    link: ""
  },
  {
    title: "Hacksenergy",
    type: "Hackathon",
    issuer: "[Issuer Placeholder]",
    year: "[Year Placeholder]",
    link: ""
  },
  {
    title: "Deloitte Cyber Virtual Experience Program",
    type: "Virtual Experience",
    issuer: "Deloitte",
    year: "[Year Placeholder]",
    link: ""
  }
];
`;
fs.writeFileSync(path.join(SRC_DIR, 'data/achievements.js'), achievementsJs);

console.log("Data files scaffolded successfully.");
