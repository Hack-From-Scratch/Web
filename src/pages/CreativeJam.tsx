import { useState } from "react";

export default function CreativeJam() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      title: "Player One",
      judge: "SIGGD",
      judgeLogo: "/clubs/siggd.png",
      desc: "For playable, interactive projects.",
      criteria: ["Game feel / Controls", "Core gameplay loop", "Innovation", "Intuitiveness"],
    },
    {
      title: "Worldbuilder",
      judge: "Creative Writing Club",
      judgeLogo: "/clubs/creativewritingclub.png",
      desc: "For projects with deep lore, environment design, writing, or immersive atmosphere.",
      criteria: ["Immersion & Delivery", "Originality", "Depth"],
    },
    // {
    //   title: "Purdue Innovates for Impact",
    //   judge: "Catalyst",
    //   judgeLogo: "/clubs/catalyst.png",
    //   desc: "For projects that solve a real-world problem or create a meaningful impact on the community.",
    //   criteria: [
    //     "Feasibility",
    //     "Relevance to Greater Lafayette Residents",
    //     "Scalability (Beyond Lafayette)",
    //     "Accessibility",
    //     "User Experience",
    //     "Sustainability",
    //   ],
    // },
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
    },
    {
      title: "Mayhem",
      judge: "McCutcheon Mayhem Team",
      judgeLogo: "/clubs/mcutroyalhighlanders.jpeg",
      desc: "For the most absurd, chaotic, outside-the-box projects.",
      criteria: [
        // NOTE: MADE THESE UP
        "Creative Misuse of Technology",
        "Comedic Value",
        "Difficulty & Polish of Execution",
      ],
    },
    {
      title: "Visualization",
      judge: "Creative Coding Club",
      judgeLogo: "/clubs/creativecodingclub.jpeg",
      desc: "For projects with a focus on visual arts.",
      criteria: [
        // NOTE: MADE THESE UP
        "Art Direction & Style",
        "Technical Execution",
        "Visual Consistency",
      ],
    },
    {
      title: "Audio Alchemist",
      judge: "Purdue Music Producers",
      judgeLogo: "/clubs/pmp.jpeg",
      desc: "For projects with a focus on music and sound.",
      criteria: [
        // NOTE: MADE THESE UP
        "Composition & Arrangement",
        "Sound Design & Mixing",
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* HEADER */}
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          The Creative{" "}
          <span className="text-[#fcc15a] font-black tracking-tighter uppercase italic text-glow">
            Jam
          </span>
        </h1>
        <p className="text-xl text-slate-800 max-w-3xl leading-relaxed">
          Is there a new hobby you've wanted to try? Or an idea you've had that you've wanted to
          turn into reality? Participate in our week-long creative jam!
        </p>
      </div>

      {/* CATEGORIES & CRITERIA SECTION */}
      <section className="mb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Category List */}
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-sm font-black mb-6 text-slate-800 uppercase tracking-[0.2em]">
              Select a Category
            </h2>
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(i)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 group relative overflow-hidden ${
                  activeCategory === i
                    ? "border-orange-500 bg-[#fcc15a]/10 shadow-lg shadow-orange-500/5"
                    : "border-slate-800 bg-slate-600 hover:border-slate-700"
                }`}
              >
                <div className="flex justify-between items-center relative z-10">
                  <h3
                    className={`text-xl font-bold transition-colors ${
                      activeCategory === i
                        ? "text-black"
                        : "text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    {cat.title}
                  </h3>
                </div>
                <p
                  className={`mt-2 text-sm leading-relaxed relative z-10 ${
                    activeCategory === i ? "text-slate-800" : "text-slate-300"
                  }`}
                >
                  {cat.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Dynamic Judge/Criteria Display */}
          <div className="lg:w-1/2">
            <div className="sticky top-32 bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden">
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
                    <p className="text-[10px] font-black text-[#fcc15a] uppercase tracking-widest">
                      Official Judge
                    </p>
                    <h2 className="text-xl font-bold text-white leading-tight">
                      {categories[activeCategory].judge}
                    </h2>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <i className="fa-solid fa-gavel text-slate-500 text-sm"></i> Judging Criteria
              </h3>

              <ul className="space-y-4">
                {categories[activeCategory].criteria.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 animate-in slide-in-from-left-4 duration-300"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="w-6 h-6 bg-[#fcc15a]/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-check text-[#fcc15a] text-[10px]"></i>
                    </div>
                    <span className="text-slate-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Reward/Prize Hint */}
              <div className="mt-12 bg-slate-900/50 p-5 rounded-2xl border border-slate-700/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#fcc15a] rounded-full flex items-center justify-center text-slate-900 shadow-lg shadow-orange-500/20">
                    <i className="fa-solid fa-gift"></i>
                  </div>
                  <p className="text-sm text-slate-400">
                    <span className="text-white font-bold">Category Prize:</span> TBA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBMISSION BLOCK */}
      <div className="bg-slate-800 p-10 rounded-3xl border border-slate-800 relative shadow-2xl">
        <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#fcc15a] text-slate-900 font-black px-4 py-1 rounded text-xs uppercase tracking-tighter">
          Submit Now
        </div>

        <h2 className="text-2xl font-bold mb-8 text-white">Join the Jam</h2>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                My Category
              </label>
              <select
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white focus:border-orange-500 outline-none appearance-none cursor-pointer hover:bg-slate-800 transition-colors"
                value={categories[activeCategory].title}
                onChange={(e) => {
                  const idx = categories.findIndex((c) => c.title === e.target.value);
                  setActiveCategory(idx);
                }}
              >
                {categories.map((cat, i) => (
                  <option key={i} value={cat.title}>
                    {cat.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                Project Link
              </label>
              <input
                type="url"
                placeholder="GitHub / Portfolio / Drive"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white focus:border-orange-500 outline-none hover:bg-slate-800 transition-colors"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white hover:bg-[#fcc15a] hover:text-slate-950 text-slate-950 font-black text-lg py-5 rounded-2xl transition-all shadow-xl hover:-translate-y-1 uppercase tracking-tight"
          >
            Lock In Final Entry
          </button>
        </form>
      </div>
    </div>
  );
}
