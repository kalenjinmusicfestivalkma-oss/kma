import { Music, Mic2, Headphones, Radio, PlayCircle, Star, Sparkles, Music2, Speaker } from "lucide-react";

const GuitarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m11.5 19.5 2.5-2.5"/>
    <path d="M14 17l-2.5-2.5"/>
    <path d="M9.5 14.5l-3-3a1.41 1.41 0 0 1 0-2l.5-.5a1.41 1.41 0 0 1 2 0l3 3"/>
    <path d="m14 9.5 2.5-2.5"/>
    <path d="m16.5 7 2.5-2.5"/>
    <path d="m14 12 5.5-5.5a1.41 1.41 0 0 0 0-2l-1-1a1.41 1.41 0 0 0-2 0L11 9"/>
    <path d="M7.5 19a1.5 1.5 0 1 1-2.12-2.12L15 7.24a1.5 1.5 0 0 1 2.12 2.12L7.5 19z"/>
    <circle cx="9" cy="15" r="2"/>
  </svg>
);

const PianoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 5h18v14H3z"/>
    <path d="M7 5v14"/>
    <path d="M11 5v14"/>
    <path d="M13 5v14"/>
    <path d="M17 5v14"/>
    <path d="M5 5v7h2V5"/>
    <path d="M9 5v7h2V5"/>
    <path d="M15 5v7h2V5"/>
  </svg>
);

const DrumIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="7" rx="9" ry="4"/>
    <path d="M3 7v10c0 2.2 4 4 9 4s9-1.8 9-4V7"/>
    <path d="M3 12c0 2.2 4 4 9 4s9-1.8 9-4"/>
    <path d="M7 10.5l-2.5 5.5"/>
    <path d="M17 10.5l2.5 5.5"/>
  </svg>
);

const MixerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 22v-6"/>
    <path d="M4 12V2"/>
    <path d="M12 22v-10"/>
    <path d="M12 8V2"/>
    <path d="M20 22V16"/>
    <path d="M20 12V2"/>
    <path d="M2 16h4"/>
    <path d="M10 12h4"/>
    <path d="M18 16h4"/>
  </svg>
);

const icons = [
  GuitarIcon, PianoIcon, DrumIcon, MixerIcon, 
  GuitarIcon, PianoIcon, DrumIcon, MixerIcon, // Double weight for instruments
  Music, Mic2, Headphones, Sparkles
];

export function InstrumentBackground() {
  // Generate a random-looking but deterministic distribution of icons
  const elements = Array.from({ length: 24 }).map((_, i) => {
    const Icon = icons[i % icons.length];
    
    // Deterministic pseudo-random values for position and rotation
    const top = `${(i * 17) % 100}%`;
    const left = `${(i * 23) % 100}%`;
    const rotation = (i * 45) % 360;
    
    // Increased size and opacity so they are much more noticeable!
    const size = (i % 3 === 0) ? 120 : (i % 2 === 0) ? 80 : 56;
    const opacity = (i % 2 === 0) ? 0.3 : 0.5;
    
    return (
      <Icon
        key={i}
        className="absolute text-primary-gold"
        style={{
          top,
          left,
          width: size,
          height: size,
          transform: `rotate(${rotation}deg)`,
          opacity,
        }}
      />
    );
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-gradient-to-br from-kalenjin-maroon/10 via-background to-primary-gold/5">
      {/* Massive vibrant blobs to eliminate any pitch-black dark spots */}
      <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] rounded-full bg-kalenjin-maroon/20 blur-[150px]" />
      <div className="absolute top-1/4 -right-1/4 w-[120%] h-[120%] rounded-full bg-kalenjin-green/20 blur-[150px]" />
      <div className="absolute -bottom-1/4 left-1/4 w-[120%] h-[120%] rounded-full bg-primary-gold/15 blur-[150px]" />
      
      {/* Scattered musical instruments and arts */}
      {elements}
      
      {/* Very subtle bottom gradient just for text readability at the very edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
