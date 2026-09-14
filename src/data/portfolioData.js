export const PORTFOLIO_DATA = {
  personal: {
    name: "Shibam Ghosh",
    role: "Full-Stack Software Engineer",
    tagline: "Architecting Scalable Cloud Systems, High-Performance Web Applications & Modern APIs",
    bio: "Passionate Full-Stack Developer with 4+ years of experience building resilient web software, microservices, and interactive user interfaces. Specialized in React, Node.js, TypeScript, Cloud Native Architecture, and modern API design.",
    status: "Available for Hire / Contracts",
    location: "Kolkata, West Bengal, India / Remote",
    email: "gshibam632@gmail.com",
    github: "https://github.com/Shibam45",
    linkedin: "https://www.linkedin.com/in/shibamghosh/",
    twitter: "https://x.com/ShibamG950551",
    resumeUrl: "#",
    avatar: "/hero.png"
  },

  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Delivered", value: "35+" },
    { label: "Code Commits", value: "2.5K+" },
    { label: "Client Satisfaction", value: "100%" }
  ],

  aboutHighlights: [
    {
      title: "Clean Architecture",
      description: "Dedicated to maintainable, test-driven modular code structures and clean design patterns."
    },
    {
      title: "Performance First",
      description: "Obsessed with optimizing sub-second load times, web vitals, dynamic caching, and high throughput."
    },
    {
      title: "End-to-End Solutions",
      description: "From database schema design and REST/GraphQL APIs to rich frontend client applications."
    }
  ],

  skillCategories: [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend & APIs" },
    { id: "cloud", name: "Cloud & DevOps" },
    { id: "tools", name: "Tools & Architectures" }
  ],

  skills: [
    { name: "React.js", category: "frontend", level: 95, icon: "Code" },
    { name: "TypeScript", category: "frontend", level: 90, icon: "FileCode" },
    { name: "Tailwind / CSS3", category: "frontend", level: 92, icon: "Palette" },
    { name: "MySQL", category: "backend", level: 88, icon: "Database" },
    { name: "GraphQL & REST", category: "backend", level: 90, icon: "Network" },
    { name: "AWS (S3, Lambda, EC2)", category: "cloud", level: 85, icon: "Cloud" },
    { name: "CI/CD & GitHub Actions", category: "cloud", level: 88, icon: "GitBranch" },
    { name: "System Design & Microservices", category: "tools", level: 86, icon: "Layers" }
  ],

  experience: [
    {
      period: "2023 - Present",
      role: "Senior Full-Stack Engineer",
      company: "Nexus Cloud Labs",
      type: "Full-Time",
      description: "Spearheaded the development of real-time cloud monitoring dashboards and high-throughput data processing microservices.",
      achievements: [
        "Reduced average frontend render latency by 45% using React concurrent features.",
        "Architected distributed pub-sub event service handling 1M+ daily websocket events.",
        "Mentored junior engineers and instituted automated end-to-end integration testing."
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Redis"]
    },
    {
      period: "2021 - 2023",
      role: "Software Developer",
      company: "Apex Digital Systems",
      type: "Full-Time",
      description: "Engineered scalable customer-facing SaaS portals and integrated third-party payment & analytics APIs.",
      achievements: [
        "Built responsive web platform servicing 150k+ active monthly users.",
        "Integrated Stripe subscriptions and Webhooks with 99.99% reliability.",
        "Migrated legacy monolithic backend into containerized Docker services."
      ],
      technologies: ["Next.js", "Express.js", "MongoDB", "Docker", "Tailwind CSS"]
    },
    {
      period: "2020 - 2021",
      role: "Frontend Developer Specialist",
      company: "Vanguard Tech Studios",
      type: "Contract",
      description: "Crafted custom web interfaces, interactive dashboards, and design systems for enterprise client brands.",
      achievements: [
        "Developed 12+ custom client web portals adhering to strict accessibility standards.",
        "Implemented smooth WebGL particle visualizations and interactive UI components."
      ],
      technologies: ["JavaScript (ES6+)", "React", "CSS Modules", "Webpack"]
    }
  ],

  projectCategories: [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Applications" },
    { id: "cloud", name: "Cloud & APIs" },
    { id: "ai", name: "AI & Tools" }
  ],

  projects: [
    {
      id: "project-1",
      title: "Synthetix Cloud Console",
      category: "web",
      featured: true,
      tagline: "Real-time infrastructure monitoring dashboard with WebSockets and dynamic canvas charts.",
      description: "Synthetix Cloud Console is an enterprise-grade telemetry platform providing live insights into microservice health, latency distribution, and CPU/Memory usage spikes across multi-cloud clusters.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Node.js", "WebSockets", "Canvas API", "TailwindCSS"],
      liveUrl: "https://example.com/synthetix",
      githubUrl: "https://github.com/example/synthetix",
      metrics: ["1M+ Daily Events", "Sub-50ms Latency", "99.99% Uptime"]
    },
    {
      id: "project-2",
      title: "DevTerminal CLI & Web Sandbox",
      category: "tools",
      featured: true,
      tagline: "Browser-based developer workspace & terminal emulator with live code compilation.",
      description: "A lightweight, browser-first interactive sandbox letting developers test API endpoints, execute custom JavaScript/Python snippets, and inspect AST parse trees directly in real time.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "WebAssembly", "Monaco Editor", "Fira Code", "Docker"],
      liveUrl: "https://example.com/devterminal",
      githubUrl: "https://github.com/example/devterminal",
      metrics: ["10k+ Monthly Devs", "Zero Server Latency", "Instant Exec"]
    },
    {
      id: "project-3",
      title: "Aura Neural Engine",
      category: "ai",
      featured: true,
      tagline: "GenAI assistant platform integrating LLM rag pipelines and prompt workflows.",
      description: "An intelligent agent hub that connects vector databases (Pinecone) with OpenAI & Claude model pipelines to analyze internal documentation and automatically generate code documentation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "Python FastApi", "Pinecone", "LangChain", "OpenAI API"],
      liveUrl: "https://example.com/aura-engine",
      githubUrl: "https://github.com/example/aura-engine",
      metrics: ["98% Context Accuracy", "4x Faster Search"]
    },
    {
      id: "project-4",
      title: "HyperPulse API Gateway",
      category: "cloud",
      featured: false,
      tagline: "High-performance rate-limited microservice gateway built with Node.js & Redis.",
      description: "An ultra-fast API gateway providing JWT authentication, sliding-window rate limiting, request logging, and payload validation for enterprise microservice clusters.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      technologies: ["Node.js", "Express", "Redis", "Docker", "Jest"],
      liveUrl: "https://example.com/hyperpulse",
      githubUrl: "https://github.com/example/hyperpulse",
      metrics: ["50,000 req/sec", "Token Bucket Limit"]
    }
  ]
};
