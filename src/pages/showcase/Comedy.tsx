export const comedyFromScratchSegments = [
  {
    id: "cfs1",
    title: "Crazy Monkeys & Ad Liberation Joint Comedy Show",
    date: "April 2026",
    link: "https://www.youtube.com/embed/ZXVdHtbcnqU?start=7183",
    originalLink: "https://youtu.be/ZXVdHtbcnqU?list=PLH5o8OsF4P6mhpzpYe0Nt5z89d5fdvyU0&t=7183",
    description:
      "A hilarious joint comedy show featuring Purdue's Crazy Monkeys and Ad Liberation, performing live for the Hack From Scratch charity livestream.",
  },
];

export default function ComedyFromScratch() {
  return (
    <div className="min-h-screen bg-[#f7f0db] text-amber-950 font-sans py-16 px-4 md:px-8">
      {/* Page Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase text-amber-950 drop-shadow-sm">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
            Comedy
          </span>
        </h1>
        <p className="text-xl text-amber-900 max-w-2xl mx-auto font-bold uppercase tracking-widest">
          Live Collegiate Comedy & Improv
        </p>
      </div>

      {/* The Broadcast Banners */}
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24 pb-20">
        {comedyFromScratchSegments.map((show, index) => {
          // Alternate layout just like the previous pages
          const isEven = index % 2 === 0;

          return (
            <div
              key={show.id}
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12 bg-gradient-to-r from-amber-200 to-yellow-500 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-xl border-4 border-amber-300`}
            >
              {/* YouTube Iframe Side */}
              <div className="w-full md:w-7/12 flex-shrink-0">
                <div className="relative w-full pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl bg-black border-4 border-amber-950">
                  <iframe
                    src={show.link}
                    title={`${show.title} Broadcast`}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Info / Description Side */}
              <div className="w-full md:w-5/12 flex flex-col justify-center text-left h-full">
                <div className="mb-2">
                  <span className="inline-block bg-amber-950 text-white text-xs font-black uppercase tracking-widest py-1 px-3 rounded-full mb-4">
                    {show.date}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-amber-950 drop-shadow-sm mb-6 tracking-tight uppercase">
                  {show.title}
                </h2>

                <p className="text-lg text-amber-900 leading-relaxed mb-8 font-medium">
                  {show.description}
                </p>

                {/* Watch Button */}
                <div className="mt-8">
                  <a
                    href={show.originalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex bg-amber-950 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-amber-900/30 transition-all hover:-translate-y-1 items-center gap-3"
                  >
                    <i className="fa-brands fa-youtube text-amber-50 text-xl"></i> Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
