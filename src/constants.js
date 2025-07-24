import htmlLogo from "./assets/html.png";
import cssLogo from "./assets/css.png";
import sassLogo from "./assets/sass.png";
import javascriptLogo from "./assets/javascript.png";
import reactjsLogo from "./assets/reactjs.png";
// import angularLogo from './assets/angular.png';
import reduxLogo from "./assets/redux.png";
import nextjsLogo from "./assets/nextjs.png";
import tailwindcssLogo from "./assets/tailwindcss.png";
import materialuiLogo from "./assets/materialui.png";
import bootstrapLogo from "./assets/bootstrap.png";
import nodejsLogo from "./assets/nodejs.png";
import expressjsLogo from "./assets/express.png";
// import mysqlLogo from './assets/mysql.png';
import mongodbLogo from "./assets/mongodb.png";
import firebaseLogo from "./assets/firebase.png";
import cLogo from "./assets/c.png";
import cppLogo from "./assets/cpp.png";
import typescriptLogo from "./assets/typescript.png";
import gitLogo from "./assets/git.png";
import githubLogo from "./assets/github.png";
import vscodeLogo from "./assets/vscode.png";
import postmanLogo from "./assets/postman.png";
import figmaLogo from "./assets/figma.png";
import netlifyLogo from "./assets/netlify.png";
import vercelLogo from "./assets/vercel.png";
import postgreLogo from "./assets/postgre.png";
import profileImage from "./assets/profile.png";
import shadcnuiLogo from "./assets/shadcn-ui.png";
import mysqlLogo from "./assets/mysql.png";
import webmentisLogo from "./assets/webmentis_logo.jpeg";
import talentriseLogo from "./assets/technokrate_logo.jpeg";
import medicineMartLogo from "./assets/MedicineMart_.png";
import marketingWebsiteLogo from "./assets/marketing_website.png";
import evtMngLogo from './assets/evt-mng-app.png';
import nsutLogo from './assets/NSUT_logo.png';
import rpvvLogo from './assets/rpvv.jpeg';

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Shadcn UI", logo: shadcnuiLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webmentisLogo,
    role: "Frontend Developer",
    company: "Webmentis Pvt Ltd",
    date: "Mar 2025 - Present",
    desc: "Collaborating closely with the design and backend teams to develop responsive, high-performance web applications using React.js, TypeScript, and Tailwind CSS. Implemented scalable UI components, optimized page performance, and integrated APIs using Postman. Contributed to projects built with Next.js and Redux for improved state management and routing. Ensured pixel-perfect designs by converting Figma mockups into functional web pages.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Next JS",
      "Postman",
      "Figma",
    ],
  },
  {
    id: 1,
    img: talentriseLogo,
    role: "ReactJS Developer Intern",
    company: "Talentrise Technokrate Pvt Ltd",
    date: "Feb 2025 - Apr 2025",
    desc: "Collaborating closely with the design and backend teams to develop responsive, high-performance web applications using React.js, TypeScript, and Tailwind CSS. Implemented scalable UI components, optimized page performance, and integrated APIs using Postman. Contributed to projects built with Next.js and Redux for improved state management and routing. Ensured pixel-perfect designs by converting Figma mockups into functional web pages.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Next JS",
      "Postman",
      "Figma",
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "Medicince Mart App",
    description:
      "A modern React + TypeScript app to search medicines, manage your cart, and book lab tests with ease. Includes smart medicine search, detailed info, cart control, and instant ordering. Book lab tests quickly through a responsive, user-friendly interface. Features responsive design, Framer Motion animations, and sleek icons via Lucide & React Icons.",
    image: medicineMartLogo,
    tags: ["HTML", "Tailwind CSS", "Typescript", "React JS"],
    personal: false,
    github: "https://github.com/S-Khan786/Medicine-Mart-App",
    webapp: "https://medicine-mart-app.netlify.app/",
  },
  {
    id: 1,
    title: "Marketing Website Frontend",
    description:
      "Marketing Website is a modern frontend project built with Next.js App Router, TypeScript, Tailwind CSS, and Material UI. It showcases clean routing, reusable components, and sleek page layouts for a business landing site. Deployed via Netlify, the project demonstrates component-driven design and scalable frontend architecture.",
    image: marketingWebsiteLogo,
    tags: ["Next JS", "TypeScript", "Tailwind CSS"],
    personal: false,
    github: "https://github.com/S-Khan786/Marketing-Website-Frontend",
    webapp: "https://marketing-website-app.netlify.app/",
  },
  {
    id: 2,
    title: "Event Management App",
    description:
      "Developed a real-time Event Management platform using the MERN stack and WebSockets, improving engagement by 35%. Implemented JWT authentication for security, designed a responsive UI with React.js, and optimized the backend with Node.js.",
    image: evtMngLogo,
    tags: ["React", "Node", "MongoDB", "Express", "Javascript"],
    personal: true,
    github: "https://github.com/S-Khan786/event-mng-app",
    webapp: "https://event-mng-app.onrender.com/login",
  },
];

export const education = [
  {
    id: 0,
    img: nsutLogo,
    school: "Netaji Subhas University of Technology, New Delhi",
    date: "Aug-2020 - Aug 2024",
    grade: "7.6 CGPA",
    desc: "I completed my B.Tech in Computer Science and Mathematics from NSUT Delhi. The course gave me a strong foundation in Data Structures, Algorithms, DBMS, Operating Systems, and Applied Mathematics. I also worked on projects using languages like C++, Python. This blend of computer science and mathematics helped me develop strong problem-solving and programming skills.",
    degree: "B.Tech in Computer Science and Mathematics",
  },
  {
    id: 1,
    img: rpvvLogo,
    school: "Rajkiya Pratibha Vikas Vidyalaya",
    date: "Apr 2018 - Apr 2019",
    grade: "90.6%",
    desc: "I completed my Class 12th with a Science stream, focusing on Physics, Chemistry, and Mathematics (PCM). This developed my analytical and logical thinking from an early stage. I gained a solid understanding of core scientific and mathematical concepts. This foundation played a key role in shaping my interest in technology and engineering.",
    degree: "CBSE(XII) - PCM",
  },
];
