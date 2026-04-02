import { useState } from "react";

export default function CreativeJam() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      title: "Audio Alchemist",
      judge: "Purdue Music Producers",
      judgeLogo: "/clubs/pmp.jpeg",
      desc: "For projects with a focus on music and sound.",
      criteria: ["Composition & Arrangement", "Sound Design & Mixing"],
      prizeType: "participation",
      prize: "Ableton Live 12 Intro License",
    },
    {
      title: "Player One",
      judge: "SIGGD",
      judgeLogo: "/clubs/siggd.png",
      desc: "For playable, interactive projects.",
      criteria: ["Game feel / Controls", "Core gameplay loop", "Innovation", "Intuitiveness"],
      prizeType: "raffle",
      prize: "1 Hyperkin Competitor Controller", // Updated text
    },
    {
      title: "World Builder",
      judge: "Creative Writing Club",
      judgeLogo: "/clubs/creativewritingclub.png",
      desc: "For projects with deep lore, environment design, writing, or immersive atmosphere.",
      criteria: ["Immersion & Delivery", "Originality", "Depth"],
      prizeType: "raffle",
    },
    {
      title: "From Scratch",
      judge: "Purdue Hackers",
      judgeLogo: "/clubs/purduehackers.jpeg",
      desc: "For the project that pushes the maker the most out of their comfort zone (all about HOW you build it).",
      criteria: [
        "Personal Growth & Lessons Learned",
        "Daily Checkpoints",
        "Technical Innovation & Creativity",
      ],
      prizeType: "raffle",
      prize: "1kg ELEGOO Black PLA 3D Printer Filament",
    },
    {
      title: "Mayhem",
      judge: "McCutcheon Mayhem Team",
      judgeLogo: "/clubs/mcutroyalhighlanders.jpeg",
      desc: "For the most absurd, chaotic, outside-the-box projects.",
      criteria: [
        "Creative Misuse of Technology",
        "Comedic Value",
        "Difficulty & Polish of Execution",
      ],
      prizeType: "raffle",
      prize: "Danny Devito life size cutout",
    },
    {
      title: "Visualization",
      judge: "Creative Coding Club",
      judgeLogo: "/clubs/creativecodingclub.jpeg",
      desc: "For projects with a focus on visual arts.",
      criteria: ["Art Direction & Style", "Technical Execution", "Visual Consistency"],
      prizeType: "raffle",
      prize: "UUNA TEK iDraw 2.0 H A3 pen plotter",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* HEADER */}
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          The Creative{" "}
          <span className="text-[var(--color-accent)] font-black tracking-tighter uppercase italic text-glow">
            Jam
          </span>
        </h1>
        <p className="text-xl text-[var(--text)] max-w-3xl leading-relaxed">
          Is there a new hobby you've wanted to try? Or an idea you've had that you've wanted to
          turn into reality? Participate in our week-long creative jam!
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl aspect-video mb-20">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/wKPTugyLfTs"
          title="Creative Jam Overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* CATEGORIES & CRITERIA SECTION */}
      <section className="mb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Category List */}
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-sm font-black mb-6 text-[var(--color-secondary)] uppercase tracking-[0.2em]">
              Select a Category
            </h2>
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(i)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 group relative overflow-hidden ${
                  activeCategory === i
                    ? "border-orange-500 bg-[#FFDB87] shadow-lg shadow-[#D2BA83]"
                    : "border-[var(--color-secondary)] bg-[var(--color-accent)]/10 hover:border-slate-700"
                }`}
              >
                {/* Floating Prize Label */}
                <div
                  className={`
                  absolute top-4 right-4
                  px-3 py-1 text-xs font-black tracking-widest uppercase
                  rounded-full shadow-md transition-all duration-300

                  ${
                    cat.prizeType === "raffle"
                      ? activeCategory === i
                        ? "bg-[var(--color-secondary)] text-white"
                        : "bg-[var(--color-secondary-dark)] text-white"
                      : activeCategory === i
                      ? "bg-orange-500 text-white"
                      : "bg-[var(--color-accent)] text-white"
                  }
                  `}
                >
                  {cat.prizeType === "raffle" ? "Raffle Prize" : "Participation Prize"}
                </div>
                <div className="flex justify-between items-center relative z-10">
                  <h3
                    className={`text-xl font-bold transition-colors ${
                      activeCategory === i
                        ? "text-black"
                        : "text-slate-600 group-hover:text-slate-800"
                    }`}
                  >
                    {cat.title}
                  </h3>
                </div>
                <p
                  className={`mt-2 text-sm leading-relaxed relative z-10 ${
                    activeCategory === i ? "text-[var(--text)]" : "text-slate-600"
                  }`}
                >
                  {cat.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Dynamic Judge/Criteria Display */}
          <div className="lg:w-1/2">
            <div className="sticky top-32 bg-[var(--color-secondary)] p-8 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden">
              {/* Judge Header */}
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-slate-900 p-2 rounded-xl border border-slate-700 flex items-center justify-center overflow-hidden">
                    <img
                      src={categories[activeCategory].judgeLogo}
                      alt={categories[activeCategory].judge}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-[var(--color-accent)] uppercase tracking-widest">
                      Brought to you by
                    </p>
                    <h2 className="text-xl font-normal tracking-wider text-white leading-tight">
                      {categories[activeCategory].judge}
                    </h2>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <i className="fa-solid text-slate-500 text-sm"></i> We encourage focusing on
              </h3>

              <ul className="space-y-4">
                {categories[activeCategory].criteria.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 animate-in slide-in-from-left-4 duration-300"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="w-6 h-6 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-check text-[var(--color-accent)] text-[10px]"></i>
                    </div>
                    <span className="text-slate-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Reward/Prize Hint */}
              <div className="mt-12 bg-slate-900/50 p-5 rounded-2xl border border-slate-700/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-slate-900 shadow-lg shadow-orange-500/20">
                    <i className="fa-solid fa-gift"></i>
                  </div>
                  <p className="text-sm text-[var(--text-light)]">
                    <span className="text-white font-bold">
                      {/* Updated logic to handle Player One specifically */}
                      {categories[activeCategory].title === "Player One"
                        ? "5 Individuals Receive:"
                        : categories[activeCategory].prizeType === "raffle"
                        ? "One Participant Receives:"
                        : "All Participants Receive:"}
                    </span>{" "}
                    {categories[activeCategory].prize}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBMISSION BLOCK */}
      <div className="mt-12 bg-slate-900 border border-slate-700 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#fa5c5c]/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <div className="w-20 h-20 bg-[#fa5c5c] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#fa5c5c]/30 rotate-3">
            <i className="fa-brands fa-itch-io text-4xl text-white -rotate-3"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Ready to submit your project?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            We are hosting our Creative Jam on Itch.io! Head over to our jam page to officially
            join, upload your files, and see what everyone else is building!
          </p>
          <a
            href="https://itch.io/jam/hackfromscratch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#fa5c5c] hover:bg-[#ff7b7b] text-white text-xl font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(250,92,92,0.4)]"
          >
            Go to the Itch.io Jam
            <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
