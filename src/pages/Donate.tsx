export default function Donate() {
  const tiers = [
    {
      price: 15,
      name: "The Swag Bag",
      desc: "Custom stickers, buttons, a laser-cut badge, and a custom printed receipt!",
      bg: "bg-[var(--color-secondary)]",
      image: "/rewards/creativecodingclub1.png",
      image2: "/rewards/creativecodingclub2.png",
    },
    {
      price: 10,
      name: "The Audio",
      desc: "Your choice of the PMP Compilation CD or the SIGGD Echoes of Isovios OST CD and a custom printed receipt!",
      bg: "bg-[#A680FF]",
      image: "/rewards/pmp.png",
      image2: "/rewards/siggd.png",
    },
    {
      price: 25,
      name: "The Lore",
      desc: "Your choice of the Sighorse or the Choosen One books and a custom printed receipt!",
      bg: "bg-[#95D887]",
      image: "/rewards/creative-writing-club.png",
      image2: "/rewards/sighorse.png",
    },
    {
      price: 50,
      name: "The Shirt",
      desc: "The official HackFromScratch multi-color t-shirt, printed on-demand just for you and a custom printed receipt!",
      bg: "bg-[#84C1E2]",
      image: "/rewards/shirt-front.png",
      image2: "/rewards/shirt-back.png",
    },
    {
      price: 100,
      name: "VIP",
      desc: "Literally everything. Shirt, both books, both CDs, all the swag, signed by the creators (and a custom printed receipt)!",
      bg: "bg-[#D07AD8]",
      image: "/rewards/everything1.png",
      image2: "/rewards/everything2.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Support the <span className="text-[var(--color-accent)]">Scratch Foundation</span>
        </h1>
        <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
          All donations go directly to the Scratch Foundation. Our sponsors will match donations by
          supporting student creators and their creative work - meaning that you can get some
          awesome student-made swag for donating (while supplies last)! Check out the reward options
          below. Note that individual donations DO NOT stack towards rewards.
        </p>
      </div>

      {/* REWARD SHOWCASE FLEX (Replaces Grid for center alignment) */}
      <div className="flex flex-wrap justify-center gap-6 mb-20">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`relative overflow-visible w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]
            p-8 rounded-3xl border border-slate-700 ${tier.bg}
            hover:bg-[#EFD8A4] transition-all duration-300
            flex flex-col hover:-translate-y-1
            hover:shadow-[0_10px_30px_rgba(249,115,22,0.1)]
            hover:border-orange-500/50 group`}
          >
            {/* Floating Reward Image */}
            <a
              href={tier.image}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                // open image1 or 2 randomly because it is a pain to get them both to open
                if (!tier.image2) return;

                const randomImage = Math.random() < 0.5 ? tier.image : tier.image2;

                e.currentTarget.href = randomImage;
              }}
              className="
                  absolute -top-8 -right-6
                  w-40 h-40
                  block
                  cursor-pointer
                  [perspective:1000px]
                  transition-all duration-300
                  group-hover:scale-150 group-hover:animate-bounce
                  group-hover:-translate-y-2
                "
            >
              <div
                className={`
                  relative w-full h-full
                  ${tier.image2 ? "animate-(--animate-flip-x)" : ""}
                  [transform-style:preserve-3d]
                `}
              >
                {/* Front */}
                <img
                  src={tier.image}
                  alt=" "
                  className="
                    absolute w-full h-full object-contain
                    backface-hidden
                    rounded-xl
                  "
                />

                {/* Back (only if exists) */}
                {tier.image2 && (
                  <img
                    src={tier.image2}
                    alt=" "
                    className="
                      absolute w-full h-full object-contain
                      rotate-y-180
                      rounded-3xl
                      backface-hidden
                      drop-shadow-xl
                    "
                  />
                )}
              </div>
            </a>

            <h3 className="text-2xl font-bold mb-2 text-slate-200 group-hover:text-slate-900 transition-colors">
              {tier.name}
            </h3>
            <div className="mb-4">
              <span className="text-4xl font-black text-[var(--color-accent)]">${tier.price}</span>
              <span className="text-slate-300 group-hover:text-slate-700 font-bold text-sm ml-2 uppercase tracking-widest">
                Donation
              </span>
            </div>
            <p className="text-slate-200 group-hover:text-slate-800 flex-grow leading-relaxed">
              {tier.desc}
            </p>
          </div>
        ))}
      </div>

      {/* THE TILTIFY CTA BILLBOARD */}
      <div className="max-w-3xl mx-auto bg-slate-900 p-12 rounded-3xl border-2 border-[var(--color-secondary)] shadow-2xl text-center relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[var(--color-accent)]/5 blur-[60px] pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-white uppercase tracking-tight">
            Ready to make an impact?
          </h2>
          <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
            All donations, reward selections, and shipping details are processed securely through
            our official Tiltify campaign. Donations end on Saturday, April 11th so make sure to get
            yours in before then!
          </p>

          {/* IMPORTANT: Swap out the href="#" with your actual Tiltify campaign URL once it's live! */}
          <a
            href="https://tilt.fyi/DEomcnkl3G"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-12 py-5 bg-[var(--color-accent)] hover:bg-orange-400 text-slate-900 font-black text-xl rounded-xl shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1 uppercase tracking-tight"
          >
            {/* <i className="fa-solid fa-heart"></i> Donate on Tiltify */}
            <i className="fa-solid fa-heart"></i>Click here to donate!
          </a>

          <p className="text-center text-xs text-slate-500 mt-6 font-medium uppercase tracking-widest flex justify-center items-center gap-2">
            <i className="fa-solid fa-lock"></i> Securely processed by Tiltify
          </p>
        </div>
      </div>
    </div>
  );
}
