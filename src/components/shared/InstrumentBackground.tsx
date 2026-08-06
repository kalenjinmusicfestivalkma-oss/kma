import { Music, Mic2, Headphones, Radio, PlayCircle, Star, Sparkles, Music2, Speaker } from "lucide-react";

const icons = [Music, Mic2, Headphones, Radio, PlayCircle, Star, Sparkles, Music2, Speaker];

export function InstrumentBackground() {
  // Generate a random-looking but deterministic distribution of icons
  const elements = Array.from({ length: 24 }).map((_, i) => {
    const Icon = icons[i % icons.length];
    
    // Deterministic pseudo-random values for position and rotation
    const top = `${(i * 17) % 100}%`;
    const left = `${(i * 23) % 100}%`;
    const rotation = (i * 45) % 360;
    const size = (i % 3 === 0) ? 48 : (i % 2 === 0) ? 32 : 24;
    const opacity = (i % 2 === 0) ? 0.05 : 0.08;
    
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Glow blobs to keep the scene dramatic but clear */}
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-kalenjin-maroon/20 blur-[120px]" />
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-kalenjin-green/15 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full bg-primary-gold/10 blur-[100px]" />
      
      {/* Scattered musical instruments and arts */}
      {elements}
      
      {/* Subtle overlay gradient to blend everything smoothly */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>
  );
}
