import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Award } from "lucide-react";
import { profile } from "../data";
import { RevealText, SectionHeading, Magnetic } from "./ui";

export default function About() {
  return (
    <section id="about" className="px-5 md:px-10 py-24 md:py-36 relative">
      <SectionHeading index="01" label="About Me" title="Engineered for Intelligence" />

      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5 relative">
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="relative aspect-[3/4] overflow-hidden max-w-sm rounded border border-line"
          >
            <img
              src="portrait.jpg"
              alt={profile.fullName}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs tracking-[0.25em] uppercase text-ember font-bold block">
                {profile.fullName}
              </span>
              <span className="text-xs text-smoke/90 flex items-center gap-1.5 mt-1">
                <MapPin className="w-3 h-3 text-ember" />
                {profile.location}
              </span>
            </div>
          </motion.div>

          <div className="mt-6 border border-line/70 p-5 rounded bg-coal/30">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ember font-semibold mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" /> Career Target
            </p>
            <p className="text-sm text-bone/85 leading-relaxed italic">
              "{profile.summary}"
            </p>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-between gap-10">
          <div>
            <RevealText
              text={profile.about}
              className="text-lg md:text-2xl leading-relaxed font-light text-bone/90"
              stagger={0.015}
            />

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="border border-line p-5 rounded bg-coal/20">
                <p className="text-xs uppercase tracking-widest text-smoke mb-1">Direct Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-sm text-bone hover:text-ember transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-ember" />
                  {profile.email}
                </a>
              </div>
              <div className="border border-line p-5 rounded bg-coal/20">
                <p className="text-xs uppercase tracking-widest text-smoke mb-1">Direct Phone</p>
                <a
                  href={`tel:${profile.phone}`}
                  className="font-mono text-sm text-bone hover:text-ember transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-ember" />
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-line/60">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full md:w-auto">
              {profile.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display font-extrabold text-3xl md:text-4xl text-bone">
                    {s.value}
                    <span className="text-ember text-xl">+</span>
                  </p>
                  <p className="text-xs tracking-[0.2em] uppercase text-smoke mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <Magnetic>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-3 bg-ember text-ink font-display font-bold uppercase tracking-wider text-xs px-7 py-3.5 rounded-full hover:bg-bone transition-colors"
              >
                Let's Talk
                <span className="w-2 h-2 rounded-full bg-ink group-hover:bg-ember transition-colors" />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
