import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 300);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-ink flex flex-col justify-between p-6 md:p-10"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex justify-between text-xs tracking-[0.3em] uppercase text-smoke">
        <span>Portfolio © 2025</span>
        <span>{profile.location}</span>
      </div>

      <div className="flex items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="font-display font-extrabold uppercase text-[clamp(1.8rem,5vw,3.5rem)] leading-none text-bone">
            {profile.firstName}
            <span className="text-ember">.</span>
            <span className="text-ember"> </span>
            {profile.lastName}
            <span className="text-ember">.</span>
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-ember mt-2 font-mono">
            AI/ML • Full Stack • Analytics
          </p>
        </motion.div>
        <span className="font-display font-extrabold text-[clamp(4rem,14vw,11rem)] leading-none tabular-nums text-bone">
          {count}
          <span className="text-ember">%</span>
        </span>
      </div>

      <motion.div
        className="h-px bg-line relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 bg-ember"
          style={{ width: `${count}%` }}
        />
      </motion.div>
    </motion.div>
  );
}
