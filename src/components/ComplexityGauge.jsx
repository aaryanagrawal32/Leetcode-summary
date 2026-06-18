import React from 'react';

export const ComplexityGauge = ({ title, complexityStr }) => {
  let score = 50;
  let label = "O(N)";
  let colorClass = "stroke-amber-400";
  let glowColor = "rgba(245,158,11,0.4)";
  let textClass = "text-amber-300";
  let bgGlow = "from-amber-500/10 to-transparent";
  let dotColor = "bg-amber-400";

  const lower = complexityStr ? complexityStr.toLowerCase() : '';
  if (lower.includes("o(1)") || lower.includes("o(log")) {
    score = 85;
    label = lower.includes("o(1)") ? "O(1)" : "O(log N)";
    colorClass = "stroke-emerald-400";
    glowColor = "rgba(52,211,153,0.4)";
    textClass = "text-emerald-300";
    bgGlow = "from-emerald-500/10 to-transparent";
    dotColor = "bg-emerald-400";
  } else if (lower.includes("o(n^2)") || lower.includes("o(2^n)") || lower.includes("o(n!)")) {
    score = 30;
    label = lower.includes("o(n^2)") ? "O(N²)" : "O(2^N)";
    colorClass = "stroke-rose-500 animate-pulse";
    glowColor = "rgba(244,63,94,0.4)";
    textClass = "text-rose-400";
    bgGlow = "from-rose-500/10 to-transparent";
    dotColor = "bg-rose-500";
  } else if (lower.includes("o(n log n)") || lower.includes("o(nlogn)")) {
    score = 65;
    label = "O(N log N)";
    colorClass = "stroke-cyan-400";
    glowColor = "rgba(34,211,238,0.4)";
    textClass = "text-cyan-300";
    bgGlow = "from-cyan-500/10 to-transparent";
    dotColor = "bg-cyan-400";
  } else if (lower.includes("o(n)") || lower.includes("linear")) {
    score = 75;
    label = "O(N)";
    colorClass = "stroke-teal-400";
    glowColor = "rgba(45,212,191,0.4)";
    textClass = "text-teal-300";
    bgGlow = "from-teal-500/10 to-transparent";
    dotColor = "bg-teal-400";
  }

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  const labelFontSize = label.length > 6 ? 'text-[11px]' : 'text-[15px]';

  return (
    <div className={`flex flex-col items-center justify-center p-5 rounded-2xl bg-gradient-to-b ${bgGlow} border border-white/5 relative overflow-hidden group hover:border-purple-500/20 transition-all duration-300`}>
      
      {/* Title */}
      <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mb-3 flex items-center gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full ${dotColor} animate-pulse`}></span>
        {title}
      </span>

      {/* Gauge SVG */}
      <div className="relative w-28 h-28">
        {/* Radial glow behind gauge */}
        <div 
          className="absolute inset-0 rounded-full opacity-30 blur-xl transition-opacity duration-500 group-hover:opacity-50" 
          style={{ background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` }}
        ></div>

        <svg className="w-full h-full transform -rotate-90 relative z-10" viewBox="0 0 100 100">
          {/* Background track */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="stroke-slate-800/60"
            strokeWidth="6"
            fill="transparent"
          />
          {/* Progress arc */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            className={`transition-all duration-1000 ease-out ${colorClass}`}
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 6px ${glowColor})` }}
          />
        </svg>

        {/* Center label inside gauge */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
          <span className={`${labelFontSize} font-black font-mono tracking-tight leading-tight ${textClass}`}>
            {label}
          </span>
          <span className="text-[9px] text-slate-500 font-mono mt-1">{score}% eff.</span>
        </div>
      </div>

      {/* Full complexity description below gauge */}
      <p className="text-[10px] text-slate-300/80 text-center mt-3 leading-relaxed font-sans px-1">
        {complexityStr || 'N/A'}
      </p>
    </div>
  );
};

export default ComplexityGauge;
