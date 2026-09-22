import { Sparkles } from "lucide-react";
import { marqueeWords } from "../data";

export default function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center">
      {marqueeWords.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display font-bold uppercase text-[clamp(1.8rem,4vw,3.5rem)] tracking-tight px-6 text-bone/90">
            {w}
          </span>
          <Sparkles className="w-6 h-6 text-ember shrink-0" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative border-y border-line py-6 md:py-8 overflow-hidden bg-coal/50">
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}
