export const PORTFOLIO_DATA = {
  personal: {
    name: "Shibam Ghosh",
    role: "Full-Stack & Java Backend Engineer",
    tagline: "Specialized in Core Java, JDBC, MySQL, React.js & Spring Boot",
    bio: "Software developer passionate about high-performance Java backends, multithreaded architecture, database design with MySQL/JDBC, and modern interactive React frontends.",
    status: "Available for Hire / Roles",
    location: "Kolkata, West Bengal, India / Remote",
    email: "gshibam632@gmail.com",
    github: "https://github.com/Shibam45",
    linkedin: "https://www.linkedin.com/in/shibamghosh/",
    twitter: "https://x.com/ShibamG950551",
    resumeUrl: "#",
    avatar: "/hero.png"
  },

  stats: [
    { label: "Core Skills Mastered", value: "8+" },
    { label: "Java & Web Builds", value: "15+" },
    { label: "Code Commits", value: "1.2K+" },
    { label: "Problem Solving", value: "100%" }
  ],

  aboutHighlights: [
    {
      title: "Core Java & Multithreading",
      description: "Proficient in object-oriented design, concurrent programming, thread pools, and memory management."
    },
    {
      title: "Database Architecture",
      description: "Experienced with relational database modeling, JDBC connectivity, SQL query optimization, and MySQL schema design."
    },
    {
      title: "Modern React Frontends & Spring Learning",
      description: "Crafting interactive client applications with React while expanding backend capabilities using Spring Framework & Spring Boot."
    }
  ],

  skillCategories: [
    { id: "all", name: "All Skills" },
    { id: "java", name: "Java & Core" },
    { id: "backend", name: "Backend & Database" },
    { id: "frontend", name: "Frontend & Web" }
  ],

  skills: [
    { name: "Core Java", category: "java", level: 92, icon: "Code" },
    { name: "Multithreading & Concurrency", category: "java", level: 88, icon: "Cpu" },
    { name: "JDBC", category: "backend", level: 88, icon: "Server" },
    { name: "MySQL", category: "backend", level: 90, icon: "Database" },
    { name: "Spring / Spring Boot (Learning)", category: "backend", level: 75, icon: "Layers" },
    { name: "React.js", category: "frontend", level: 92, icon: "Code" },
    { name: "JavaScript (ES6+)", category: "frontend", level: 90, icon: "FileCode" },
    { name: "HTML5 / CSS3 / Tailwind", category: "frontend", level: 88, icon: "Palette" },
    { name: "Git & GitHub", category: "java", level: 90, icon: "GitBranch" },
    { name: "RESTful API Design", category: "backend", level: 85, icon: "Network" }
  ],

  experience: [
    {
      period: "2024 - Present",
      role: "Java & Full-Stack Developer",
      company: "Independent Projects & Learning",
      type: "Projects / Open-Source",
      description: "Developing robust Java applications, multithreaded utilities, JDBC database wrappers, and React frontend dashboards.",
      achievements: [
        "Architected multi-threaded Java applications optimizing CPU execution & thread management.",
        "Built custom JDBC connectivity layers with MySQL for transaction safety & persistence.",
        "Currently mastering Spring Boot & REST service development for enterprise systems."
      ],
      technologies: ["Core Java", "Multithreading", "JDBC", "MySQL", "Spring", "React.js"]
    }
  ],

  projectCategories: [
    { id: "all", name: "All Projects" },
    { id: "java", name: "Java & Database" },
    { id: "web", name: "React Applications" }
  ],

  projects: [
    {
      id: "project-1",
      title: "Java Multithreaded Banking Engine",
      category: "java",
      featured: true,
      tagline: "Concurrent transaction processing system with thread safety and JDBC persistence.",
      description: "A high-performance Java banking server using multithreading, synchronized locks, and JDBC MySQL persistence for safe concurrent account deposits and withdrawals.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Core Java", "Multithreading", "JDBC", "MySQL", "OOP"],
      liveUrl: "https://github.com/Shibam45",
      githubUrl: "https://github.com/Shibam45",
      metrics: ["Thread Safe", "ACID Compliant", "Zero Race Conditions"]
    },
    {
      id: "project-2",
      title: "Spring Boot & React Management Suite",
      category: "java",
      featured: true,
      tagline: "Enterprise REST API backend integration with React frontend client.",
      description: "An ongoing full-stack application connecting Spring Boot REST endpoints with MySQL database schema and a sleek React.js dashboard.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
      technologies: ["Spring Boot", "Core Java", "React.js", "MySQL", "REST API"],
      liveUrl: "https://github.com/Shibam45",
      githubUrl: "https://github.com/Shibam45",
      metrics: ["Spring In Progress", "RESTful Architecture", "Responsive UI"]
    }
  ]
};
