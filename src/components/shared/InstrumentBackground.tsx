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
    const size = (i % 3 === 0) ? 64 : (i % 2 === 0) ? 48 : 36;
    const opacity = (i % 2 === 0) ? 0.15 : 0.25;
    
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-gradient-to-br from-kalenjin-maroon/20 via-surface to-primary-gold/10">
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
