import { Link } from "react-router-dom";

export default function Showcase() {
  const showcaseEvents = [
    // --- ACTIVE EVENTS ---
    {
      id: "steam",
      title: "Steam & Sorcery",
      desc: "Page Coming Soon",
      route: "#",
      isActive: true,
      // Red to Yellow gradient
      bgClass: "bg-gradient-to-r from-red-600 to-yellow-500",
      textClass: "text-white drop-shadow-md",
    },
    {
      id: "purdue",
      title: "Purdue Plays",
      desc: "Page Coming Soon",
      route: "#",
      isActive: true,
      // Neon Blue to Neon Purple gradient
      bgClass: "bg-gradient-to-r from-cyan-400 to-purple-600",
      textClass: "text-white drop-shadow-md",
    },
    {
      id: "p3",
      // We leave title blank here because we custom render the red/yellow text below
      title: "",
      desc: "A showcase of 25+ Purdue student games",
      route: "/showcase/p3",
      isActive: true,
      // Solid Blue Background
      bgClass: "bg-blue-600",
      textClass: "",
      isP3: true, // Special flag to render the custom text colors
    },
    {
      id: "steamys",
      title: "The Steamys",
      // desc: "A showcase of 6 student films",
      desc: "COMING SOON",
      route: "/showcase/steamys",
      isActive: true,
      bgClass: "bg-red-950", // Deep velvet red
      textClass: "text-amber-400", // Award-statue gold
    },
    // --- UPCOMING EVENTS (Greyed Out) ---
    {
      id: "mccutcheon",
      title: "McCutcheon Mayhem",
      desc: "COMING SOON",
      route: "#",
      isActive: false,
      bgClass: "bg-slate-600",
      textClass: "text-slate-300",
    },
    {
      id: "tinydesk",
      title: "Wiley Radio Tinydesk Conert",
      desc: "COMING SOON",
      route: "#",
      isActive: false,
      bgClass: "bg-slate-600",
      textClass: "text-slate-300",
    },
    {
      id: "closing",
      title: "Highlights & Closing Ceremony",
      desc: "COMING SOON",
      route: "#",
      isActive: false,
      bgClass: "bg-slate-600",
      textClass: "text-slate-300",
    },
    {
      id: "workshops",
      title: "Workshops",
      desc: "COMING SOON",
      route: "#",
      isActive: false,
      bgClass: "bg-slate-600",
      textClass: "text-slate-300",
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
        <div className="w-full flex flex-col pb-24">
          {showcaseEvents.map((event, index) => {
            // The Inner Content of the block (Title + Desc)
            const BlockContent = (
              <div className="flex items-center justify-between w-full px-8 py-6 md:py-8">
                <div>
                  {/* Custom render for P3, normal render for everything else */}
                  {event.isP3 ? (
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight drop-shadow-md">
                      <span className="text-red-500">P</span>
                      <span className="text-yellow-400">3</span>:{" "}
                      <span className="text-red-500">Purdue</span>{" "}
                      <span className="text-yellow-400">Project Pantheon</span>
                    </h2>
                  ) : (
                    <h2
                      className={`text-3xl md:text-5xl font-black tracking-tight ${event.textClass}`}
                    >
                      {event.title}
                    </h2>
                  )}

                  <p
                    className={`text-sm md:text-lg font-bold uppercase tracking-widest mt-2 ${
                      event.isActive ? "text-white/80" : "text-slate-400"
                    }`}
                  >
                    {event.desc}
                  </p>
                </div>

                {/* Status Icon */}
                <div className="text-4xl opacity-50">
                  {event.isActive ? (
                    <i className="fa-solid fa-chevron-right text-white"></i>
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

            // Inline styles to handle the vertical overlap
            // We use negative margin-top to pull the blocks up under the peg of the block above them
            const dynamicStyles = {
              zIndex: 50 - index, // Top blocks must have higher z-index to overlap bottom ones
              marginTop: index === 0 ? "0" : "-6px",
              display: "block",
            };

            // If active, wrap in a Link. If not, just render a div.
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
      </div>
    </div>
  );
}
