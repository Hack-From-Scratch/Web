export default function Donate() {
  const tiers = [
    {
      price: 15,
      name: "The Swag Bag",
      desc: "Custom stickers, buttons, a laser-cut badge, and a custom printed receipt.",
    },
    {
      price: 25,
      name: "The Audio",
      desc: "Everything above, PLUS your choice of the PMP Compilation CD or the SIGGD Echoes of Isovios OST CD.",
    },
    {
      price: 40,
      name: "The Lore",
      desc: "Everything in the Swag Bag, PLUS your choice of the Sighorse book or the Creative Writing Club book.",
    },
    {
      price: 50,
      name: "The Shirt",
      desc: "The official HackFromScratch multi-color t-shirt, printed on-demand just for you.",
    },
    {
      price: 100,
      name: "VIP",
      desc: "Literally everything. Shirt, both books, both CDs, all the swag, signed by the creators, plus your name in the broadcast credits.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Support the <span className="text-[#fcc15a]">Scratch Foundation</span>
        </h1>
        <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
          All donations go directly to the Scratch Foundation. Purdue Innovates will match donations
          by supporting student creators and their creative work—meaning that you can get some
          awesome student-made swag for donating! Check out the reward tiers below.
        </p>
      </div>

      {/* REWARD SHOWCASE FLEX (Replaces Grid for center alignment) */}
      <div className="flex flex-wrap justify-center gap-6 mb-20">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] p-8 rounded-3xl border border-slate-700 bg-slate-800/90 hover:bg-slate-800 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(249,115,22,0.1)] hover:border-orange-500/50 group"
          >
            <h3 className="text-2xl font-bold mb-2 text-slate-200 group-hover:text-white transition-colors">
              {tier.name}
            </h3>
            <div className="mb-4">
              <span className="text-4xl font-black text-[#fcc15a]">${tier.price}</span>
              <span className="text-slate-500 font-bold text-sm ml-2 uppercase tracking-widest">
                Tier
              </span>
            </div>
            <p className="text-slate-300 flex-grow leading-relaxed">{tier.desc}</p>
          </div>
        ))}
      </div>

      {/* THE TILTIFY CTA BILLBOARD */}
      <div className="max-w-3xl mx-auto bg-slate-900 p-12 rounded-3xl border-2 border-slate-800 shadow-2xl text-center relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#fcc15a]/5 blur-[60px] pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-white uppercase tracking-tight">
            Ready to make an impact?
          </h2>
          <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
            All donations, reward selections, and shipping details are processed securely through
            our official Tiltify campaign.
          </p>

          {/* IMPORTANT: Swap out the href="#" with your actual Tiltify campaign URL once it's live! */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-12 py-5 bg-[#fcc15a] hover:bg-orange-400 text-slate-900 font-black text-xl rounded-xl shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1 uppercase tracking-tight"
          >
            <i className="fa-solid fa-heart"></i> Donate on Tiltify
          </a>

          <p className="text-center text-xs text-slate-500 mt-6 font-medium uppercase tracking-widest flex justify-center items-center gap-2">
            <i className="fa-solid fa-lock"></i> Securely processed by Tiltify
          </p>
        </div>
      </div>
    </div>
  );
}
