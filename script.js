const experience = [
  {
    title: "Intern",
    company: "IIT Hyderabad",
    period: "Dec 2025 - Present",
    description: "Worked on database-focused technical tasks and applied systems-level engineering practices.",
    skills: ["Databases"],
  },
  {
    title: "Software Developer Intern",
    company: "Matrix Capital",
    period: "May 2025 - Jun 2025",
    description: "Contributed to web development deliverables and engineering workflow improvements.",
    skills: ["Web Development"],
  },
  {
    title: "Technical Head",
    company: "Mozilla Firefox Club, VIT Vellore",
    period: "Jan 2026 - Present",
    description:
      "Leading technical initiatives. Previously served as Technical Core (Mar 2025 - Dec 2025), promoting open-source and collaborative development.",
    skills: ["Backend Development", "Open Source", "Technical Projects"],
  },
];

const skills = [
  {
    title: "Systems & Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "REST", "Docker"],
  },
  {
    title: "Data & Research",
    items: ["Query Plan Analysis", "EXPLAIN/ANALYZE", "GROBID", "ETL Pipelines", "Similarity Scoring"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "DevOps",
    items: ["Azure", "CI/CD", "Load Testing", "Production Debugging"],
  },
];

const languages = [
  { name: "English", level: "Native", proficiency: 5 },
  { name: "Hindi", level: "Fluent", proficiency: 4 },
  { name: "Telugu", level: "Intermediate", proficiency: 3 },
  { name: "Kannada", level: "Intermediate", proficiency: 3 },
  { name: "French", level: "Basic", proficiency: 2 },
];

const projects = [
  {
    title: "Coming Soon",
    desc: "Research-grade system exploring NLP, document analysis, and trust verification in academic content.",
    tags: ["ML/NLP", "Research Integrity", "Python"],
  },
  {
    title: "Coming Soon",
    desc: "Systems-focused project exploring database internals, execution plans, and optimizer behavior.",
    tags: ["Systems", "Databases", "Performance"],
  },
  {
    title: "archAIc",
    desc: "AI-driven reliability engineering platform with a 6-service FastAPI microservices architecture (auth, product, db, payment, anomaly-detector, ai-operator), full observability, chaos testing, and automated incident analysis. Implemented distributed trace propagation (X-Trace-ID), OpenTelemetry instrumentation, structured logging, Prometheus/Jaeger/Grafana/Loki stack, ML anomaly detection from Prometheus signals, and an AI operator that generates structured RCA/remediation plans. Added Next.js control-plane dashboard with one-click failure injection/reset and k6 resilience validation scenarios.",
    tags: ["FastAPI", "Microservices", "OpenTelemetry", "Prometheus", "Jaeger", "Grafana", "Loki", "Chaos Engineering", "Isolation Forest", "Next.js", "k6"],
  },
  {
    title: "Argus (AetherQuery)",
    desc: "Full-stack SQL analytics platform for exact vs approximate query execution across DuckDB, PostgreSQL, and MySQL with plan introspection and performance tracking. Built a FastAPI execution pipeline with multi-database adapters, normalized EXPLAIN parsing, REST APIs for execution/optimization/history/cache/progress, adaptive approximate engine with progressive sampling and convergence stopping, benchmark mode, TTL caching, and query history. Built React + TypeScript dual-panel UI with CSV-to-DuckDB ingestion, live progress polling, cache indicators, rewritten-query transparency, and interactive plan graph visualization (ReactFlow + dagre).",
    tags: ["FastAPI", "React 19", "TypeScript", "DuckDB", "PostgreSQL", "MySQL", "Approximate Query Processing", "ReactFlow", "dagre"],
  },
  {
    title: "Scotland Yard",
    desc: "Real-time multiplayer backend for digital Scotland Yard with turn-based asymmetric gameplay.",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis"],
    link: "https://github.com/Ad1th/Gravitas-Backend-25-Complete",
  },
  {
    title: "BlindSpot",
    desc: "Edge assistive device with YOLOv8-seg and CNN-LSTM on Raspberry Pi 5 plus LLM audio narration.",
    tags: ["Raspberry Pi", "YOLOv8", "CNN-LSTM", "Edge AI", "Python"],
  },
  {
    title: "OWC Wave Energy Harvester",
    desc: "Oscillating Water Column energy harvesting with sensor-based conditioning and output regulation.",
    tags: ["ACS712", "Voltage Dividers", "Power Electronics", "Signal Conditioning"],
  },
  {
    title: "Point Wave Energy Harvester",
    desc: "Power conditioning circuitry, boost converter, MPPT, and IoT telemetry via ESP8266.",
    tags: ["Op-AMP 741", "Boost Converter", "Arduino", "ESP8266", "MPPT"],
    image: "public/wave-energy-3.jpg",
  },
  {
    title: "Cloudify",
    desc: "Cloud storage platform inspired by Google Drive with secure uploads and AI-driven search.",
    tags: ["PostgreSQL", "Express.js", "Vercel"],
    image: "public/cloudify.png",
    link: "https://github.com/Ad1th/file-mgmt",
  },
  {
    title: "CropLink",
    desc: "Farm-to-laborer SMS workflow with crop intelligence based on farm, soil, and climate inputs.",
    tags: ["PostgreSQL/Supabase", "Gemini API", "Twilio SMS", "HTML/CSS/JS"],
    image: "public/placeholder.jpg",
  },
  {
    title: "Profile/Portfolio Website",
    desc: "Portfolio site showcasing projects, skills, and journey with smooth animations and responsive layout.",
    tags: ["Next.js", "React", "Tailwind CSS", "GSAP"],
    image: "public/profile.png",
    link: "https://github.com/Ad1th/Profile",
  },
  {
    title: "SevaVerse",
    desc: "Platform connecting NGOs, volunteers, and donors for child welfare operations.",
    tags: ["Node.js", "Prisma + SQLite", "Tailwind CSS"],
    image: "public/sevaverse.png",
    link: "https://github.com/Ad1th/SevaVerse",
  },
  {
    title: "EcoSync",
    desc: "Hackathon sustainability solution in logistics and energy with Supabase + FastAPI.",
    tags: ["Supabase", "FastAPI", "HTML/CSS/JS"],
    image: "public/EcoSync.png",
    link: "https://github.com/Ad1th/OptiSync",
  },
  {
    title: "Threddit",
    desc: "Productivity Chrome extension that analyzes web usage and generates nudges.",
    tags: ["React", "FastAPI", "PostgreSQL", "Gemini API", "Chrome Extensions"],
    image: "public/threddit.png",
    link: "https://github.com/Ad1th/3braincells_DevJams-24",
  },
  {
    title: "EchoChamber",
    desc: "Anonymous forum web app for confessions and real-time interactions.",
    tags: ["HTML", "CSS", "JavaScript", "PostgreSQL"],
    image: "public/echochamber.png",
    link: "https://github.com/Ad1th/EchoChamber",
  },
  {
    title: "HOSPITECH",
    desc: "Lightweight clinic management system with records, appointments, and role-based logins.",
    tags: ["Python", "SQL/MySQL", "Tkinter"],
    image: "public/lhospital.png",
    link: "https://github.com/Ad1th/Hospitech--Hospital-Management-System",
  },
  {
    title: "Snek",
    desc: "Retro snake game built in Python + Pygame with difficulty progression.",
    tags: ["Python", "Pygame"],
    image: "public/snek.png",
    link: "https://github.com/Ad1th/Snek---Snake_Game",
  },
];

const patent = {
  title: "A system for real time environmental perception and assistance for a visually impaired user",
  desc: "Filed through VIT as an ordinary Computer Science application describing a predictive, assistive system for real-time environmental perception.",
  chips: ["Published", "App No: 202641010249", "Filed: 31/01/2026", "Published: 13/02/2026"],
};

const achievements = [
  ["AI Solutions Track Winner - Code 2 Create Hackathon", "2025"],
  ["100% Attendance - VIT", "2024-25"],
  ["First Place in Hackathon - CodeWars", "2024"],
  ["PC Building Competition - Second Place", "2023"],
  ["OCI Foundations Certification", "2025"],
  ["Python Certification (HackerRank)", "2025"],
  ["SQL Basic Certification (HackerRank)", "2025"],
  ["SQL Intermediate Certification (HackerRank)", "2025"],
  ["AI Builder and Power Apps Course", "2020"],
  ["Virtual Internship in Mechanical Engineering", "2019"],
];

const hackathons = [
  {
    title: "Code 2 Create (C2C) - AI Solutions Track Winner",
    time: "Sep 2025 - VIT Vellore",
    desc: "Built a blind assistance tool using image recognition and local dialect audio feedback.",
    tags: ["Python + ML", "Raspberry Pi"],
  },
  {
    title: "Women Techies'25",
    time: "Apr 2025 - VIT Vellore",
    desc: "Built SevaVerse, a platform connecting NGOs, volunteers, and well-wishers.",
    tags: ["Node.js", "Prisma + SQLite", "Tailwind"],
  },
  {
    title: "Yantra Central Hack",
    time: "Jan 2025 - VIT Vellore",
    desc: "Built OptiSync, an ML-powered sustainability platform for textile operations.",
    tags: ["Python + ML", "Supabase/PostgreSQL", "HTML/CSS/JS"],
  },
  {
    title: "DevJams",
    time: "Sep 2024 - VIT Vellore",
    desc: "Built Threddit, a Gemini-powered productivity extension.",
    tags: ["Gemini API", "Chrome Extension", "FastAPI"],
  },
  {
    title: "CodeWars",
    time: "Feb 2024 - NPS KRM, Bengaluru",
    desc: "Won first place.",
    tags: [],
  },
];

const hobbies = [
  "robotics",
  "photography",
  "cycling",
  "trekking",
  "gaming",
  "music",
  "traveling",
  "gardening",
];

const timeline = [
  ["2006", "Born in Hyderabad", ""],
  ["", "Studied at DPS East, Bangalore", ""],
  ["", "Learnt Basic Robotics", "Built a DPDT robot and understood robotics fundamentals."],
  ["", "Learnt MSWLogo and QBasic", ""],
  ["", "Joined Green Wood High International School, Bengaluru", ""],
  ["", "Learnt Intermediate and Advanced Robotics", "Worked on EV3 and deeper electronics."],
  ["", "Learnt Java, HTML, Scratch", ""],
  ["2022", "Attained ICSE Degree", "Green Wood High International School, Bangalore."],
  ["", "Learnt Python and SQL", ""],
  ["", "Dived Deeper into Robotics", "Worked on Arduino, circuitry, EV3, and non-microcontroller robotics."],
  ["2024", "Attained CBSE Degree", "National Public School, Koramangala, Bangalore."],
  ["2024", "Joined VIT Vellore", ""],
];

function card(title, content, meta = "", tags = [], image = "", link = "") {
  const tagsHtml = tags.length ? `<div class="tags">${tags.map((t) => `<span>${t}</span>`).join("")}</div>` : "";
  const imageHtml = image ? `<img class="project-thumb" src="${image}" alt="${title}" loading="lazy" />` : "";
  const metaHtml = meta ? `<p class="meta">${meta}</p>` : "";
  const titleHtml = link
    ? `<h3><a href="${link}" target="_blank" rel="noreferrer">${title}</a></h3>`
    : `<h3>${title}</h3>`;
  return `<article class="card reveal">${imageHtml}${titleHtml}${metaHtml}<p>${content}</p>${tagsHtml}</article>`;
}

function inject() {
  const experienceGrid = document.getElementById("experienceGrid");
  experienceGrid.innerHTML = experience
    .map((e) => card(`${e.title} - ${e.company}`, e.description, e.period, e.skills))
    .join("");

  const skillsGrid = document.getElementById("skillsGrid");
  skillsGrid.innerHTML = skills
    .map((s) => card(s.title, s.items.join(" | "), "", s.items))
    .join("");

  const languagesGrid = document.getElementById("languagesGrid");
  languagesGrid.innerHTML = languages
    .map(
      (l) => `
      <article class="card reveal center">
        <h3>${l.name}</h3>
        <p>${l.level}</p>
        <div class="level">${Array.from({ length: 5 })
          .map((_, i) => `<i class="${i < l.proficiency ? "fill" : ""}"></i>`)
          .join("")}</div>
      </article>
    `
    )
    .join("");

  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = projects
    .map((p) => card(p.title, p.desc, "", p.tags, p.image, p.link))
    .join("");

  const patentCard = document.getElementById("patentCard");
  patentCard.innerHTML = `
    <article class="card reveal">
      <h3>${patent.title}</h3>
      <div class="tags">${patent.chips.map((c) => `<span>${c}</span>`).join("")}</div>
      <p>${patent.desc}</p>
    </article>
  `;

  const achievementsGrid = document.getElementById("achievementsGrid");
  achievementsGrid.innerHTML = achievements
    .map(([t, y]) => card(t, "", y, []))
    .join("");

  const hackathonsList = document.getElementById("hackathonsList");
  hackathonsList.innerHTML = hackathons
    .map((h) => card(h.title, h.desc, h.time, h.tags))
    .join("");

  const hobbiesGrid = document.getElementById("hobbiesGrid");
  hobbiesGrid.innerHTML = hobbies
    .map(
      (h) => `
      <article class="card reveal">
        <img class="hobby-thumb" src="public/${h}.png" alt="${h}" loading="lazy" />
        <h3>${h[0].toUpperCase() + h.slice(1)}</h3>
      </article>
    `
    )
    .join("");

  const timelineNode = document.getElementById("timeline");
  timelineNode.innerHTML = timeline
    .map(
      ([year, title, desc]) => `
      <article class="timeline-item reveal">
        <span class="pill">${year || ""}</span>
        <h3>${title}</h3>
        <p>${desc || ""}</p>
      </article>
    `
    )
    .join("");

  document.getElementById("copyright").textContent = `(c) ${new Date().getFullYear()} All rights reserved`;
}

function setupMenu() {
  const menu = document.getElementById("mobileMenu");
  const openBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeMenu");

  openBtn.addEventListener("click", () => {
    menu.classList.add("open");
    menu.setAttribute("aria-hidden", "false");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("open");
    menu.setAttribute("aria-hidden", "true");
  });

  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      menu.setAttribute("aria-hidden", "true");
    });
  });
}

function setupScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  const onScroll = () => {
    const top = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${max > 0 ? (top / max) * 100 : 0}%`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupReveal() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in");
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
}

window.scrollTo(0, 0);
inject();
setupMenu();
setupScrollProgress();
setupReveal();
