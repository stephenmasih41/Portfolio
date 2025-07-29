// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a self-taught web programmer who has built my skills primarily through online certifications and hands-on projects. I have a strong foundation in HTML, CSS, JavaScript, React, Python, TailwindCSS, and TypeScript. My learning journey has equipped me to create dynamic, responsive web applications with clean, maintainable code. I am eager to apply my skills in a front-end development role where I can continue growing and contribute to impactful projects.`;

export const ABOUT_TEXT = `I began programming in 11th grade with Python and expanded my knowledge through courses on web development and networking during college. Recently, I completed certifications through YouTube and Scrimba, and now I’m excited to start applying for front-end developer roles to grow my skills further.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Shift Supervisor",
    company: "The Rec Room",
    description: `Led team operations in a high-volume entertainment venue, managing staff, customer service, and facility oversight. Handled conflict resolution, safety compliance, and financial reporting while driving team performance.`,
    technologies: ["Microsoft Teams", "Workday", "Achievers"],
  },
  {
    year: "2023 - 2024",
    role: "Desktop Technician",
    company: "Georgian College",
    description: `Provided campus-wide IT support, troubleshooting hardware/software issues and deploying equipment. Translated technical solutions for non-technical users and assisted with system upgrades.`,
    technologies: ["ServiceNow", "Windows Powershell", "macOS"],
  },
  {
    year: "2022 - 2023",
    role: "Service Desk Analyst",
    company: "Ministry of Public and Business Service Delivery",
    description: `Resolved government employee IT issues via ticketing system, maintaining SLAs. Managed system access, account troubleshooting, and escalated complex cases to technical teams.`,
    technologies: ["BMC", "Powershell", "Ticketing System"],
  },
];

export const PROJECTS = [
  {
    title: "Van-Life",
    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A van rental website with multiple pages and smooth navigation.",
    technologies: ["React", "React Router", "JavaScript", "CSS", "Mirage JS"],
    link: "https://van-life-22.netlify.app/",
  },
  {
    title: "Dashboard",
    image:
      "https://plus.unsplash.com/premium_photo-1720510809329-4dc87ef583af?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Chrome dashboard with Cryto prices, weather updates, and Unsplash images.",
    technologies: [
      "JavaScript",
      "Unsplash API",
      "CoinGecko API",
      "OpenWeather API",
      "CSS",
      "HTML",
    ],
    link: "https://dashboard-15.netlify.app/",
  },
  {
    title: "Meme Generator",
    image:
      "https://images.unsplash.com/photo-1610898564097-e28bd69740a4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Interactive meme creation tool consuming external APIs for images, featuring drag-and-drop functionality and custom text overlay capabilities.",
    technologies: ["React", "Imgflip API", "CSS"],
    link: "https://meme-generator-19.netlify.app/",
  },
  {
    title: "Weather Application",
    image:
      "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description:
      "Real-time weather forecasting app with dynamic background changes based on weather conditions.",
    technologies: ["React", "Tailwind CSS", "OpenWeather API"],
    link: "https://weather-app-react-project-3.netlify.app/",
  },
  {
    title: "Leads Tracker",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description:
      "A Progressive Web App (PWA) for tracking leads, built using Firebase Realtime Database.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase", "PWA"],
    link: "https://leads-tracker-project-7.netlify.app/",
  },
  {
    title: "Color Generator",
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description:
      "Dynamic color scheme generator producing 5-color palettes with seven modes.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://color-generator-14.netlify.app/",
  },
  {
    title: "Password Generator",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Generates two secure passwords at the click of a button.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://password-generator-project-5.netlify.app/",
  },
  {
    title: "Pokémon Search App",
    image:
      "https://images.unsplash.com/photo-1590955559496-50316bd28ff2?q=80&w=911&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Search for any Pokémon by name or number to see its details, stats, and image.",
    technologies: ["HTML", "CSS", "JavaScript", "PokeAPI"],
    link: "https://pokemon-search-5-project.netlify.app/",
  },
  {
    title: "Tenzies Game",
    image:
      "https://images.unsplash.com/photo-1547638375-ebf04735d792?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A fun and interactive dice game built with React!",
    technologies: ["React", "CSS", "Confetti", "nanoid"],
    link: "https://tenzies-20.netlify.app/",
  },
];
export const CONTACT = {
  address: "Barrie Ontario, 0N L4M 1Y9 ",
  phoneNo: "+1 249 989 2593 ",
  email: "stephenmasih39@gmail.com",
};

export const CERTIFICATES = [
  {
    title: "Responsive Web Design",
    provider: "FreeCodeCamp",
    technologies: ["HTML", "CSS", "Flexbox", "Grid"],
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    provider: "FreeCodeCamp",
    technologies: ["JavaScript", "Algorithms", "Data Structures"],
  },
  {
    title: "Frontend Developer Career Path",
    provider: "Scrimba",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Prompt Engineering for Web Developers",
    provider: "Scrimba",
    technologies: ["Prompt Engineering", "AI Tools"],
  },
  {
    title: "Learn Typescript",
    provider: "Scrimba",
    technologies: ["TypeScript", "JavaScript"],
  },
  {
    title: "Tailwind CSS",
    provider: "Scrimba",
    technologies: ["Tailwind CSS", "CSS"],
  },
  {
    title: "Learn Python",
    provider: "Scrimba",
    technologies: ["Python"],
  },
];
