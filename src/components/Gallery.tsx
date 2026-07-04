const BASE = import.meta.env.BASE_URL

const images = [
  "IMG_7387.JPG",
  "IMG_7390.JPG",
  "IMG_7397.JPG",
  "IMG_7418.JPG",
  "IMG_7435.JPG",
  "IMG_7454.JPG",
  "IMG_7464.JPG",
  "IMG_7466.JPG",
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full bg-white dark:bg-zinc-950 text-black dark:text-white py-20 sm:py-28 transition-colors scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <a href="#gallery" className="group inline-block">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 group-hover:text-gray-600 dark:group-hover:text-zinc-300 transition-colors">Gallery</h2>
        </a>
        <p className="text-gray-500 dark:text-zinc-500 mb-12 max-w-xl">Photos from my journey.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <a
              key={i}
              href={BASE + `gallery/${img}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-[3/2] overflow-hidden rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-100 dark:bg-zinc-900"
            >
              <img
                src={BASE + `gallery/${img}`}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
