import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Phone, Mail } from "lucide-react";
import { profile } from "../data";

const links = [
  { label: "About", hash: "#about" },
  { label: "Experience", hash: "#experience" },
  { label: "Projects", hash: "#projects" },
  { label: "Skills", hash: "#skills" },
  { label: "Education", hash: "#education" },
  { label: "Contact", hash: "#contact" },
];

export default function Navbar({ onNavigate }: { onNavigate: (hash: string) => void }) {
  const [open, setOpen] = useState(false);

  const go = (hash: string) => {
    setOpen(false);
    setTimeout(() => onNavigate(hash), open ? 500 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-[90] flex items-center justify-between px-5 md:px-10 py-5 bg-ink/75 backdrop-blur-md border-b border-line/40"
      >
        <button
          onClick={() => go("#top")}
          className="font-display font-extrabold tracking-tight text-bone hover:text-bone/90 transition-colors flex items-end gap-1 leading-none"
        >
          <span className="text-lg uppercase">{profile.firstName}</span>
          <span className="text-ember text-lg font-bold">.</span>
          <span className="text-lg uppercase">{profile.lastName}</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-coal border border-line text-smoke ml-2 hidden sm:inline-block uppercase tracking-wider">
            AI/ML
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.hash}
              onClick={() => go(l.hash)}
              className="group relative text-xs tracking-[0.25em] uppercase text-bone/80 hover:text-bone transition-colors"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${profile.phone}`}
            className="hidden xl:inline-flex items-center gap-2 text-xs tracking-wider border border-line rounded-full px-4 py-1.5 text-bone/80 hover:border-ember hover:text-ember transition-colors"
          >
            <Phone className="w-3 h-3 text-ember" />
            {profile.phone}
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-ember text-ink px-4 py-1.5 rounded-full hover:bg-bone transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            Hire Me
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="lg:hidden text-bone p-1"
          >
            <Plus
              className={`w-7 h-7 transition-transform duration-300 ${open ? "rotate-45 text-ember" : ""}`}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[80] bg-coal flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-3">
              {links.map((l, i) => (
                <motion.button
                  key={l.hash}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.12 + i * 0.05, duration: 0.5 }}
                  onClick={() => go(l.hash)}
                  className="text-left font-display font-bold uppercase text-3xl sm:text-5xl leading-tight text-bone hover:text-ember transition-colors"
                >
                  {l.label}
                </motion.button>
              ))}
            </nav>

            <motion.div
              className="mt-10 pt-8 border-t border-line/60 flex flex-col gap-2 text-sm text-smoke"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <a href={`mailto:${profile.email}`} className="text-bone hover:text-ember transition-colors">
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="text-bone hover:text-ember transition-colors">
                {profile.phone}
              </a>
              <span className="text-xs tracking-wider uppercase text-smoke mt-2">{profile.location}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
