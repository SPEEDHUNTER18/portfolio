import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Mail, Phone, Download } from "lucide-react";
import { profile } from "../data";
import { Magnetic } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
      <motion.span
        className="block will-change-transform"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-svh flex flex-col justify-between px-5 md:px-10 pt-28 md:pt-36 pb-10 overflow-hidden"
    >
      {/* ambient glows */}
      <div className="absolute -top-32 right-[-5%] w-[45vw] h-[45vw] rounded-full bg-ember/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-500/[0.04] blur-[140px] pointer-events-none" />

      {/* Top badges */}
      <motion.div style={{ y: yTitle, opacity }} className="relative z-10">
        <Line delay={0.3}>
          <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm tracking-[0.25em] uppercase text-smoke">
            <span className="flex items-center gap-2 text-ember font-medium">
              <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
              {profile.tagline}
            </span>
            <span className="text-line">•</span>
            <span className="flex items-center gap-1.5 text-smoke/90">
              <MapPin className="w-3.5 h-3.5 text-ember" />
              {profile.location}
            </span>
          </div>
        </Line>
      </motion.div>

      {/* Hero Name & Title */}
      <div className="relative z-10 flex-1 flex flex-col justify-center py-8 md:py-12">
        <motion.div style={{ y: yTitle }} className="max-w-5xl">
          {/* Single solid name block — "JEEVAN" + "M" share the same baseline & rhythm */}
          <Line delay={0.45}>
            <span className="flex items-end gap-[0.05em] font-display font-extrabold uppercase leading-[0.88] tracking-tight text-[clamp(3.6rem,12.5vw,11rem)] text-bone">
              <span className="block">{profile.firstName}</span>
              <span className="block text-ember">.</span>
              <span className="block">{profile.lastName}</span>
            </span>
          </Line>

          {/* Subtle qualifier line — adds editorial weight beneath the name */}
          <Line delay={0.6}>
            <span className="mt-3 inline-flex items-center gap-3 text-[clamp(1.1rem,2.4vw,1.8rem)] font-display font-bold uppercase tracking-[0.05em] text-bone/85">
              <span className="w-8 md:w-14 h-px bg-ember/80" />
              <span>{profile.role}</span>
            </span>
          </Line>

          {/* Tag line */}
          <Line delay={0.75}>
            <span className="block mt-5 text-smoke text-[clamp(0.95rem,1.4vw,1.15rem)] tracking-[0.2em] uppercase font-mono">
              {profile.tagline}
            </span>
          </Line>
        </motion.div>

        {/* Floating portrait */}
        <motion.div
          style={{ y: yImg }}
          className="absolute right-0 md:right-[5%] top-1/2 -translate-y-1/2 z-[-1] pointer-events-none"
        >
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, ease, delay: 0.9 }}
            className="relative w-[42vw] max-w-[280px] md:max-w-[360px] aspect-[3/4] overflow-hidden rounded-sm border border-line/60 shadow-2xl"
          >
            <img
              src="/images/portrait.jpg"
              alt={profile.fullName}
              className="w-full h-full object-cover grayscale contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] tracking-widest uppercase text-bone/70 bg-ink/70 backdrop-blur-sm px-3 py-1.5 border border-line/50">
              <span>{profile.fullName}</span>
              <span className="text-ember">MCA (AI/ML)</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom summary and interactive links */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pt-4 border-t border-line/40"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-ember font-semibold mb-2">
            Career Objective
          </p>
          <p className="text-smoke text-sm md:text-base leading-relaxed">
            "{profile.summary}"
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold bg-bone text-ink px-4 py-2 rounded-full hover:bg-ember hover:text-ink transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> Contact Jeevan
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider border border-line px-4 py-2 rounded-full text-bone/90 hover:border-ember hover:text-ember transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-ember" /> {profile.phone}
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-smoke hover:text-bone transition-colors"
            >
              <Download className="w-3 h-3 text-ember" /> Explore Profile
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, type: "spring", stiffness: 100, damping: 14 }}
          className="hidden md:block shrink-0"
        >
          <Magnetic>
            <a
              href="#about"
              className="relative w-28 h-28 grid place-items-center rounded-full hover:scale-105 transition-transform"
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow">
                <defs>
                  <path id="circ" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                </defs>
                <text className="fill-bone text-[9.5px] uppercase tracking-[0.22em]">
                  <textPath href="#circ">
                    • JEEVAN M • PORTFOLIO 2025 • EXPLORE
                  </textPath>
                </text>
              </svg>
              <ArrowDown className="w-5 h-5 text-ember" />
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}
