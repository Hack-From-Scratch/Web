import React from "react";
import { Link } from "react-router-dom";

interface EventBlockProps {
  title: string;
  logo?: string; // Optional now!
  backgroundColor: string;
  route: string;
  isComingSoon?: boolean; // New flag!
}

export const EventBlock: React.FC<EventBlockProps> = ({
  title,
  logo,
  backgroundColor,
  route,
  isComingSoon = false,
}) => {
  // If it's coming soon, we might want slightly different styling (like lower opacity)
  const blockStyle = isComingSoon
    ? "scratch-block scratch-stack-block shadow-lg opacity-80 hover:opacity-100"
    : "scratch-block scratch-stack-block shadow-lg";

  return (
    <Link to={route} className="block no-underline hover:no-underline">
      <div className={blockStyle} style={{ backgroundColor: backgroundColor }}>
        {/* The Logo Container */}
        <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center border border-black/10">
          {logo ? (
            <img src={logo} alt={`${title} Logo`} className="w-full h-full object-contain" />
          ) : (
            // A placeholder icon for empty blocks
            <i className="fa-solid fa-question text-white/50 text-2xl"></i>
          )}
        </div>

        {/* The Text */}
        <div className="flex-1">
          <h3 className="text-xl font-extrabold text-white tracking-tight m-0">{title}</h3>
          <p className="text-xs font-bold uppercase tracking-widest mt-0.5 mb-0 text-white/70">
            {isComingSoon ? "Coming Soon - Watch Live" : "Click to View Showcase"}
          </p>
        </div>

        {/* The Icon (Caret for active, Lock/Video for upcoming) */}
        <div className="text-white/30 text-2xl font-black ml-4">
          {isComingSoon ? (
            <i className="fa-solid fa-lock"></i>
          ) : (
            <i className="fa-solid fa-chevron-right"></i>
          )}
        </div>
      </div>
    </Link>
  );
};
