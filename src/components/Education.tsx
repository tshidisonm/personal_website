const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Limpopo",
    period: "January 2026 – Present",
    details: [
      'Research Topic: "A Generative and Adaptive Deep Learning Framework for Explainable and Data-Efficient Wi-Fi Fingerprinting"',
    ],
  },
  {
    degree: "Bachelor of Science Honours in Computer Science",
    school: "University of Limpopo",
    period: "January 2025 – December 2025",
    details: [
      "Distinctions in: Advanced Databases, Speech and Language Processing (NLP)",
      "Average: 72%",
    ],
  },
  {
    degree: "Bachelor of Science in Mathematical Sciences (Mathematics & Computer Science)",
    school: "University of Limpopo",
    period: "January 2021 – December 2024",
    details: [
      "Distinctions in: Abstract Algebra, Mathematical Analysis, Complex Analysis, Introduction to Databases",
      "Average: 74%",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="w-full bg-white dark:bg-zinc-950 text-gray-900 dark:text-white py-20 sm:py-28 transition-colors scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <a href="#education" className="group inline-block">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 group-hover:text-gray-600 dark:group-hover:text-zinc-300 transition-colors">Education</h2>
        </a>
        <p className="text-gray-500 dark:text-zinc-500 mb-12 max-w-xl">Academic background and research focus.</p>

        <div className="space-y-10">
          {education.map((edu, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-100/50 dark:bg-zinc-950/50">
              <div className="sm:w-48 shrink-0">
                <div className="text-xs text-gray-500 dark:text-zinc-500 font-mono">{edu.period}</div>
                <div className="text-sm font-semibold text-gray-600 dark:text-zinc-400 mt-1">{edu.school}</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                <ul className="mt-3 space-y-1.5">
                  {edu.details.map((d, j) => (
                    <li key={j} className="text-sm text-gray-600 dark:text-zinc-400 flex items-start gap-2">
                      <span className="text-gray-300 dark:text-zinc-700 mt-0.5 select-none">—</span>
                      {d}
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
