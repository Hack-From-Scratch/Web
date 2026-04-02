import { useState } from "react";

export default function SteamysShowcase() {
  const [activeFilm, setActiveFilm] = useState(0);

  const films = [
    {
      title: "TUPPERWARE",
      genre: "Comedy",
      youtubeId: "UDaCk0d9qMA",
      tagline: "Four roommates. One missing tupperware. Infinite chaos.",
      desc: "In a chaotic student apartment, a missing tupperware leads to a hilarious series of accusations and cultural clashes among four international roommates, only to reveal that the truth has been under their noses the entire time.",
    },
    {
      title: "Nightmare Cow",
      genre: "Horror / Comedy",
      youtubeId: "5HLEcPr6ybI",
      tagline: "Some secrets are better left in the pasture.",
      desc: "An independent film featuring two college students, one diligent in class and one lazy, as they figure out the dark secret their Animal Sciences professor has unleashed unknowingly on the world.",
    },
    {
      title: "Off the Track",
      genre: "Documentary",
      youtubeId: "nxaGxXQqC64",
      tagline: "Passion fuels every turn of the wheel.",
      desc: "Through the eyes of Alana Carter, a 25-year-old female race-car driver, this documentary delves into the high-speed thrills, challenges, and triumphs of carving a career in a male-dominated sport.",
    },
    {
      title: "JUXTAPOSED",
      genre: "Psychological Thriller",
      youtubeId: "viJSa5XsNYE",
      tagline: "The lens sees everything.",
      desc: "A photographer preparing for an upcoming showcase spirals into paranoia as he becomes increasingly critical of his work and begins to believe that his photographs are haunting him.",
    },
    {
      title: "BAGMAN",
      genre: "Action / Thriller",
      youtubeId: "R63ksrxo8zo",
      tagline: "Campus has a new protector.",
      desc: "A college student who protects the streets of his campus as the caped vigilante, Bagman, hunts for an unknown drug dealer when he discovers cocaine while out on patrol.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* HEADER */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          The{" "}
          <span className="text-yellow-500 font-black tracking-tighter uppercase italic text-glow">
            Steamys
          </span>{" "}
          Film Festival
        </h1>
        <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
          Grab your popcorn and enjoy films brought to you by Purdue students!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* FILM SELECTION LIST */}
        <div className="lg:w-1/3 space-y-3">
          <h2 className="text-sm font-black mb-4 text-slate-400 uppercase tracking-[0.2em] pl-2">
            Official Selections
          </h2>
          {films.map((film, i) => (
            <button
              key={i}
              onClick={() => setActiveFilm(i)}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden flex flex-col gap-1 ${
                activeFilm === i
                  ? "border-yellow-500 bg-yellow-500/10 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
                  : "border-slate-700 bg-slate-900/50 hover:border-slate-500"
              }`}
            >
              <div className="flex justify-between items-center w-full">
                <h3
                  className={`text-lg font-bold ${
                    activeFilm === i ? "text-yellow-500" : "text-white"
                  }`}
                >
                  {film.title}
                </h3>
                {activeFilm === i && (
                  <i className="fa-solid fa-play text-yellow-500 text-sm animate-pulse"></i>
                )}
              </div>
              <span className="text-xs font-semibold tracking-wider uppercase text-black">
                {film.genre}
              </span>
            </button>
          ))}
        </div>

        {/* DYNAMIC SHOWCASE AREA */}
        <div className="lg:w-2/3">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl sticky top-8">
            {/* 16:9 Video Container */}
            <div className="relative w-full aspect-video bg-black border-b border-slate-800">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${films[activeFilm].youtubeId}?autoplay=0`}
                title={films[activeFilm].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Film Details */}
            <div className="p-8 md:p-10">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-black uppercase tracking-widest rounded-full mb-4">
                  {films[activeFilm].genre}
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                  {films[activeFilm].title}
                </h2>
                <p className="text-lg text-yellow-500 font-medium italic">
                  "{films[activeFilm].tagline}"
                </p>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed">{films[activeFilm].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
