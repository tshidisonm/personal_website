const achievements = [
  "Bronze Standard of the Duke of Edinburgh's International Award — 2016",
  "Languages: English, Sepedi, Setswana, IsiZulu",
  "Driving License Category C1",
];

export default function References() {
  return (
    <section id="references" className="w-full bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white py-20 sm:py-28 transition-colors scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <a href="#references" className="group inline-block">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 group-hover:text-gray-600 dark:group-hover:text-zinc-300 transition-colors">References &amp; Achievements</h2>
        </a>
        <p className="text-gray-500 dark:text-zinc-500 mb-12 max-w-xl">Professional references and additional information.</p>

        <div className="p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 mb-16">
          <p className="text-gray-600 dark:text-zinc-400 text-sm">References are available upon request.</p>
        </div>

        <h3 className="text-xl font-semibold mb-6">Achievements &amp; More Information</h3>
        <div className="p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
          <ul className="space-y-3">
            {achievements.map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-zinc-400 flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-zinc-700 mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
