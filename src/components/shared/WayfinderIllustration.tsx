// Kalenjin landscape as an SVG illustration in the Wayfinder warm-earth style
// Terracotta, ochre, olive, cream — flat shapes, triangular trees, mushrooms, wildflowers
export function WayfinderIllustration() {
  return (
    <svg
      viewBox="0 0 1440 900"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full object-cover"
      aria-hidden="true"
    >
      {/* Sky gradient — amber to dusty rose */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c87533" stopOpacity="0.6" />
          <stop offset="55%" stopColor="#e8a87c" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b2a1a" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a3e28" />
          <stop offset="100%" stopColor="#1a0e05" />
        </linearGradient>
        <style>{`
          @keyframes sway1 { 0%,100%{transform:rotate(-1deg) translateX(0)} 50%{transform:rotate(1deg) translateX(2px)} }
          @keyframes sway2 { 0%,100%{transform:rotate(1deg) translateX(0)} 50%{transform:rotate(-1.5deg) translateX(-2px)} }
          @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
          .tree1 { animation: sway1 6s ease-in-out infinite; transform-origin: center bottom; }
          .tree2 { animation: sway2 7s ease-in-out infinite; transform-origin: center bottom; }
          .cloud { animation: float 8s ease-in-out infinite; }
          .cloud2 { animation: float 11s ease-in-out infinite; }
        `}</style>
      </defs>

      {/* Background fill */}
      <rect width="1440" height="900" fill="#1a0e05" />
      <rect width="1440" height="900" fill="url(#sky)" />

      {/* Distant mountains / hills */}
      <ellipse cx="300" cy="580" rx="420" ry="200" fill="#3d2a14" />
      <ellipse cx="800" cy="560" rx="520" ry="220" fill="#2e1f0d" />
      <ellipse cx="1200" cy="580" rx="380" ry="190" fill="#3d2a14" />

      {/* Ground layer */}
      <path d="M0 680 Q360 620 720 660 Q1080 700 1440 660 L1440 900 L0 900 Z" fill="#2e1e0a" />
      <path d="M0 740 Q300 700 600 720 Q900 740 1200 710 Q1320 700 1440 720 L1440 900 L0 900 Z" fill="#1a0e05" />

      {/* Rolling grassy hill */}
      <path d="M-80 780 Q200 690 500 720 Q700 740 900 700 Q1100 660 1300 700 Q1400 720 1520 760 L1520 900 L-80 900 Z" fill="#3b2912" />
      <path d="M0 820 Q240 780 480 800 Q720 820 960 790 Q1200 760 1440 800 L1440 900 L0 900 Z" fill="#26180a" />

      {/* --- TREES --- */}
      {/* Far left trees */}
      <g className="tree2" style={{transformOrigin:'80px 670px'}}>
        <polygon points="80,480 40,670 120,670" fill="#4a6741" />
        <polygon points="80,530 48,660 112,660" fill="#3a5633" />
        <polygon points="80,580 52,655 108,655" fill="#293e24" />
        <rect x="74" y="655" width="12" height="40" fill="#5a3e28" />
      </g>
      <g className="tree1" style={{transformOrigin:'145px 680px'}}>
        <polygon points="145,510 110,680 180,680" fill="#5a7a4f" />
        <polygon points="145,560 115,668 175,668" fill="#4a6741" />
        <rect x="139" y="664" width="12" height="35" fill="#4a2e18" />
      </g>

      {/* Center left cluster */}
      <g className="tree2" style={{transformOrigin:'380px 640px'}}>
        <polygon points="380,400 320,640 440,640" fill="#3a5633" />
        <polygon points="380,460 328,626 432,626" fill="#293e24" />
        <polygon points="380,520 336,618 424,618" fill="#1e2e1b" />
        <rect x="372" y="614" width="16" height="50" fill="#5a3e28" />
      </g>
      <g className="tree1" style={{transformOrigin:'470px 660px'}}>
        <polygon points="470,460 420,660 520,660" fill="#4a6741" />
        <polygon points="470,510 426,648 514,648" fill="#3a5633" />
        <rect x="462" y="643" width="16" height="40" fill="#4a2e18" />
      </g>

      {/* Right side forest */}
      <g className="tree2" style={{transformOrigin:'1050px 640px'}}>
        <polygon points="1050,400 990,640 1110,640" fill="#3a5633" />
        <polygon points="1050,460 998,626 1102,626" fill="#293e24" />
        <polygon points="1050,520 1006,618 1094,618" fill="#1e2e1b" />
        <rect x="1042" y="614" width="16" height="50" fill="#5a3e28" />
      </g>
      <g className="tree1" style={{transformOrigin:'1160px 650px'}}>
        <polygon points="1160,430 1110,650 1210,650" fill="#4a6741" />
        <polygon points="1160,490 1116,636 1204,636" fill="#3a5633" />
        <rect x="1152" y="630" width="16" height="45" fill="#4a2e18" />
      </g>
      <g className="tree2" style={{transformOrigin:'1300px 660px'}}>
        <polygon points="1300,470 1250,660 1350,660" fill="#3a5633" />
        <polygon points="1300,520 1258,648 1342,648" fill="#293e24" />
        <rect x="1292" y="643" width="16" height="40" fill="#5a3e28" />
      </g>
      <g className="tree1" style={{transformOrigin:'1380px 670px'}}>
        <polygon points="1380,510 1340,670 1420,670" fill="#4a6741" />
        <rect x="1374" y="660" width="12" height="38" fill="#4a2e18" />
      </g>

      {/* Winding path */}
      <path d="M680 900 Q700 820 660 780 Q630 750 660 720 Q690 700 720 680" stroke="#c0a882" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* --- MUSHROOMS --- */}
      {/* Mushroom 1 */}
      <g transform="translate(240, 760)">
        <rect x="-4" y="0" width="8" height="22" fill="#e8d5b0" />
        <ellipse cx="0" cy="2" rx="18" ry="12" fill="#c0392b" />
        <circle cx="-6" cy="-1" r="3" fill="#f5e6c8" opacity="0.7" />
        <circle cx="5" cy="-3" r="2" fill="#f5e6c8" opacity="0.7" />
      </g>
      {/* Mushroom 2 small */}
      <g transform="translate(260, 768)">
        <rect x="-3" y="0" width="6" height="16" fill="#e8d5b0" />
        <ellipse cx="0" cy="2" rx="12" ry="8" fill="#a93226" />
        <circle cx="-4" cy="-1" r="2" fill="#f5e6c8" opacity="0.7" />
      </g>

      {/* Mushroom cluster right */}
      <g transform="translate(900, 755)">
        <rect x="-4" y="0" width="8" height="24" fill="#e8d5b0" />
        <ellipse cx="0" cy="2" rx="20" ry="13" fill="#8b4513" />
        <circle cx="-7" cy="0" r="3" fill="#f5e6c8" opacity="0.6" />
        <circle cx="6" cy="-2" r="2.5" fill="#f5e6c8" opacity="0.6" />
      </g>

      {/* --- WILDFLOWERS --- */}
      {[150, 300, 560, 620, 750, 830, 950, 1100, 1220, 1350].map((x, i) => (
        <g key={i} transform={`translate(${x}, ${720 + (i % 3) * 18})`} opacity="0.8">
          <line x1="0" y1="0" x2="0" y2="20" stroke="#6b8c42" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="5" fill={["#e8c97a","#d4875c","#f5e6c8","#c87533","#b5c77a"][i % 5]} />
          {/* Petals */}
          <circle cx="0" cy="-7" r="3" fill={["#f5d98c","#e8a87c","#fff8e8","#d4875c","#d4e896"][i % 5]} opacity="0.8"/>
          <circle cx="7" cy="0" r="3" fill={["#f5d98c","#e8a87c","#fff8e8","#d4875c","#d4e896"][i % 5]} opacity="0.8"/>
          <circle cx="-7" cy="0" r="3" fill={["#f5d98c","#e8a87c","#fff8e8","#d4875c","#d4e896"][i % 5]} opacity="0.8"/>
          <circle cx="0" cy="7" r="3" fill={["#f5d98c","#e8a87c","#fff8e8","#d4875c","#d4e896"][i % 5]} opacity="0.8"/>
        </g>
      ))}

      {/* Ambient warm glow behind center */}
      <ellipse cx="720" cy="400" rx="350" ry="250" fill="#c87533" opacity="0.06" />

      {/* Clouds */}
      <g className="cloud" opacity="0.25">
        <ellipse cx="250" cy="180" rx="80" ry="30" fill="#f5e6c8" />
        <ellipse cx="200" cy="192" rx="55" ry="24" fill="#f5e6c8" />
        <ellipse cx="310" cy="192" rx="50" ry="22" fill="#f5e6c8" />
      </g>
      <g className="cloud2" opacity="0.2">
        <ellipse cx="1100" cy="140" rx="100" ry="34" fill="#f5e6c8" />
        <ellipse cx="1040" cy="154" rx="65" ry="26" fill="#f5e6c8" />
        <ellipse cx="1170" cy="152" rx="60" ry="24" fill="#f5e6c8" />
      </g>

      {/* Dark vignette overlay to let text breathe */}
      <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="#000000" stopOpacity="0" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.65" />
      </radialGradient>
      <rect width="1440" height="900" fill="url(#vignette)" />
    </svg>
  );
}
