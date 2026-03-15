import React, { useState } from "react";

export default function Donate() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  const tiers = [
    {
      price: 15,
      name: "The Swag Bag",
      desc: "Custom stickers, buttons, a laser-cut badge, and a custom printed receipt.",
    },
    {
      price: 25,
      name: "The Audiophile",
      desc: "Everything above, PLUS your choice of the PMP Compilation CD or the SIGGD Echoes of Isovios OST CD.",
    },
    {
      price: 40,
      name: "The Lore Master",
      desc: "Everything in the Swag Bag, PLUS your choice of the Sighorse book or the Creative Writing Club book.",
    },
    {
      price: 50,
      name: "The Uniform",
      desc: "The official HackFromScratch multi-color t-shirt, printed on-demand just for you.",
    },
    {
      price: 100,
      name: "The VIP Completionist",
      desc: "Literally everything. Shirt, both books, both CDs, all the swag, signed by the creators, plus your name in the broadcast credits.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Support the <span className="text-orange-500">Scratch Foundation</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          100% of your donation goes directly to early STEM education. Purdue Innovates will match
          donations by supporting student creators and their creative work - meaning that you can
          get some awesome student-made swag for donating! Select a reward tier below to begin.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedTier(tier.price)}
            className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col ${
              selectedTier === tier.price
                ? "border-orange-500 bg-orange-500/10 scale-[1.02]"
                : "border-slate-700 bg-slate-800 hover:border-slate-500 hover:bg-slate-700/50"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
            <p className="text-3xl font-black text-orange-400 mb-4">${tier.price}</p>
            <p className="text-slate-300 flex-grow">{tier.desc}</p>
            {selectedTier === tier.price && (
              <div className="mt-4 inline-block bg-orange-500 text-slate-900 font-bold px-4 py-1 rounded text-sm text-center">
                Selected
              </div>
            )}
          </div>
        ))}
      </div>

      {/* The Handoff Form (Only visible when a tier is clicked) */}
      {selectedTier && (
        <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-2xl border border-slate-600 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-4">
            Step 2: Shipping & Details
          </h2>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault(); /* Trigger BoilerLink Redirect Here */
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-orange-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-orange-500 outline-none"
                  required
                />
              </div>
            </div>

            {/* Conditional Dropdowns based on Tier */}
            {selectedTier >= 25 && selectedTier < 100 && selectedTier !== 50 && (
              <div>
                <label className="block text-sm text-slate-400 mb-1">Make your choice:</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-orange-500 outline-none">
                  {selectedTier === 25 ? (
                    <>
                      <option>PMP Compilation CD</option>
                      <option>SIGGD OST CD</option>
                    </>
                  ) : (
                    <>
                      <option>Sighorse Book</option>
                      <option>Creative Writing Club Book</option>
                    </>
                  )}
                </select>
              </div>
            )}

            {(selectedTier === 50 || selectedTier === 100) && (
              <div>
                <label className="block text-sm text-slate-400 mb-1">T-Shirt Size</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-orange-500 outline-none">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>XL</option>
                  <option>2XL</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm text-slate-400 mb-1">Full Shipping Address</label>
              <textarea
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-orange-500 outline-none"
                rows={3}
                required
                placeholder="123 Purdue St, West Lafayette, IN 47906"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-orange-500 hover:bg-orange-400 text-slate-900 font-bold text-xl py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1"
            >
              Continue to BoilerLink Payment
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">
              You will be redirected to Purdue's secure BoilerLink portal to complete your donation.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
