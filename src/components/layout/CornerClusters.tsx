import { Clapperboard, Play, Info, Volume2, Maximize } from "lucide-react";

export function CornerClusters() {
  return (
    <>
      {/* Top-Left Utility Cluster: Scene controls */}
      <div className="absolute top-4 left-4 z-50 flex items-center gap-3">
        <button className="text-bone-white hover:opacity-70 transition-opacity">
          <Clapperboard className="w-5 h-5 stroke-[1.5px]" />
        </button>
        <button className="text-bone-white hover:opacity-70 transition-opacity">
          <Play className="w-5 h-5 stroke-[1.5px]" />
        </button>
        <button className="text-bone-white hover:opacity-70 transition-opacity">
          <Info className="w-5 h-5 stroke-[1.5px]" />
        </button>
      </div>

      {/* Top-Right Utility Cluster: Global controls */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
        <button className="text-bone-white hover:opacity-70 transition-opacity font-ciutadella text-[13px] tracking-normal font-light">
          FR
        </button>
        <button className="text-bone-white hover:opacity-70 transition-opacity">
          <Volume2 className="w-5 h-5 stroke-[1.5px]" />
        </button>
        <button className="text-bone-white hover:opacity-70 transition-opacity">
          <Maximize className="w-5 h-5 stroke-[1.5px]" />
        </button>
      </div>
    </>
  );
}
