const projects = [
  {
    title: "Early Prediction of High-Risk Pregnancies using Machine Learning",
    year: "2025",
    stack: "XGBoost, LightGBM, CatBoost, SMOTE, Python",
    details: [
      "Built a stacked ensemble (XGBoost, LightGBM, CatBoost + XGBoost meta-learner) with stratified K-fold CV and SMOTE to handle class imbalance",
      "Achieved 98.01% overall accuracy and strong high-risk detection",
      "Demonstrated strong generalization and clinical utility for decision support in low-resource settings",
    ],
  },
  {
    title: "Handwritten Digit Recognition using Neural Networks",
    year: "2026",
    stack: "Java, DeepLearning4J, ND4J, Maven, JUnit",
    details: [
      "Developed a feed-forward neural network to classify handwritten digits (0–9) on the MNIST dataset (70,000 images)",
      "Multi-layer architecture with 784 input neurons, ReLU hidden layers, and Softmax output",
      "Preprocessed data through normalization and one-hot encoding",
      "Trained with Adam optimizer and cross-entropy loss, achieving over 95% classification accuracy",
      "Evaluated with accuracy, precision, recall, and confusion matrix metrics",
    ],
  },
  {
    title: "Livestock Management Mobile Application",
    year: "2024",
    stack: "React Native, Expo, Supabase, ESP32, BLE, Google Gemini API, Python",
    details: [
      "Built a mobile app with hardware integration via Bluetooth Low Energy (ESP32 scale + RFID reader)",
      "AI chat feature querying databases using SQL with Google Gemini API",
      "Python APIs connecting hardware and software components",
      "Scored 80%; mentored by Jan Botha (Site Reliability Engineer)",
    ],
  },
  {
    title: "Service Marketplace Web Application",
    year: "2024",
    stack: "React, Vite, Supabase",
    details: [
      "Built a full-stack web application enabling small businesses to list their services",
      "User access management and service discovery platform",
    ],
  },
  {
    title: "Automated Audit Analytics & IT Governance",
    year: "2026",
    stack: "Python, CSV, Risk & Control Matrix",
    details: [
      "Developed automated audit analytics toolkit for procurement control failure detection",
      "Automated inventory reconciliation across thousands of records",
      "Detected self-approvals and high-value variances",
      "Designed 10-point RCM covering access control and data integrity",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white py-20 sm:py-28 transition-colors scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <a href="#projects" className="group inline-block">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 group-hover:text-gray-600 dark:group-hover:text-zinc-300 transition-colors">Projects</h2>
        </a>
        <p className="text-gray-500 dark:text-zinc-500 mb-12 max-w-xl">Academic and independent technical projects (2023–2026).</p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((proj, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-gray-300 dark:hover:border-zinc-700 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">{proj.title}</h3>
                <span className="text-xs text-gray-400 dark:text-zinc-600 font-mono shrink-0">{proj.year}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.stack.split(", ").map((tech, j) => (
                  <span key={j} className="text-[10px] font-medium text-gray-500 dark:text-zinc-500 bg-gray-100 dark:bg-zinc-800 rounded-full px-2 py-0.5">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-1.5">
                {proj.details.map((d, j) => (
                  <li key={j} className="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed flex items-start gap-2">
                    <span className="text-gray-300 dark:text-zinc-700 mt-1 select-none">—</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
