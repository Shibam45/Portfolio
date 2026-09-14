export const PORTFOLIO_DATA = {
  personal: {
    name: "Shibam Ghosh",
    role: "Full-Stack & Java Backend Engineer",
    tagline: "Specialized in Core Java, Multithreading, JDBC, MySQL, React.js & Currently Learning Spring Boot",
    bio: "Software developer passionate about building high-performance Java backends, multithreaded architecture, database systems with MySQL/JDBC, and modern glassmorphic React frontends.",
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
    { label: "Real Projects Built", value: "4+" },
    { label: "Core Skills Mastered", value: "8+" },
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
      company: "Independent Projects & Open-Source",
      type: "Projects",
      description: "Developing robust Java applications, multithreaded services, JDBC database management systems, and React frontend dashboards.",
      achievements: [
        "Built glassmorphic Employee Management System (EMS) in React with Admin & Employee dashboards.",
        "Architected multi-threaded Banking Management Service with JDBC MySQL transaction locks.",
        "Engineered Hospital & Hotel reservation management systems with relational SQL schemas."
      ],
      technologies: ["Core Java", "Multithreading", "JDBC", "MySQL", "Spring Boot", "React.js", "Tailwind CSS"]
    }
  ],

  projectCategories: [
    { id: "all", name: "All Projects" },
    { id: "react", name: "React Frontend" },
    { id: "java", name: "Java & Database" }
  ],

  projects: [
    {
      id: "project-1",
      title: "Employee Management System (EMS)",
      category: "react",
      featured: true,
      tagline: "Modern glassmorphic Admin & Employee task management dashboard with real-time state tracking.",
      description: "A full-featured React web application built with Vite, Tailwind CSS v4, and Context API. Features Admin task assignment matrix, real-time employee task metrics, and interactive progress states (New, Active, Completed, Failed).",
      image: "/ems_preview.png",
      technologies: ["React.js", "Vite", "Tailwind CSS v4", "Context API", "LocalStorage"],
      liveUrl: "https://github.com/Shibam45/Employee-Management-System",
      githubUrl: "https://github.com/Shibam45/Employee-Management-System",
      metrics: ["Admin Control Panel", "Employee Dashboard", "Real-Time Matrix", "Glassmorphic UI"]
    },
    {
      id: "project-2",
      title: "Banking Management Service",
      category: "java",
      featured: true,
      tagline: "Multithreaded Java banking engine with thread-safe transactions & JDBC MySQL persistence.",
      description: "A high-performance concurrent banking system built in Core Java utilizing thread pools, synchronized locks, and JDBC database connection pooling for ACID-compliant account operations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Core Java", "Multithreading", "JDBC", "MySQL", "OOP"],
      liveUrl: "https://github.com/Shibam45",
      githubUrl: "https://github.com/Shibam45",
      metrics: ["Thread Safe", "ACID Transactions", "MySQL Schema", "Zero Race Conditions"]
    },
    {
      id: "project-3",
      title: "Hospital Management System",
      category: "java",
      featured: true,
      tagline: "Comprehensive patient records, doctor scheduling, and bed availability management database.",
      description: "A Java & MySQL database system built to streamline patient registration, medical history tracking, doctor appointments, and billing invoice generation.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      technologies: ["Core Java", "JDBC", "MySQL", "Relational Database Design"],
      liveUrl: "https://github.com/Shibam45",
      githubUrl: "https://github.com/Shibam45",
      metrics: ["Patient Records", "Doctor Appointments", "SQL Relational Schema"]
    },
    {
      id: "project-4",
      title: "Hotel Reservation Service",
      category: "java",
      featured: false,
      tagline: "Room booking pipeline with live availability status and customer check-in/out logging.",
      description: "An automated hotel reservation and customer booking system built with Java and JDBC MySQL backend, providing room status updates, billing calculations, and reservation history.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      technologies: ["Core Java", "JDBC", "MySQL", "SQL Queries"],
      liveUrl: "https://github.com/Shibam45",
      githubUrl: "https://github.com/Shibam45",
      metrics: ["Room Availability", "Booking Pipeline", "JDBC Integration"]
    }
  ]
};
