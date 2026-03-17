import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const participatingClubs = [
    { src: "/clubs/adliberation.jpeg", alt: "Ad Liberation", link: "https://adliberation.net/" },
    { src: "/clubs/catalyst.png", alt: "Catalyst", link: "" },
    { src: "/clubs/cosplayclub.jpg", alt: "Cosplay Club", link: "" },
    { src: "/clubs/creativecodingclub.jpeg", alt: "Creative Coding Club", link: "" },
    {
      src: "/clubs/creativewritingclub.png",
      alt: "Creative Writing Club",
      link: "https://discord.gg/G2mUjyA",
    },
    { src: "/clubs/fantasyclub.jpeg", alt: "Fantasy Club", link: "" },
    { src: "/clubs/hackindy.jpeg", alt: "Hack Indy", link: "https://www.hackindy.io/" },
    {
      src: "/clubs/lifeonthewabash.jpg",
      alt: "Life on the Wabash",
      link: "https://www.youtube.com/@LifeOnTheWabash",
    },
    { src: "/clubs/magicthegathering.jpeg", alt: "Magic the Gathering", link: "" },
    { src: "/clubs/purduechessclub.png", alt: "Purdue Chess Club", link: "" },
    {
      src: "/clubs/purduehackers.jpeg",
      alt: "Purdue Hackers",
      link: "https://www.purduehackers.com/",
    },
    {
      src: "/clubs/rr.jpeg",
      alt: "Railside Robotics",
      link: "https://sites.google.com/view/railsiderobotics/home?authuser=0",
    },
    {
      src: "/clubs/rubegoldberg.jpeg",
      alt: "Rube Goldberg Club",
      link: "https://boilermakerrubegoldberg.com/",
    },
    { src: "/clubs/runclub.png", alt: "Run Club", link: "" },
    {
      src: "/clubs/search.jpeg",
      alt: "SEARCH",
      link: "https://www.instagram.com/purdue_search?igsh=MXdqY2Rzd3ZydHlhZw==",
    },
    { src: "/clubs/siggd.png", alt: "SIGGD", link: "https://purduesiggd.github.io/" },
    {
      src: "/clubs/touchgrass.png",
      alt: "Touch Grass Club",
      link: "https://www.instagram.com/p/DTt3k18DdWV/",
    },
    {
      src: "/clubs/pmp.jpeg",
      alt: "Purdue Music Producers",
      link: "https://discord.gg/UFDhq5VfaF",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f0db] text-slate-900 font-sans selection:bg-[#dbae53] selection:text-slate-900 flex flex-col">
      <nav className="sticky top-0 z-50 bg-[#f7f0db]/90 backdrop-blur border-b border-[#d7c9a8] p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold flex items-center gap-3 transition-transform hover:scale-105"
          >
            <img src="/logo.png" alt="HackFromScratch" className="w-10 h-10 object-contain" />
            <span>
              HackFrom<span className="text-[#fcc15a]">Scratch</span>
            </span>
          </Link>

          <div className="flex items-center gap-6 font-semibold">
            <Link
              to="/jam"
              className={`transition-colors ${
                location.pathname === "/jam" ? "text-[#fcc15a]" : "text-slate-900 hover:text-[#fcc15a]"
              }`}
            >
              Creative Jam
            </Link>

            <Link
              to="/donate"
              className="bg-[#fcc15a] hover:bg-orange-400 text-slate-900 px-6 py-2 rounded-lg font-bold shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Donate
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <div className="max-w-7xl mx-auto px-4 text-center mt-12">
        {/* Sponsor Grid - LOGOS INCREASED */}
        <h3 className="text-2xl font-bold text-black mb-8 uppercase tracking-widest">
          Sponsored By
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 mb-16 opacity-90 grayscale hover:grayscale-0 transition-all duration-500">
          <a href="https://purdueinnovates.org/" rel="noopener noreferrer">
            <img
              src="/sponsors/purdueinnovates.jpg"
              alt="Purdue Innovates"
              className="h-20 md:h-24 object-contain"
            />
          </a>
          <a
            href="https://www.instagram.com/purdue_cary_club/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="/sponsors/caryclub.png"
              alt="Cary Club"
              className="h-20 md:h-24 object-contain"
            />
          </a>
          <a
            href="https://www.gqtmovies.com/gqt-wabash-landing-9"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="/sponsors/wl9.png"
              alt="Wabash Landing 9"
              className="h-20 md:h-24 object-contain"
            />
          </a>
          <a
            href="https://www.instagram.com/mchighlanders/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="/sponsors/mcutroyalhighlanders.jpeg"
              alt="McCutcheon Royal Highlanders"
              className="h-20 md:h-24 object-contain"
            />
          </a>
          <a href="https://datamine.purdue.edu/" rel="noopener noreferrer" target="_blank">
            <img
              src="/sponsors/datamine.png"
              alt="The Data Mine"
              className="h-20 md:h-24 object-contain"
            />
          </a>
        </div>

        {/* Club Grid */}
        <h3 className="text-lg font-bold text-black mb-6">Featuring Student Creators From</h3>
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {participatingClubs.map((club, index) => (
            <a href={club.link} rel="noopener noreferrer" target="_blank" key={index}>
              <img
                src={club.src}
                alt={club.alt}
                title={club.alt}
                className="h-10 object-contain rounded-md"
              />
            </a>
          ))}
        </div>
      </div>

      <footer className="bg-[#e8e0c8] py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Social Icons Grid */}
          <div className="flex justify-center items-center gap-8 mb-6">
            <a
              href="https://discord.com/invite/Cf5xd6hYMs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="text-slate-700 hover:text-[#5865F2] transition-all duration-300 hover:-translate-y-1"
            >
              <i className="fa-brands fa-discord text-3xl"></i>
            </a>

            <a
              href="https://instagram.com/hackfromscratch2026"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-slate-700 hover:text-[#e95950] transition-all duration-300 hover:-translate-y-1"
            >
              <i className="fa-brands fa-instagram text-3xl"></i>
            </a>

            <a
              href="https://x.com/HackFromScratch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-slate-700 hover:text-black transition-all duration-300 hover:-translate-y-1"
            >
              <i className="fa-brands fa-x-twitter text-3xl"></i>
            </a>

            <a
              href="https://www.youtube.com/channel/UCb89kHtc8hzLqaJMKDiKrRw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-slate-700 hover:text-[#FF0000] transition-all duration-300 hover:-translate-y-1"
            >
              <i className="fa-brands fa-youtube text-3xl"></i>
            </a>

            <a
              href="https://www.reddit.com/" /* Added placeholder reddit link based on your previous icon */
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reddit"
              className="text-slate-700 hover:text-[#FF4500] transition-all duration-300 hover:-translate-y-1"
            >
              <i className="fa-brands fa-reddit text-3xl"></i>
            </a>
          </div>

          <p className="text-slate-600 text-sm">HackFromScratch 2026.</p>
        </div>
      </footer>
    </div>
  );
}
