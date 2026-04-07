import { Link } from "react-router-dom";

export default function Showcase() {
  const showcaseEvents = [
    {
      id: "steam",
      title: "Steam & Sorcery",
      desc: "A Showcase of Fantasy at Purdue",
      route: "/showcase/steamandsorcery",
      isActive: true,
      // Muted from amber to stone/orange for a softer tavern feel
      bgClass: "bg-gradient-to-r from-stone-800 to-orange-900",
      textClass: "text-orange-50 drop-shadow-md",
    },
    {
      id: "purdue",
      title: "Purdue Plays",
      desc: "Gameplay brought to you by Purdue students",
      route: "/showcase/purdueplays",
      isActive: true,
      // Shifted from harsh cyan/purple to softer sky/indigo
      bgClass: "bg-gradient-to-r from-sky-600 to-indigo-600",
      textClass: "text-white drop-shadow-md",
    },
    {
      id: "p3",
      title: "",
      desc: "A showcase of 25+ Purdue student games",
      route: "/showcase/p3",
      isActive: true,
      // Softened from true blue-600 to a calmer sky-700
      bgClass: "bg-sky-700",
      textClass: "",
      isP3: true,
    },
    {
      id: "steamys",
      title: "The Steamys",
      desc: "A showcase of Purdue student films",
      route: "/showcase/steamys",
      isActive: true,
      // Shifted from stark red/yellow to a richer rose/amber
      bgClass: "bg-gradient-to-r from-rose-700 to-amber-600",
      textClass: "text-white drop-shadow-md",
    },
    {
      id: "mccutcheon",
      title: "McCutcheon Mayhem",
      desc: "A chaotic 'trivia' game show run by Purdue students",
      route: "/showcase/mcutmayhem",
      isActive: true,
      // Replaced cyan/red with sky/rose for a less muddy middle
      bgClass: "bg-gradient-to-r from-sky-700 via-indigo-600 to-rose-700",
      textClass: "text-white drop-shadow-md",
    },
    {
      id: "music",
      title: "Tracks From Scratch",
      desc: "A showcase of the music scene at Purdue",
      route: "/showcase/tracksfromscratch",
      isActive: true,
      // Shifted emerald to teal to lower the neon intensity
      bgClass: "bg-gradient-to-r from-slate-800 to-teal-700",
      textClass: "text-teal-50 drop-shadow-md",
    },
    {
      id: "comedy",
      title: "Comedy",
      desc: "Students making funny jokes",
      route: "/showcase/comedy",
      isActive: true,
      // Warmed up the yellow so it's less blinding
      bgClass: "bg-gradient-to-r from-amber-200 to-yellow-500",
      textClass: "text-amber-950 drop-shadow-sm",
      descClass: "text-amber-900",
      iconClass: "text-amber-950",
    },
  ];

  return (
    <div className="w-full bg-[#f7f0db] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight text-slate-900">
            The Vault
          </h1>
          <p className="text-xl text-slate-600 font-bold uppercase tracking-widest">
            HackFromScratch Event Archives
          </p>
        </div>

        {/* The Full-Screen Scratch Stack */}
        <div className="w-full flex flex-col pb-12">
          {showcaseEvents.map((event, index) => {
            const BlockContent = (
              <div className="flex items-center justify-between w-full px-8 py-6 md:py-8">
                <div>
                  {event.isP3 ? (
                    // FIX 1: Changed tracking-tight to tracking-wider
                    <h2 className="text-3xl md:text-5xl font-black tracking-wider drop-shadow-md">
                      <span className="text-red-500">P</span>
                      <span className="text-yellow-400">3</span>:{" "}
                      <span className="text-red-500">Purdue</span>{" "}
                      <span className="text-yellow-400">Project Pantheon</span>
                    </h2>
                  ) : (
                    // FIX 1: Changed tracking-tight to tracking-wider
                    <h2
                      className={`text-3xl md:text-5xl font-black tracking-wider ${event.textClass}`}
                    >
                      {event.title}
                    </h2>
                  )}

                  <p
                    className={`text-sm md:text-lg font-bold uppercase tracking-widest mt-2 ${
                      event.descClass || (event.isActive ? "text-white/80" : "text-slate-400")
                    }`}
                  >
                    {event.desc}
                  </p>
                </div>

                {/* Status Icon */}
                <div className="text-4xl opacity-50">
                  {event.isActive ? (
                    <i
                      className={`fa-solid fa-chevron-right ${event.iconClass || "text-white"}`}
                    ></i>
                  ) : (
                    <i className="fa-solid fa-lock text-slate-400"></i>
                  )}
                </div>
              </div>
            );

            // Styling for the block itself
            const blockStyles = `scratch-block-vertical w-full ${event.bgClass} ${
              event.isActive
                ? "hover:brightness-110 cursor-pointer shadow-lg"
                : "cursor-not-allowed opacity-80"
            }`;

            const dynamicStyles = {
              zIndex: 50 - index,
              marginTop: index === 0 ? "0" : "-6px",
              display: "block",
            };

            return event.isActive ? (
              <Link key={event.id} to={event.route} className={blockStyles} style={dynamicStyles}>
                {BlockContent}
              </Link>
            ) : (
              <div key={event.id} className={blockStyles} style={dynamicStyles}>
                {BlockContent}
              </div>
            );
          })}
        </div>

        {/* --- YouTube Playlist Archive Link --- */}
        <div className="flex justify-center mt-8 mb-12">
          <a
            href="https://www.youtube.com/playlist?list=PLH5o8OsF4P6mhpzpYe0Nt5z89d5fdvyU0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 md:px-12 rounded-full shadow-xl shadow-red-600/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 text-sm md:text-lg uppercase tracking-widest text-center"
          >
            <i className="fa-brands fa-youtube text-2xl"></i>
            Access the Full HackFromScratch Archives
          </a>
        </div>
      </div>
    </div>
  );
}
