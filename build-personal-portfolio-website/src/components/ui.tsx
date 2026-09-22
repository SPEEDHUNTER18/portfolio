import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { cn } from "../utils/cn";

/* ---------------- Magnetic — element gravitates toward cursor ---------------- */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- RevealText — words rise into view on scroll ---------------- */
export function RevealText({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.035,
  once = true,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const words = text.split(" ");

  return (
    <p ref={ref} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-flex pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className={cn("inline-block will-change-transform", wordClassName)}
            initial={{ y: "115%", rotate: 4 }}
            animate={inView ? { y: "0%", rotate: 0 } : {}}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * stagger,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </p>
  );
}

/* ---------------- SectionHeading — numbered label + display title ---------------- */
export function SectionHeading({
  index,
  label,
  title,
  className,
}: {
  index: string;
  label: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-14 md:mb-20", className)}>
      <RevealText
        text={`${index} — ${label}`}
        className="text-xs tracking-[0.3em] uppercase text-ember font-medium mb-6"
      />
      <RevealText
        text={title}
        className="font-display font-bold uppercase leading-[0.95] text-[clamp(2.6rem,7vw,6.5rem)] tracking-tight"
        stagger={0.06}
      />
    </div>
  );
}
