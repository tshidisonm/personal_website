import { ExternalLink } from "lucide-react";

const skillCategories = [
  {
    name: "Technical Skills",
    skills: ["RESTful API calls", "PostgreSQL", "Supabase Database integration", "Python for LLM functionality", "Data Modelling", "Database Design", "Microsoft SQL", "JavaScript & TypeScript", "Java Spring Boot"],
  },
  {
    name: "Development Skills",
    skills: ["Frontend GUI Design (React)", "React Native with Expo", "Git & GitHub", "Postman for API testing"],
  },
  {
    name: "Systems Integration",
    skills: ["Hardware-software integration", "Middleware API development", "Bluetooth Low Energy", "ESP32"],
  },
  {
    name: "Productivity Tools",
    skills: ["Claude Code", "Qodo", "VS Code", "Cursor AI"],
  },
];

const certifications = [
  {
    name: "Microsoft Applied Skills: Build a natural language processing solution with Azure AI Language",
    url: "https://learn.microsoft.com/en-us/credentials/applied-skills/",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    url: "https://education.oracle.com/oracle-cloud-infrastructure-ai-foundations-associate/",
  },
  {
    name: "Introduction to Modern Data Engineering with Snowflake (Coursera)",
    url: "https://www.coursera.org/",
  },
  {
    name: "Intro to Snowflake for Devs, Data Scientists, Data Engineers (Coursera)",
    url: "https://www.coursera.org/",
  },
];

export default function SkillsCertifications() {
  return (
    <section id="certifications" className="w-full bg-white dark:bg-zinc-950 text-gray-900 dark:text-white py-20 sm:py-28 transition-colors scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <a href="#certifications" className="group inline-block">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 group-hover:text-gray-600 dark:group-hover:text-zinc-300 transition-colors">Skills &amp; Certifications</h2>
        </a>
        <p className="text-gray-500 dark:text-zinc-500 mb-12 max-w-xl">Technical expertise and professional certifications.</p>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {skillCategories.map((cat, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-100/50 dark:bg-zinc-950/50">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-zinc-300 uppercase tracking-wider mb-4">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="rounded-full border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-zinc-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-6">Certifications</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-100/50 dark:bg-zinc-950/50 hover:border-gray-300 dark:hover:border-zinc-700 transition-colors group"
            >
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-zinc-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{cert.name}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 dark:text-zinc-600 shrink-0 mt-0.5 group-hover:text-gray-600 dark:group-hover:text-zinc-400 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
