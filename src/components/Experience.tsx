const experiences = [
  {
    role: "IT Lecturer",
    company: "Richfield Graduate Institute of Technology — Polokwane Campus",
    period: "03 February 2026 – Present",
    details: [
      "Modules Lecturing: Software Engineering, Machine Learning, Data Manipulation and Visualization, Software Development, Computer Architecture, Cloud Computing",
      "Currently learning: Plotly, Plotly Dash, Seaborn, Cloud Computing fundamentals",
    ],
  },
  {
    role: "Software Developer",
    company: "African Accounting and Tax Consultants",
    period: "01 June 2025 – Present",
    details: [
      "Developed a full-stack customer and company management system for storing client records, business entities, and supporting documentation",
      "Built using Node.js, Express.js, SQLite, sql.js, HTML, CSS, JavaScript, and Google Drive API",
      "Implemented RESTful APIs for customer, company, document, statistics, backup, and restore operations",
      "Designed document upload, preview, and deletion functionality with files stored as SQLite BLOBs",
      "Added Progressive Web App (PWA) capabilities including offline caching, service workers, install prompts, and application manifest configuration",
      "Integrated secure OAuth 2.0 authentication with Google Drive for automated cloud backup and restore",
      "Developed backup status monitoring, token metadata display, and backup history interfaces",
    ],
  },
  {
    role: "AI/ML Graduate Intern",
    company: "Linkfields Innovations",
    period: "05 January 2026 – 30 March 2026",
    details: [
      "Developed automated web scraping pipelines to extract and structure data from company websites",
      "Designed and implemented an interactive chatbot to improve user engagement and information access",
      "Built a Retrieval-Augmented Generation (RAG) system to generate context-aware, data-driven reports",
      "Integrated vector-based retrieval mechanisms with large language models to enhance output accuracy",
      "Developed a FinSight prototype to demonstrate AI-driven analytics capabilities for client presentations",
    ],
  },
  {
    role: "Automated Audit Analytics & IT Governance Project",
    company: "Accountants Advisory",
    period: "01 February 2026 – 03 February 2026",
    details: [
      "Developed an automated audit analytics toolkit to identify procurement control failures and business process risks",
      "Tools: Python, CSV data analysis, Risk & Control Matrix (RCM), audit analytics techniques",
      "Automated inventory reconciliation across thousands of records; detected self-approvals and high-value variances",
      "Designed a 10-point RCM covering access control and data integrity to reduce financial risk",
    ],
  },
  {
    role: "Freelance Computer Science Tutor",
    company: "Self-Employed",
    period: "January 2024 – November 2025",
    details: [
      "Tutored final-level Computer Science undergraduates in Operating Systems, Computer Networks, Artificial Intelligence, Databases, Mathematical Analysis, Abstract Algebra, and Complex Analysis",
      "Provided academic support, practical guidance, and assignment assistance",
      "Delivered both in-person and online sessions alongside own studies",
      "Portfolio: github.com/tshidisonm/Tutoring",
    ],
  },
  {
    role: "Software Development Mentee",
    company: "Mentored by Jan Botha (Site Reliability Engineer)",
    period: "January 2024 – November 2024",
    details: [
      "Completed a full-stack livestock management mobile app achieving 80% final score",
      "Built with React Native, Expo, and Supabase backend",
      "Integrated Bluetooth Low Energy with ESP32 scale and RFID reader",
      "Created AI chat feature querying databases using SQL with Google Gemini APIs",
      "Developed Python APIs for system integration; managed code with Git and GitHub",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white py-20 sm:py-28 transition-colors scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <a href="#experience" className="group inline-block">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 group-hover:text-gray-600 dark:group-hover:text-zinc-300 transition-colors">Experience</h2>
        </a>
        <p className="text-gray-500 dark:text-zinc-500 mb-12 max-w-xl">Professional, academic, and freelance experience.</p>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l border-gray-200 dark:border-zinc-800">
              <div className="absolute left-0 top-1 w-3 h-3 -translate-x-[6.5px] rounded-full bg-gray-300 dark:bg-zinc-700 ring-4 ring-white dark:ring-zinc-950" />
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                  <span className="text-xs text-gray-500 dark:text-zinc-500 font-mono whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-zinc-400 font-medium">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.details.map((detail, j) => (
                    <li key={j} className="text-sm text-gray-500 dark:text-zinc-500 leading-relaxed flex items-start gap-2">
                      <span className="text-gray-300 dark:text-zinc-700 mt-1.5 select-none">—</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
