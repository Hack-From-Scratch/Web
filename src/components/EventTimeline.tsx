import { useState, useMemo } from "react";

interface StreamEvent {
  id: string;
  title: string;
  time: string; // ISO format string
}

const scheduleData: StreamEvent[] = [
  { id: "1", title: "Opening Ceremony (Intro)", time: "2026-03-28T09:00:00" },
  {
    id: "2",
    title: "Scratch Lab Director & Makey Makey Cofounder Eric Rosenbaum 1:1 Interview",
    time: "2026-03-28T09:30:00",
  },
  {
    id: "3",
    title: "Purdue Faculty Panel on AI, Education & the Creative Arts",
    time: "2026-03-28T10:15:00",
  },
  {
    id: "4",
    title: "Fantasy Character Creation with the Fantasy Club & Creative Writing Club",
    time: "2026-03-28T11:00:00",
  },
  { id: "5", title: "Fantasy System Showcase", time: "2026-03-28T12:00:00" },
  { id: "6", title: "Fantasy Campaign Showcase", time: "2026-03-28T13:00:00" },
  { id: "7", title: "Cosplay Club", time: "2026-03-28T14:00:00" },
  { id: "8", title: "Railside Robotics (Battlebots) Tournament", time: "2026-03-28T15:00:00" },
  { id: "9", title: "One Shot (D&D) - Donation Interactivity", time: "2026-03-28T16:00:00" },
  { id: "10", title: "Magic the Gathering Tournament Championship", time: "2026-03-28T19:00:00" },
  { id: "12", title: "Mario Kart Run", time: "2026-03-29T09:00:00" },
  { id: "13", title: "Cuphead Chair% 1v1 - Donation Interactive", time: "2026-03-29T10:00:00" },
  { id: "14", title: "Dark Souls 3 Cinder% - Donation Interactive", time: "2026-03-29T11:30:00" },
  { id: "15", title: "Celeste Any% 1v1", time: "2026-03-29T13:00:00" },
  { id: "16", title: "PlugNPlay Controller-Building Workshop", time: "2026-03-29T14:00:00" },
  {
    id: "17",
    title: "Undertale Genocide Any% - Donation Interactive",
    time: "2026-03-29T14:00:00",
  },
  { id: "18", title: "Tetris 1v1 - Donation Interactivity", time: "2026-03-29T15:30:00" },
  { id: "19", title: "HackIndy", time: "2026-03-29T15:45:00" },
  { id: "20", title: "Rube Goldberg Club", time: "2026-03-29T18:00:00" },
  { id: "21", title: "Catalyst - Tech4Change", time: "2026-03-29T19:00:00" },
  { id: "22", title: "Chess Club - Gravity Chess", time: "2026-03-29T20:00:00" },
  { id: "23", title: "Creative Code for Good", time: "2026-03-30T18:00:00" },
  { id: "24", title: "P3 - Purdue E3", time: "2026-03-30T20:00:00" },
  { id: "25", title: "Live from Cary - Piano Performances", time: "2026-03-31T18:15:00" },
  { id: "26", title: "Life on the Wabash - Interview & Episode", time: "2026-03-31T19:15:00" },
  { id: "27", title: "The Steamys", time: "2026-03-31T20:00:00" },
  {
    id: "28",
    title: "Catalyst Pitch Night feat Jason Tennenhouse & Stacey Burr",
    time: "2026-04-01T18:00:00",
  },
  { id: "29", title: "Mario Kart All 8s - Donation Interactive", time: "2026-04-01T18:30:00" },
  { id: "30", title: "McCutcheon Mayhem - Meet the Cast & Bloopers", time: "2026-04-01T19:30:00" },
  { id: "31", title: "McCutcheon Mayhem Reloaded", time: "2026-04-01T20:00:00" },
  { id: "32", title: "Dining with a Guy named AJ", time: "2026-04-01T21:30:00" },
  { id: "32b", title: "Wiley Radio Tinydesk Concert - Real Nothing", time: "2026-04-02T19:00:00" },
  { id: "33", title: "VR Laser Tag", time: "2026-04-02T19:00:00" },
  { id: "34", title: "SEARCH", time: "2026-04-03T19:00:00" },
  { id: "35", title: "Qter - a Rubiks Cube Computer", time: "2026-04-03T19:30:00" },
  {
    id: "36",
    title: "Purdue Hackers Hack Night Overview + Sighorse Panel",
    time: "2026-04-03T20:00:00",
  },
  { id: "37", title: "Creative Jam Closes", time: "2026-04-03T20:30:00" },
  { id: "38", title: "Ad Liberation Improv Comedy Show", time: "2026-04-03T21:00:00" },
  { id: "39", title: "Creative Jam Collage", time: "2026-04-03T22:00:00" },
  { id: "40", title: "Countdown & Closing Ceremony", time: "2026-04-04T00:00:00" },
];

export default function EventTimeline() {
  const currentTime = new Date();

  // Dynamically group events by date string so you don't have to manually split arrays
  const { groupedEvents, availableDates } = useMemo(() => {
    const groups: Record<string, StreamEvent[]> = {};

    scheduleData.forEach((event) => {
      const date = new Date(event.time);
      // Format as "Sat, Mar 28" for the tab buttons
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

  // Set the initial active tab to the first day
  const [activeDate, setActiveDate] = useState(availableDates[0]);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-10 text-orange-500 text-center tracking-tight">
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
                ? "bg-orange-500 text-slate-900 shadow-[0_0_15px_rgba(249,115,22,0.4)] scale-105"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
            }`}
          >
            {dateKey}
          </button>
        ))}
      </div>

      {/* The Vertical Line Container */}
      <div className="relative border-l-4 border-slate-700 ml-4 md:ml-8 md:pl-0">
        {/* Only map through the events for the currently selected date */}
        {groupedEvents[activeDate].map((event) => {
          const eventTime = new Date(event.time);
          const isFinished = eventTime < currentTime;

          return (
            <div
              key={event.id}
              // Added relative here so the absolute dot anchors correctly to the card
              className={`relative mb-8 ml-6 md:ml-10 p-6 rounded-2xl border transition-all duration-300
                ${
                  isFinished
                    ? "bg-slate-800/40 border-slate-700 grayscale opacity-50"
                    : "bg-slate-800 border-slate-700 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-xl shadow-black/50"
                }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute w-4 h-4 rounded-full -left-[34px] md:-left-[50px] top-8 ring-4 ring-slate-900
                ${
                  isFinished
                    ? "bg-slate-600"
                    : "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                }`}
              ></div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3
                    className={`text-xl font-bold ${
                      isFinished ? "text-slate-400" : "text-slate-100"
                    }`}
                  >
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 font-medium tracking-wide flex items-center gap-2">
                    <i className="fa-regular fa-clock"></i>
                    {eventTime.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
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
