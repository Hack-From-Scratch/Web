export const steamSorcerySegments = [
  {
    id: "ss1",
    title: "Fantasy Worldbuilding & Character Design",
    date: "March 2026",
    link: "https://www.youtube.com/embed/KodMUoRm3kQ?start=521",
    originalLink: "https://youtu.be/KodMUoRm3kQ?t=521",
    description:
      "Watch as Purdue Fantasy Club discusses fantasy character and world design with Jayden!",
  },
  {
    id: "ss2",
    title: "Campaigndo Direct 2026",
    date: "March 2026",
    link: "https://www.youtube.com/embed/KodMUoRm3kQ?start=7430",
    originalLink: "https://youtu.be/KodMUoRm3kQ?t=7430",
    description: "A showcase of 3 of the incredible fantasy campaigns going on at Purdue!",
  },
];

export default function SteamAndSorcery() {
  return (
    <div className="min-h-screen bg-[#f7f0db] text-slate-900 font-sans py-16 px-4 md:px-8">
      {/* Page Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 uppercase">
          <span className="text-slate-900">Steam &</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-emerald-500">
            Sorcery
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-bold uppercase tracking-widest">
          Dive into the fantastical world of D&D and Fantasy at Purdue!
        </p>
      </div>

      {/* The Broadcast Banners */}
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24 pb-20">
        {steamSorcerySegments.map((show, index) => {
          // Alternate layout just like the Mayhem page to keep visual interest
          const isEven = index % 2 === 0;

          return (
            <div
              key={show.id}
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12 bg-white/60 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-xl border-4 border-slate-200`}
            >
              {/* YouTube Iframe Side */}
              <div className="w-full md:w-7/12 flex-shrink-0">
                <div className="relative w-full pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl bg-black border-4 border-slate-900">
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
                  <span className="inline-block bg-slate-900 text-white text-xs font-black uppercase tracking-widest py-1 px-3 rounded-full mb-4">
                    {show.date}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">
                  {show.title}
                </h2>

                <p className="text-lg text-slate-700 leading-relaxed mb-8 font-medium">
                  {show.description}
                </p>

                {/* Watch Button */}
                <div className="mt-8">
                  <a
                    href={show.originalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-violet-600/30 transition-all hover:-translate-y-1 items-center gap-3"
                  >
                    <i className="fa-brands fa-youtube text-xl"></i> Watch on YouTube
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
