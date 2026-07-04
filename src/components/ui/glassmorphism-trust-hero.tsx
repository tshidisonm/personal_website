import { ArrowRight, FileText, Github, Linkedin, ExternalLink, GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const LINKS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/frans-matome-ngwepe-b474522b1/", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/tshidisonm", icon: Github },
  { name: "Coursera", url: "https://www.coursera.org/learner/frans-matome-ngwepe-4394", icon: GraduationCap },
];

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white overflow-hidden font-sans transition-colors">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 dark:hidden"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}bg/use.jpg)`,
          maskImage: "linear-gradient(180deg, transparent 0%, black 20%, black 60%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 20%, black 60%, transparent)",
        }}
      />
      <div
        className="absolute inset-0 z-0 bg-[url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80)] bg-cover bg-center opacity-20 hidden dark:block"
        style={{
          maskImage: "linear-gradient(180deg, transparent 0%, black 20%, black 60%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 20%, black 60%, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-12 sm:px-6 md:pt-36 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9]">
              Frans Matome<br />
              <span className="bg-gradient-to-br from-gray-900 via-gray-900 to-[#b8860b] dark:from-white dark:via-white dark:to-[#ffcd75] bg-clip-text text-transparent">Ngwepe</span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-black dark:text-zinc-400">
              AI Researcher &amp; Machine Learning Engineer
            </p>

            <p className="max-w-2xl text-base text-black dark:text-zinc-400 leading-relaxed">
              Technology-focused graduate in Mathematical Sciences and Computer Science from the University of Limpopo (BSc 2024, BSc Hons 2025). Currently pursuing an MSc in Computer Science. Experienced in building ML models, full-stack AI solutions, and tutoring mathematics and computer science at university level. Oracle AI Foundations certified.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-black dark:text-zinc-400">
              <span className="flex items-center gap-1.5"><Mail className="w-4 h-4" /> tshidisonm@gmail.com</span>
              <span className="flex items-center gap-1.5"><Phone className="w-4 h-4" /> +27 81 579 8700</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Gauteng, South Africa</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 px-4 py-2 text-sm font-medium text-black dark:text-zinc-300 backdrop-blur-sm transition-all hover:bg-gray-200/50 dark:hover:bg-white/10 hover:text-black dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20">
                    <Icon className="w-4 h-4" /> {link.name} <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#experience"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 dark:bg-white px-8 py-4 text-sm font-semibold text-white dark:text-zinc-950 transition-all hover:scale-[1.02] hover:bg-gray-800 dark:hover:bg-zinc-200 active:scale-[0.98]">
                View Experience <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={import.meta.env.BASE_URL + "cv/CV-FM-Ngwepe202606.pdf"} target="_blank"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 px-8 py-4 text-sm font-semibold text-black dark:text-white backdrop-blur-sm transition-colors hover:bg-gray-200/50 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20">
                <FileText className="w-4 h-4" /> Download CV
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl">
              <img
                src={import.meta.env.BASE_URL + "gallery/IMG_7454.JPG"}
                alt="Frans Matome Ngwepe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
