import { useMemo, useState } from "react";

interface StreamEvent {
  title: string;
  time: string; // ISO format string
  isInteractive?: boolean;
  isTarget?: boolean;
}

const scheduleData: StreamEvent[] = [
  { title: "Opening Ceremony (Intro)", time: "2026-03-28T09:00:00" },
  {
    title: "Eric Rosenbaum: Scratch Lab Director & Makey Makey Cofounder",
    time: "2026-03-28T09:30:00",
  },
  {
    title: "Purdue Faculty Panel on AI, Education & the Creative Arts",
    time: "2026-03-28T10:00:00",
  },
  {
    title: "Fantasy Worldbuilding & Character Creation feat. Purdue Fantasy Club",
    time: "2026-03-28T11:00:00",
  },
  {
    title: "Adventure Quest Jaern: Fantasy System Design feat. Purdue Fantasy Club",
    time: "2026-03-28T12:00:00",
  },
  { title: "Fantasy Campaign Showcases", time: "2026-03-28T13:00:00" },
  { title: "Cosplay 101 feat. Cosplay Creation & Appreciation Club", time: "2026-03-28T14:00:00" },
  {
    title: "D&D One Shot: The Treasure of Tealbeard",
    time: "2026-03-28T15:00:00",
    isInteractive: true,
  },
  {
    title: "Magic the Gathering Tournament Championship feat. Competitive MTG Club",
    time: "2026-03-28T19:00:00",
  },
  {
    title:
      "Cuphead Chair% 1v1 feat. Xander Kutulas & Peter Timpane (Couch: Jayden Wijeyakulasuriya)",
    time: "2026-03-29T09:00:00",
    isInteractive: true,
  },
  {
    title: "Dark Souls 3 All Bosses Glitchless feat. Vladislav Pavlovskii",
    time: "2026-03-29T10:45:00",
  },
  {
    title: "How to Not Build Game Controllers + PlugNPlay feat. Xander Kutulas",
    time: "2026-03-29T12:30:00",
  },
  {
    title: "Celeste Any% 1v1 feat. Cynthia Zetlan & LuxRei (Couch: Mint Deprest & Peter Timpane)",
    time: "2026-03-29T13:00:00",
  },
  {
    title:
      "Undertale Genocide Any% (20 min head-start) feat. Benjamin (Couch: Jayden Wijeyakulasuriya)",
    time: "2026-03-29T14:00:00",
    isInteractive: true,
  },
  {
    title: "Tetr.io 1v1 rotational feat. Kevin Huang, Niko Gratton & Eric Zhang",
    time: "2026-03-29T15:15:00",
  },
  { title: "HackIndy - Highlights & Pitches", time: "2026-03-29T15:45:00" },
  {
    title: "The Haunted Mansion Machine feat. Boilermaker Rube Goldberg Team",
    time: "2026-03-29T18:00:00",
  },
  { title: "Gravity Chess feat. Purdue Chess Club", time: "2026-03-29T19:00:00" },
  {
    title:
      "Mario Kart 8 2v2 Lockout feat. Artus Mosquet & Nathan Kilmer vs. Josh & Soham (Couch: Xander Kutulas & Peter Timpane)",
    time: "2026-03-29T20:00:00",
  },
  {
    title: "Creative Code for Good feat. Creative Coding Club",
    time: "2026-03-30T18:00:00",
  },
  {
    title: "P3 - Purdue E3 feat. SIGGD & Game Devs at Purdue",
    time: "2026-03-30T20:00:00",
  },
  {
    title: "Live from Cary - Piano feat. Jason M. Dong, Brandt Garippo & Allen Tan",
    time: "2026-03-31T18:00:00",
  },
  {
    title: "How to Touch Grass Together ft. Touch Grass Together @ Purdue",
    time: "2026-03-31T19:00:00",
  },
  {
    title: "Life on the Wabash - Interview w/ Dunja Stojovic & Episode",
    time: "2026-03-31T19:15:00",
  },
  { title: "The Steamys", time: "2026-03-31T20:00:00" },
  {
    title: "Tech4Change Hackathon Overview & Highlights feat. Catalyst",
    time: "2026-04-01T18:00:00",
  },
  {
    title: "Catalyst Pitch Night feat. Jason Tennenhouse & Stacey Burr",
    time: "2026-04-01T18:45:00",
  },
  {
    title: "AJ Does Anything for $4,000 feat. AJ",
    time: "2026-04-01T19:15:00",
    isTarget: true,
  },
  { title: "McCutcheon Mayhem Reloaded", time: "2026-04-01T20:00:00" },
  { title: "McCutcheon Mayhem - Meet the Cast & Bloopers", time: "2026-04-01T21:30:00" },
  { title: "Wiley Radio Tinydesk Concert Setup", time: "2026-04-02T18:00:00" },
  { title: "Wiley Radio Tinydesk Concert - Real Nothing", time: "2026-04-02T18:30:00" },
  {
    title:
      "VR Laser Tag: McCutcheon vs Belowground Brought to you by Julian Triveri, Artus Mosquet, Keith Gery, Connor Landzettel & Xander Kutulas",
    time: "2026-04-02T19:30:00",
  },
  { title: "Battlebots Tournament feat. Railside Robotics", time: "2026-04-02T20:15:00" },
  {
    title: "Mario Kart Run Desert Bus Attempt",
    time: "2026-04-03T12:00:00",
    isTarget: true,
  },
  {
    title:
      "ASTRO-USA Astronaut Habitat Tour feat. SEARCH (Space & Earth Analogs Research Chapter of Purdue)",
    time: "2026-04-03T19:00:00",
  },
  {
    title: "Qter - a Rubiks Cube Computer feat. Arhan Chaudhary, Henry Rovnyak, Asher Gray",
    time: "2026-04-03T19:30:00",
  },
  {
    title: "Hack Night Overview feat. Purdue Hackers",
    time: "2026-04-03T20:00:00",
  },
  {
    title:
      "Sighorse Panel feat. Kartavya Vashishtha, Grace Yoder, Arhan Chaudhary, Henry Rovnyak, Angela Qian & Ishan Goel",
    time: "2026-04-03T20:05:00",
  },
  { title: "Improv Comedy Show feat. Ad Liberation", time: "2026-04-03T21:00:00" },
  {
    title: "Metal Casting feat. Purdue American Foundry Society (AFS)",
    time: "2026-04-03T22:00:00",
  },
  {
    title: "Creative Jam Highlights feat. the HackFromScratch Community",
    time: "2026-04-03T22:15:00",
  },
  { title: "Countdown & Closing Ceremony", time: "2026-04-04T00:00:00" },
];

export default function EventTimeline() {
  const currentTime = new Date();

  // Dynamically group events by date string
  const { groupedEvents, availableDates } = useMemo(() => {
    const groups: Record<string, StreamEvent[]> = {};

    scheduleData.forEach((event) => {
      const date = new Date(event.time);
      const dateKey = date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });

      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(event);
    });

    return {
      groupedEvents: groups,
      availableDates: Object.keys(groups),
    };
  }, []);

  const [activeDate, setActiveDate] = useState(availableDates[0]);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-10 text-[var(--color-accent)] text-center tracking-tight">
        Stream Schedule
      </h2>

      {/* Date Toggle Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {availableDates.map((dateKey) => (
          <button
            key={dateKey}
            onClick={() => setActiveDate(dateKey)}
            className={`px-5 py-2 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
              activeDate === dateKey
                ? "bg-[var(--color-accent)] text-slate-900 shadow-[0_0_15px_rgba(249,115,22,0.4)] scale-105"
                : "bg-[var(--color-secondary-dark)] text-[var(--text-grey)] hover:bg-[var(--color-secondary)] hover:text-slate-200"
            }`}
          >
            {dateKey}
          </button>
        ))}
      </div>

      {/* The Vertical Line Container */}
      <div className="relative border-l-4 border-slate-700 ml-4 md:ml-8 md:pl-0">
        {groupedEvents[activeDate].map((event, index) => {
          const eventTime = new Date(event.time);
          const isFinished = eventTime < currentTime;

          // Using a combination of title and index as a unique key since ID was removed
          const uniqueKey = `${event.title}-${index}`;

          return (
            <div
              key={uniqueKey}
              className={`relative mb-8 ml-6 md:ml-10 p-6 rounded-2xl border transition-all duration-300
                ${
                  isFinished
                    ? "bg-[var(--color-secondary)]/40 border-slate-700 grayscale opacity-50"
                    : "bg-[#7CAEF3] border-slate-700 hover:bg-[var(--color-secondary)] hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-xl shadow-black/50"
                }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute w-4 h-4 rounded-full -left-[34px] md:-left-[50px] top-8 ring-4 ring-slate-900
                ${
                  isFinished
                    ? "bg-slate-600"
                    : "bg-[var(--color-accent)] shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                }`}
              ></div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3
                      className={`text-xl font-bold ${
                        isFinished ? "text-slate-400" : "text-slate-100"
                      }`}
                    >
                      {event.title}
                    </h3>

                    {/* Donation Interactive Badge */}
                    {event.isInteractive && (
                      <span
                        className={`px-2 py-1 text-xs font-bold rounded-full border flex items-center gap-1 ${
                          isFinished
                            ? "bg-slate-700/50 text-slate-400 border-slate-600"
                            : "bg-[var(--color-accent)] text-white-400 border-blue-500/30 shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                        }`}
                      >
                        <i className="fa-solid fa-gamepad"></i> Interactive
                      </span>
                    )}

                    {/* Donation Milestone Badge */}
                    {event.isTarget && (
                      <span
                        className={`px-2 py-1 text-xs font-bold rounded-full border flex items-center gap-1 ${
                          isFinished
                            ? "bg-slate-700/50 text-slate-400 border-slate-600"
                            : "bg-purple-500/20 text-white-400 border-purple-500/30 shadow-[0_0_8px_rgba(168,85,247,0.3)]"
                        }`}
                      >
                        <i className="fa-solid fa-star"></i> Target
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-white mt-2 font-medium tracking-wide flex items-center gap-2">
                    <i className="fa-regular fa-clock"></i>
                    {eventTime.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
