import { useState, useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Layers, CheckCircle2, ExternalLink } from "lucide-react";
import { projects } from "../data";
import { SectionHeading } from "./ui";
import { ProjectMockup } from "./ProjectMockup";

export default function Works() {
  const [active, setActive] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 25, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 200, damping: 25, mass: 0.6 });

  const onMove = (e: MouseEvent) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative px-5 md:px-10 py-24 md:py-36"
    >
      <SectionHeading index="02" label="Key Projects" title="Engineering & Intelligence" />

      {/* Floating preview on desktop */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key={active}
            initial={{ scale: 0.7, opacity: 0, rotate: -4 }}
            animate={{ scale: 1, opacity: 1, rotate: 2 }}
            exit={{ scale: 0.7, opacity: 0, rotate: 4 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            style={{ x: sx, y: sy }}
            className="hidden lg:block fixed top-0 left-0 z-40 pointer-events-none w-[30rem] aspect-[16/10] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-line shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] bg-coal"
          >
            <ProjectMockup id={projects[active].index} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project list */}
      <div className="border-t border-line">
        {projects.map((p, i) => (
          <motion.article
            key={p.index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-6%" }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onClick={() => setSelectedProject(p)}
            data-hover
            className="group relative border-b border-line py-8 md:py-11 cursor-pointer overflow-hidden transition-all duration-300"
          >
            {/* Hover fill sweep */}
            <div className="absolute inset-0 bg-coal/70 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] border-l-4 border-ember" />

            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
              {/* Index */}
              <span className="md:col-span-1 text-xs tracking-[0.3em] font-mono text-ember">
                /{p.index}
              </span>

              {/* Title & subtitle */}
              <div className="md:col-span-5">
                <h3 className="font-display font-extrabold uppercase text-2xl md:text-4xl tracking-tight text-bone group-hover:text-ember group-hover:translate-x-2 transition-all duration-300">
                  {p.title}
                </h3>
                <p className="text-xs tracking-wider uppercase text-smoke mt-1 font-medium">
                  {p.subtitle}
                </p>
              </div>

              {/* Category & Tags */}
              <div className="md:col-span-4">
                <span className="inline-block text-[11px] uppercase tracking-wider text-bone/80 bg-ink/80 px-3 py-1 rounded-full border border-line mb-2">
                  {p.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {p.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-line/40 text-smoke group-hover:text-bone group-hover:bg-line transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0">
                <span className="text-xs tracking-widest text-smoke font-mono">{p.year}</span>
                <button
                  type="button"
                  aria-label={`View details for ${p.title}`}
                  className="w-11 h-11 rounded-full border border-line grid place-items-center group-hover:bg-ember group-hover:border-ember transition-all duration-300 group-hover:scale-105"
                >
                  <ArrowUpRight className="w-4 h-4 text-smoke group-hover:text-ink transition-colors" />
                </button>
              </div>
            </div>

            {/* Mobile inline preview */}
            <div className="relative lg:hidden mt-4 aspect-[16/10] overflow-hidden rounded-lg border border-line/70 shadow-lg">
              <ProjectMockup id={p.index} />
            </div>
          </motion.article>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-coal border border-line rounded-lg overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden shrink-0 border-b border-line">
                <ProjectMockup id={selectedProject.index} />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-coal/90 via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ink/90 text-bone hover:text-ember border border-line grid place-items-center transition-colors z-20 cursor-pointer shadow-lg"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-6 right-6 z-20 pointer-events-none">
                  <span className="text-xs tracking-widest uppercase text-ember font-semibold block">
                    {selectedProject.category} • {selectedProject.year}
                  </span>
                  <h3 className="font-display font-extrabold uppercase text-2xl sm:text-3xl text-bone drop-shadow-md">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-smoke mt-0.5 drop-shadow">{selectedProject.subtitle}</p>
                </div>
              </div>

              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-smoke font-semibold mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-ember" /> Overview
                  </h4>
                  <p className="text-bone/85 leading-relaxed text-sm">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-smoke font-semibold mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-ember" /> Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-ink border border-line text-ember font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-smoke font-semibold mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-ember" /> Key Capabilities
                  </h4>
                  <ul className="space-y-2 text-sm text-bone/80">
                    {selectedProject.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-ember mt-2 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-line/50 flex justify-between items-center">
                  <span className="text-xs text-smoke">Designed & developed by Jeevan M</span>
                  <a
                    href="mailto:jeevanmunisanjeeva@gmail.com?subject=Inquiry about project"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-ember hover:underline"
                  >
                    Inquire details <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
