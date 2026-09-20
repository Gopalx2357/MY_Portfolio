# Personal Portfolio Website

This is a modern, professional, recruiter-focused personal portfolio website built with React, Vite, and Tailwind CSS.

## Setup Instructions

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Run development server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Build for production:
   \`\`\`bash
   npm run build
   \`\`\`

4. Preview production build:
   \`\`\`bash
   npm run preview
   \`\`\`

## Where to Edit Your Information

All your personal information, links, and projects are centralized in the \`src/data/\` folder.

- **Social Links & Profiles:** Edit \`src/data/socialLinks.js\`
  - GitHub, LinkedIn, LeetCode, GeeksforGeeks, CodeChef, Codeforces, HackerRank, Instagram, WhatsApp, Email
- **Personal Information:** Edit \`src/data/profile.js\`
  - Name, role, intro, education details, and location
- **Projects:** Edit \`src/data/projects.js\`
  - Add or modify your projects, tech stacks, GitHub/Live links
- **Skills:** Edit \`src/data/skills.js\`
- **Achievements & Certifications:** Edit \`src/data/achievements.js\`

## Resume
Place your actual resume PDF file at \`public/resume.pdf\`. The placeholder file currently in the public directory is just a text file noting where it should go.

## Deployment to Vercel
This project is configured to be deployed to Vercel right out of the box.
1. Push your code to a GitHub repository.
2. Go to Vercel dashboard and click "Add New Project".
3. Import your repository.
4. Leave framework preset as "Vite" and click Deploy.

## Environment Variables
Copy \`.env.example\` to \`.env\` if you configure a contact form service (like EmailJS/Formspree) in the future.
