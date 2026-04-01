const experience = [
  {
    title: "Intern",
    company: "IIT Hyderabad",
    period: "Dec 2025 - Present",
    description: "",
    skills: ["Databases"],
  },
  {
    title: "Software Developer Intern",
    company: "Matrix Capital",
    period: "May 2025 - June 2025",
    description: "",
    skills: ["Web Development"],
  },
  {
    title: "Technical Head",
    company: "Mozilla Firefox Club, VIT Vellore",
    period: "Jan 2026 - Present",
    description:
      "Leading technical initiatives at the Mozilla Firefox Club. Previously served as Technical Core (March 2025 - Dec 2025), promoting open-source technologies and collaborative development among students.",
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
    title: "Reference Hallucination Detector",
    desc: "Research-grade pipeline for citation-grounded trust verification in academic text using NLP, reference extraction, and claim-to-source consistency checks.",
    tags: ["NLP", "Reference Verification", "Research Integrity", "Python"],
  },
  {
    title: "archAIc",
    desc: "Built an AI-driven reliability engineering platform with 6 FastAPI microservices, OpenTelemetry trace propagation (X-Trace-ID), and chaos controls for timeout/error/cpu/crash/bad-data failure injection.",
    tags: ["FastAPI Microservices", "Prometheus/Grafana/Jaeger/Loki", "Chaos Engineering", "Kubernetes", "Next.js"],
  },
  {
    title: "Scotland Yard",
    desc: "Architected real-time multiplayer backend for a digital adaptation of Scotland Yard with graph-based map and asymmetric gameplay.",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis"],
    link: "https://github.com/Ad1th/Gravitas-Backend-25-Complete",
  },
  {
    title: "BlindSpot",
    desc: "Led edge integration and deployment of a spatio-temporal assistive device using YOLOv8-seg and CNN-LSTM on Raspberry Pi 5.",
    tags: ["Raspberry Pi", "YOLOv8", "CNN-LSTM", "Edge AI", "Python"],
  },
  {
    title: "Argus",
    desc: "Built a SQL analytics workspace where users upload CSV files, run SQL commands, inspect detailed query plans, and explore operator-level execution graphs.",
    tags: ["FastAPI", "React + TypeScript", "DuckDB", "Query Plan Analysis", "ReactFlow"],
  },
  {
    title: "OWC Wave Energy Harvester",
    desc: "Adapted point-source oscillator circuitry for Oscillating Water Column energy harvesting with sensing and output regulation stages.",
    tags: ["ACS712", "Voltage Dividers", "Power Electronics", "Signal Conditioning"],
  },
  {
    title: "Point Wave Energy Harvester",
    desc: "Designed buoy-based wave energy circuitry with full-wave rectifier, boost converter, MPPT algorithm, and IoT telemetry.",
    tags: ["Op-AMP 741", "Boost Converter", "Arduino", "ESP8266", "MPPT"],
    image: "public/wave-energy-3.jpg",
  },
  {
    title: "Cloudify",
    desc: "Cloud storage platform inspired by Google Drive with secure uploads, file organization, and AI-driven search.",
    tags: ["PostgreSQL", "Express.js", "Vercel"],
    image: "public/cloudify.png",
    link: "https://github.com/Ad1th/file-mgmt",
  },
  {
    title: "CropLink",
    desc: "Farm-to-laborer SMS workflow enabling direct communication and crop intelligence based on soil and climate context.",
    tags: ["PostgreSQL/Supabase", "Gemini API", "Twilio SMS", "HTML/CSS/JS"],
    image: "public/placeholder.jpg",
  },
  {
    title: "Profile/Portfolio Website",
    desc: "Portfolio site built with Next.js and Tailwind CSS to showcase projects, skills, and journey.",
    tags: ["Next.js", "React", "Tailwind CSS", "GSAP"],
    image: "public/profile.png",
    link: "https://github.com/Ad1th/Profile",
  },
  {
    title: "SevaVerse",
    desc: "Platform connecting NGOs, volunteers, and donors with role-based operations and dashboards.",
    tags: ["Node.js", "Prisma + SQLite", "Tailwind CSS"],
    image: "public/sevaverse.png",
    link: "https://github.com/Ad1th/SevaVerse",
  },
  {
    title: "EcoSync",
    desc: "Hackathon sustainability solution in logistics and energy with Supabase backend and FastAPI services.",
    tags: ["Supabase", "FastAPI", "HTML/CSS/JS"],
    image: "public/EcoSync.png",
    link: "https://github.com/Ad1th/OptiSync",
  },
  {
    title: "Threddit",
    desc: "Productivity-focused Chrome extension built with React, FastAPI, and Gemini API for browsing insights.",
    tags: ["React", "FastAPI", "PostgreSQL", "Gemini API", "Chrome Extensions"],
    image: "public/threddit.png",
    link: "https://github.com/Ad1th/3braincells_DevJams-24",
  },
  {
    title: "EchoChamber",
    desc: "Anonymous forum web app enabling users to post confessions, chat, and share thoughts freely.",
    tags: ["HTML", "CSS", "JavaScript", "PostgreSQL"],
    image: "public/echochamber.png",
    link: "https://github.com/Ad1th/EchoChamber",
  },
  {
    title: "HOSPITECH",
    desc: "Lightweight clinic management system to digitize records, appointments, and doctor profiles.",
    tags: ["Python", "SQL/MySQL", "Tkinter"],
    image: "public/lhospital.png",
    link: "https://github.com/Ad1th/Hospitech--Hospital-Management-System",
  },
  {
    title: "Snek",
    desc: "Retro snake game built using Python and Pygame with menu flow and dynamic difficulty.",
    tags: ["Python", "Pygame"],
    image: "public/snek.png",
    link: "https://github.com/Ad1th/Snek---Snake_Game",
  },
];

const patents = [
  {
    title: "A system for real time environmental perception and assistance for a visually impaired user",
    desc: "Filed through Vellore Institute of Technology in Computer Science for real-time environmental perception and assistive support workflows.",
    chips: ["Published", "App No: 202641010249", "Filed: 31/01/2026", "Published: 13/02/2026"],
  },
  {
    title: "Upcoming - Filed",
    desc: "Filed work focused on the electronics stack: sensing circuits, signal conditioning, instrumentation, and power-conditioning design.",
    chips: ["Upcoming - Filed"],
  },
];

const achievements = [
  {
    title: "AI solutions Track Winner - Code 2 Create (C2C) Hackathon",
    year: "2025",
    description:
      "Won the AI solutions track at Code 2 Create (C2C) Hackathon held at VIT Vellore by building a blind assistance tool using image recognition and Raspberry Pi for real-time audio feedback.",
  },
  {
    title: "Cent Percent Attendance - Vellore Institute of Technology (2024-25)",
    year: "2024-25",
    description:
      "Awarded a Certificate of Appreciation for achieving 100% attendance in B.Tech Computer Science and Engineering (Information Security).",
  },
  {
    title: "First Place in Hackathon - CodeWars",
    year: "2024",
    description: "Won the CodeWars hackathon conducted by NPS KRM.",
  },
  {
    title: "PC Building Competition - Second Place",
    year: "2023",
    description: "Achieved second place in a competitive PC building event hosted by NPS HSR.",
  },
  {
    title: "OCI Foundations Certification",
    year: "2025",
    description:
      "Obtained Oracle Cloud Infrastructure Foundations certification demonstrating core OCI and cloud knowledge.",
  },
  {
    title: "Python Certification",
    year: "2025",
    description: "Received a certification in Python programming from HackerRank.",
  },
  {
    title: "SQL Basic Skill Certification",
    year: "2025",
    description: "Received a certification in SQL (Basic) from HackerRank.",
  },
  {
    title: "SQL Intermediate Skill Certification",
    year: "2025",
    description: "Received a certification in SQL (Intermediate) from HackerRank.",
  },
  {
    title: "Use AI Builder and Power Apps to Process Invoice Data",
    year: "2020",
    description:
      "Received a completion certificate for a Coursera course on AI Builder and Power Apps invoice processing.",
  },
  {
    title: "Virtual Internship in Mechanical Engineering",
    year: "2019",
    description: "Completed a virtual internship in Mechanical Engineering by Mindler.",
  },
];

const hackathons = [
  {
    title: "Women Techies'26 - Finalist - Top 10 Teams",
    time: "March 2026 - VIT Vellore, India",
    desc: "Reached finalist stage as a top 10 team by building AetherQuery, a SQL analytics platform with CSV upload, SQL execution, and detailed query-plan visualization.",
    tags: ["FastAPI", "React + TypeScript", "DuckDB", "Query Plan Visualization"],
  },
  {
    title: "TechSolstice",
    time: "March 2026 - MIT Bangalore, India",
    desc: "Built archAIc, an AI-driven reliability engineering platform with microservices observability, chaos injection, and automated incident analysis workflows.",
    tags: ["FastAPI Microservices", "OpenTelemetry", "Chaos Engineering", "Kubernetes"],
  },
  {
    title: "Code 2 Create (C2C) - AI solutions Track Winner",
    time: "September 2025 - VIT Vellore, India",
    desc: "Built a blind assistance tool using image recognition for real-time local-dialect audio feedback.",
    tags: ["Python + ML", "Raspberry Pi (edge computing)"],
  },
  {
    title: "Women Techies'25",
    time: "April 2025 - VIT Vellore, India",
    desc: "Built SevaVerse, a collaborative platform connecting NGOs, volunteers, and well-wishers with role-based access and dashboards.",
    tags: ["Node.js + Express", "Prisma + SQLite", "Tailwind CSS"],
  },
  {
    title: "Yantra Central Hack",
    time: "January 2025 - VIT Vellore, India",
    desc: "Built OptiSync, an ML-powered sustainability platform for the textile industry to optimize water and electricity usage.",
    tags: ["Python + ML", "Supabase / PostgreSQL", "HTML/CSS/JS"],
  },
  {
    title: "DevJams",
    time: "September 2024 - VIT Vellore, India",
    desc: "Built Threddit, a smart Chrome extension using Gemini API to detect distractions and deliver AI nudges.",
    tags: ["Gemini API", "Chrome Extension", "FastAPI"],
  },
  {
    title: "CodeWars",
    time: "February 2024 - NPS KRM, Bangalore, India",
    desc: "Won first place.",
    tags: [],
  },
];

const hobbies = ["robotics", "photography", "cycling", "trekking", "gaming", "music", "traveling", "gardening"];

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
  return `<article class="card reveal">${imageHtml}${titleHtml}${metaHtml}<p>${content || ""}</p>${tagsHtml}</article>`;
}

function inject() {
  const experienceGrid = document.getElementById("experienceGrid");
  experienceGrid.innerHTML = experience.map((e) => card(`${e.title} - ${e.company}`, e.description, e.period, e.skills)).join("");

  const skillsGrid = document.getElementById("skillsGrid");
  skillsGrid.innerHTML = skills.map((s) => card(s.title, s.items.join(" | "), "", s.items)).join("");

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
  projectsGrid.innerHTML = projects.map((p) => card(p.title, p.desc, "", p.tags, p.image, p.link)).join("");

  const patentCard = document.getElementById("patentCard");
  patentCard.innerHTML = patents
    .map(
      (p) => `
      <article class="card reveal" style="margin-bottom:16px">
        <h3>${p.title}</h3>
        <div class="tags">${p.chips.map((c) => `<span>${c}</span>`).join("")}</div>
        <p>${p.desc}</p>
      </article>
    `
    )
    .join("");

  const achievementsGrid = document.getElementById("achievementsGrid");
  achievementsGrid.innerHTML = achievements.map((a) => card(a.title, a.description, a.year, [])).join("");

  const hackathonsList = document.getElementById("hackathonsList");
  hackathonsList.innerHTML = hackathons.map((h) => card(h.title, h.desc, h.time, h.tags)).join("");

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
