
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';

import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

import figmaLogo from './assets/tech_logo/figma.png';

import vercelLogo from './assets/tech_logo/vercel.png';
import mcLogo from './assets/tech_logo/mc.png'

// Experience Section Logo's
import internpeLogo from './assets/company_logo/internpe.jpeg';


// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import school from './assets/education_logo/school.jpeg';


// Project Section Logo's

import crm from './assets/work_logo/crm.png';
import donation from './assets/work_logo/donation.jpg'
import weather from './assets/work_logo/weather.png'



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
    //  { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Compass', logo: mcLogo },

    ],
  },
];


export const experiences = [
  {
    id: 0,
    img: internpeLogo,
    role: "Website Developer Intern",
    company: "InternPe",
    date: "June 2024 – July 2024",
    desc: "Developed responsive web templates for internal projects using HTML5, CSS, and JavaScript. Strengthened both front-end and back-end development skills by working on real-world client-facing applications.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Front-end Development",
      "Back-end Basics",
    ],
  },
  {
    id: 1,
    img: glaLogo,
    role: "Trainee - Job Oriented Value-Added Course",
    company: "GLA University, Mathura",
    date: "June 2023 – July 2023",
    desc: "Learned HTML, CSS, and JavaScript fundamentals through hands-on sessions. Built a Weather-App using JavaScript with real-time API data fetching.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "API Integration",
      "Problem Solving",
      "Front-end Basics",
    ],
  },
];
  
 export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "GLA University, Mathura",
    date: "Aug 2022 - June 2026",
    grade: "7.9/79%",
    desc: "Currently pursuing Bachelor of Technology in Computer Science from GLA University, Mathura. Gaining strong foundation in programming, software development, and computer science concepts, including Data Structures, Algorithms, OOP, Web Development, and Database Management Systems.",
    degree: "Bachelor of Technology - B.Tech (Computer Science)",
  },
  {
    id: 1,
    img: school, 
    school: "Aditya Birla Intermediate College, Sonbhadra",
    date: "May 2022",
    grade: "62.4%",
    desc: "Completed Intermediate education focusing on core science subjects and computer fundamentals, developing problem-solving and analytical skills.",
    degree: "Intermediate (Class XII) - PCM",
  },
  {
    id: 2,
    img: school, 
    school: "Aditya Birla Intermediate College, Sonbhadra",
    date: " May 2020",
    grade: "86%",
    desc: "Completed High School education with focus on Science subjects including Physics, Chemistry, Mathematics, and Computer Science.",
    degree: "High School (Class X) - Science ",
  },
];

 export const projects = [
  {
    id: 0,
    title: "Support Desk – CRM Ticketing System",
    description:
      "Built a helpdesk tool for managing customer queries with ticket creation, status tracking, and priority levels. Designed a clean, responsive UI for efficient customer support workflows.",
    image: crm, 
    tags: ["React.js", "Bootstrap", "Node.js", "Express.js", "MongoDB", "UI/UX Design"],
    github: "https://github.com/deepanjali1206/CRM-Ticket-System.git", 
    webapp: "#",
  },
  {
    id: 1,
    title: "Donation Platform – Fundraising Website",
    description:
      "Developed a secure donation platform with donor registration, donation tracking, and a user-friendly dashboard. Ensured smooth and secure donation process for users.",
    image: donation, 
    tags: ["React.js","Vue.js", "Bootstrap", "Node.js", "Express.js", "MongoDB", "Dashboard Design"],
    github: "https://github.com/deepanjali1206/Donation_platform.git", 
    webapp: "#", 
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Built a Weather App using JavaScript with real-time API data fetching. Users can check current weather conditions, temperature, and other relevant weather information based on their location.",
    image: weather,
    tags: ["HTML", "CSS", "JavaScript", "API Integration", "Front-end Development"],
    github: "https://github.com/deepanjali1206/Weather-App", 
    webapp: "#", 
  },
];
