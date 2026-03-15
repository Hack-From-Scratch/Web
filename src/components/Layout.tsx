import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const participatingClubs = [
    { src: "/clubs/adliberation.jpeg", alt: "Ad Liberation" },
    { src: "/clubs/catalyst.png", alt: "Catalyst" },
    { src: "/clubs/cosplayclub.jpg", alt: "Cosplay Club" },
    { src: "/clubs/creativecodingclub.jpeg", alt: "Creative Coding Club" },
    { src: "/clubs/creativewritingclub.png", alt: "Creative Writing Club" },
    { src: "/clubs/fantasyclub.jpeg", alt: "Fantasy Club" },
    { src: "/clubs/hackindy.jpeg", alt: "Hack Indy" },
    { src: "/clubs/lifeonthewabash.jpg", alt: "Life on the Wabash" },
    { src: "/clubs/magicthegathering.jpeg", alt: "Magic the Gathering" },
    { src: "/clubs/purduechessclub.png", alt: "Purdue Chess Club" },
    { src: "/clubs/purduehackers.jpeg", alt: "Purdue Hackers" },
    { src: "/clubs/rr.jpeg", alt: "RR" },
    { src: "/clubs/rubegoldberg.jpeg", alt: "Rube Goldberg Club" },
    { src: "/clubs/runclub.png", alt: "Run Club" },
    { src: "/clubs/search.jpeg", alt: "SEARCH" },
    { src: "/clubs/siggd.png", alt: "SIGGD" },
    { src: "/clubs/touchgrass.png", alt: "Touch Grass Club" },
    // { src: "/clubs/caryclub.png", alt: "Cary Club" }, // Elevated to Sponsor
    // { src: "/clubs/mcutroyalhighlanders.jpeg", alt: "McCutcheon" }, // Elevated to Sponsor
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-orange-500 selection:text-white flex flex-col">
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold flex items-center gap-3 transition-transform hover:scale-105"
          >
            <img src="/logo.png" alt="HackFromScratch" className="w-10 h-10 object-contain" />
            <span>
              HackFrom<span className="text-orange-500">Scratch</span>
            </span>
          </Link>

          <div className="flex items-center gap-6 font-semibold">
            <Link
              to="/jam"
              className={`transition-colors ${
                location.pathname === "/jam" ? "text-orange-400" : "text-slate-300 hover:text-white"
              }`}
            >
              Creative Jam
            </Link>

            <Link
              to="/donate"
              className="bg-orange-500 hover:bg-orange-400 text-slate-900 px-6 py-2 rounded-lg font-bold shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Donate
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Sponsor Grid */}
        <h3 className="text-xl font-bold text-slate-400 mb-6">Sponsored By</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12 opacity-90 grayscale hover:grayscale-0 transition-all duration-500">
          <img
            src="/sponsors/purdueinnovates.jpg"
            alt="Purdue Innovates"
            className="h-12 object-contain"
          />
          <img src="/sponsors/caryclub.png" alt="Cary Club" className="h-12 object-contain" />
          <img src="/sponsors/wl9.png" alt="Cary Club" className="h-12 object-contain" />
          <img
            src="/sponsors/mcutroyalhighlanders.jpeg"
            alt="McCutcheon Royal Highlanders"
            className="h-12 object-contain"
          />
          <img src="/sponsors/datamine.png" alt="The Data Mine" className="h-12 object-contain" />
        </div>

        {/* Club Grid */}
        <h3 className="text-lg font-bold text-slate-500 mb-6">Featuring Student Creators From</h3>
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {participatingClubs.map((club, index) => (
            <img
              key={index}
              src={club.src}
              alt={club.alt}
              title={club.alt} /* Adds a nice hover tooltip for the club name */
              className="h-10 object-contain rounded-md" /* Added rounded-md in case some jpegs have sharp white corners */
            />
          ))}
        </div>
      </div>

      <footer className="bg-slate-950 border-t border-slate-800 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Social Icons Grid */}
          <div className="flex justify-center items-center gap-8 mb-6">
            <a
              href="https://discord.com/invite/Cf5xd6hYMs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="text-slate-400 hover:text-[#5865F2] transition-all duration-300 hover:-translate-y-1"
            >
              <i className="fa-brands fa-discord text-3xl"></i>
            </a>

            <a
              href="https://instagram.com/hackfromscratch2026"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-slate-400 hover:text-[#E1306C] transition-all duration-300 hover:-translate-y-1"
            >
              <i className="fa-brands fa-instagram text-3xl"></i>
            </a>

            <a
              href="https://x.com/HackFromScratch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              {/* Note: Font Awesome uses 'fa-x-twitter' for the new X logo */}
              <i className="fa-brands fa-x-twitter text-3xl"></i>
            </a>

            <a
              href="https://www.youtube.com/channel/UCb89kHtc8hzLqaJMKDiKrRw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-slate-400 hover:text-[#FF0000] transition-all duration-300 hover:-translate-y-1"
            >
              <i className="fa-brands fa-youtube text-3xl"></i>
            </a>
          </div>

          <p className="text-slate-600 text-sm">HackFromScratch 2026.</p>
        </div>
      </footer>
    </div>
  );
}
