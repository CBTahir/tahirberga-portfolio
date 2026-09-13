export const profile = {
  name: "Tahir Berga",
  domain: "https://tahirberga.com",
  headline: "Software Engineer",
  location: "Spain",
  intro:
    "Software Engineering student focused on application security, secure systems, and AI-assisted information retrieval.",
  about:
    "I am finishing my Software Engineering degree while building a multi-agent RAG system for extracting, indexing, and semantically querying web content. My work sits between software engineering and security: I like understanding how systems are built, where they fail, and how to make them safer without making them harder to use.",
  current:
    "My undergraduate project is a multi-agent RAG system for web-content extraction, indexing, and semantic search.",
  security:
    "I have worked on automating macOS malware-analysis workflows with Proxmox, isolated environments, and repeatable lab setup.",
  direction:
    "I am working toward Application Security Engineering, with a focus on secure software development, API security, source-code analysis, threat modeling, DevSecOps, and AI/LLM application security.",
  interests: [
    "Software Engineering",
    "Cybersecurity",
    "Application Security",
    "AI/LLM Security",
    "Secure Software Development",
  ],
  links: {
    github: "https://github.com/CBTahir",
    linkedin: "https://www.linkedin.com/in/tahir-berga-25aa40436/",
    email: "mailto:bergatahir@gmail.com",
  },
  experience: [],
  projects: [],
} as const;

export type Profile = typeof profile;
