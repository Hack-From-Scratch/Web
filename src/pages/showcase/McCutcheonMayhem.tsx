import React from "react";

export const mayhemShows = [
  {
    id: "v1",
    title: "McCutcheon Mayhem Reloaded",
    date: "March 2026",
    link: "https://youtu.be/3frwl4BGT_w",
    description:
      "The return of McCutcheon Mayhem - trivia, challenges and a twist involving the RAs and Hall Club",
  },
  {
    id: "v2",
    title: "McCutcheon Mayhem v2",
    date: "March 2025",
    link: "https://youtu.be/VITu5GZV22E",
    description:
      "McCutcheon Mayhem comes back and is better than ever - more questions, more challenges and more mayhem!",
  },
];

export default function McCutcheonMayhem() {
  return (
    <div className="min-h-screen bg-[#f7f0db] text-slate-900 font-sans py-16 px-4 md:px-8">
      {/* Page Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 uppercase">
          <span className="text-slate-900">McCutcheon</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Mayhem
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-bold uppercase tracking-widest">
          Live from McCutcheon • Trivia, Challenges & Mayhem
        </p>
      </div>

      {/* The Broadcast Banners */}
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24 pb-20">
        {mayhemShows.map((show, index) => {
          // Alternate layout just like the P3 page to keep visual interest
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
                    // Auto-converts standard share links to embed links
                    src={show.link.replace("youtu.be/", "www.youtube.com/embed/")}
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
                    href={show.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-red-600/30 transition-all hover:-translate-y-1 items-center gap-3"
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
