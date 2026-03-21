import { Link } from "react-router-dom";
import EventTimeline from "../components/EventTimeline";

export default function Home() {
  const channelId = "UCb89kHtc8hzLqaJMKDiKrRw";
  // const liveUrl = `https://www.youtube.com/embed/live_stream?channel=${channelId}`;
  const channelUrl = `https://www.youtube.com/channel/${channelId}/live`;

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* HERO SECTION */}
      <section className="w-full pt-12 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold text-[#000] mb-6 text-center tracking-tight">
          HackFrom<span className="text-[#fcc15a]">Scratch</span>
        </h1>
        <p className="text-xl text-slate-800 mb-10 text-center max-w-2xl px-4">
          A week-long charity stream/creative jam uniting Purdue creators to support the Scratch
          Foundation.
        </p>

        {/* Video Embed */}
        {/* <div className="w-full max-w-5xl px-4 mb-10">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border-4 border-slate-800 shadow-2xl shadow-orange-900/20">
            <iframe
              src={liveUrl}
              className="absolute top-0 left-0 w-full h-full"
              title="HackFromScratch Live Stream"
              allowFullScreen
            ></iframe>
          </div>
        </div> */}
        <div className="w-full max-w-5xl px-4 mb-10">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border-4 border-slate-800 shadow-2xl shadow-orange-900/20">
            <iframe
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://www.youtube.com/embed/i-0tqnvjAkU?autoplay=1&loop=1&playlist=i-0tqnvjAkU&mute=1&controls=1&playsinline=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 px-4">
          <Link
            to="/donate"
            className="px-8 py-4 bg-[#fcc15a] hover:bg-orange-400 text-white-500 font-bold text-lg rounded-lg shadow-lg transition-transform hover:-translate-y-1 text-center"
          >
            Donate & Claim Rewards
          </Link>
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-lg rounded-lg border border-slate-700 shadow-lg transition-transform hover:-translate-y-1 text-center"
          >
            Join the YouTube Chat
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-slate-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mission Video Embed */}
          <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/oaEqUNVFDZM"
              title="Scratch Foundation Mission"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Mission Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">
              Why We Support the <span className="text-[#fcc15a]">Scratch Foundation</span>
            </h2>
            <p className="text-slate-900 mb-6 leading-relaxed">
              At Purdue, we've been given the tools to build the future. But for millions of kids,
              the door to creative expression is still closed. We're using this week to support the
              Scratch Foundation - ensuring children have a safe, kind place to find their voice,
              share their stories, and bring their ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* DONATION GOAL PROGRESS */}
      <section className="max-w-4xl mx-auto w-full px-4">
        <div className="bg-[#fcc15a] p-6 rounded-2xl border border-slate-700">
          <div className="flex justify-between items-end mb-2">
            <div>
              <p className="text-white font-semibold uppercase tracking-wider text-sm">
                Campaign Goal
              </p>
              <p className="text-3xl font-bold text-black">
                $0 <span className="text-lg text-white font-normal">raised so far</span>
              </p>
            </div>
            <p className="text-xl font-bold text-white">$10,000</p>
          </div>
          <div className="w-full bg-slate-900 rounded-full h-4 overflow-hidden border border-slate-700">
            {/* Change the width percentage as donations come in */}
            <div
              className="bg-[#00fb00] h-4 rounded-full transition-all duration-1000"
              style={{ width: "5%" }}
            ></div>
          </div>
        </div>
      </section>

      {/* SCHEDULE TIMELINE */}
      <EventTimeline></EventTimeline>
    </div>
  );
}
