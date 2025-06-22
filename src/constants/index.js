import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  infosys,
  technova,
  shopsmart,
  containersec,
  aiimage,
  gamingcert, 
  healthvault,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",  
  },
  {
    id: "achievements",
    title: "Achievements", 
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Cloud Engineer",
    icon: backend,
  },
  {
    title: "Full Stack Engineer", 
    icon: backend, 
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Java Developer Intern",
    company_name: "Infosys Springboard",
    icon: infosys,
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2024",
    points: [
      "Completed a virtual internship with a focus on Java full stack development.",
      "Built and deployed REST APIs using Spring Boot and integrated them with React.js frontend.",
      "Worked with MySQL and Hibernate for efficient data persistence.",
      "Gained hands-on experience in full-stack software development life cycle.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Technova",
    icon: technova,
    iconBg: "#383E56",
    date: "Jan 2025 - Mar 2025",
    points: [
      "Developed responsive user interfaces using React.js and Tailwind CSS.",
      "Worked in a collaborative environment using Git and Agile practices.",
      "Built modular components to improve performance and reusability.",
      "Participated in code reviews and UI/UX improvement sessions.",
    ],
  },
];

const achievements = [
  {
    title: "Gaming Applications Development – 1st Place",
    event: "Forge Alumnus Code-a-thon, March 2024",
    description: [
      "Developed interactive desktop games using Java AWT with custom GUI and real-time event handling.",
      "Built responsive web-based games using React and Angular frameworks.",
      "Optimized application performance and ensured cross-device compatibility.",
    ],
    image: gamingcert,
  },
  {
    title: "HealthVault – 3rd Place",
    event: "IIT Hyderabad Hackathon, March 30, 2024",
    description: [
      "Developed a secure digital health platform with BMI tracking and encrypted medical storage.",
      "Built using React, Node.js, and MongoDB.",
      "Ranked 3rd among 50+ teams for innovation and technical execution.",
    ],
    image: healthvault,
  },
];

const projects = [
  {
    name: "ShopSmart - MERN eCommerce Website",
    description:
      "A full-stack eCommerce website built using the MERN stack with complete authentication, cart management, and secure payment integration.",
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: shopsmart,
    source_code_link: "https://github.com/", // Replace with your GitHub repo if available
  },
  {
    name: "Autonomous Container Security System",
    description:
      "A real-time system for vulnerability scanning and threat prevention in container environments, integrated with CIS/NIST policies and live dashboards.",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "green-text-gradient",
      },
      {
        name: "Prometheus",
        color: "pink-text-gradient",
      },
      {
        name: "Grafana",
        color: "blue-text-gradient",
      },
    ],
    image: containersec,
    source_code_link: "https://github.com/", 
  },
  {
    name: "AI Image Generator",
    description:
      "A modern web app using OpenAI's DALL·E model to generate images from textual prompts, allowing users to explore creativity through AI.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "pink-text-gradient",
      },
    ],
    image: aiimage,
    source_code_link: "https://github.com/", 
  },
];


export { services, technologies, experiences, achievements, projects };
