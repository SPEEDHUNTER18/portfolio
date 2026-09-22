import { useState } from "react";
import { ArrowUpRight, ArrowUp, Copy, Check, Mail, Phone, MapPin } from "lucide-react";
import { profile } from "../data";
import { Magnetic, RevealText } from "./ui";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(profile.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <footer id="contact" className="relative border-t border-line overflow-hidden bg-coal/20">
      {/* Glow */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[85vw] h-[60vh] bg-ember/[0.07] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative px-5 md:px-10 pt-24 md:pt-36 pb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-ember mb-6 font-semibold">
          06 — Contact & Opportunity
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="block group"
          data-hover
        >
          <RevealText
            text="LET'S BUILD"
            className="font-display font-extrabold uppercase leading-[0.9] tracking-tight text-[clamp(2.8rem,10.5vw,10rem)] text-bone"
            stagger={0.04}
          />
          <RevealText
            text="TOGETHER"
            className="font-display font-extrabold uppercase leading-[0.9] tracking-tight text-[clamp(2.8rem,10.5vw,10rem)] text-stroke group-hover:text-ember group-hover:[-webkit-text-stroke:0px] transition-all duration-500"
            stagger={0.04}
            delay={0.12}
          />
        </a>

        {/* Contact actions */}
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 bg-ember text-ink font-display font-bold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:bg-bone transition-colors"
            >
              <Mail className="w-4 h-4" /> Send an Email
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 border border-line bg-ink text-bone font-medium tracking-wide px-6 py-4 rounded-full text-sm hover:border-ember hover:text-ember transition-colors"
            >
              <Phone className="w-4 h-4 text-ember" />
              {profile.phone}
            </a>
          </Magnetic>

          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-2 text-smoke hover:text-bone transition-colors text-xs font-mono border border-line/60 rounded-full px-4 py-3"
          >
            <span>{profile.email}</span>
            {copiedEmail ? (
              <Check className="w-3.5 h-3.5 text-ember" />
            ) : (
              <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
            )}
          </button>

          <button
            onClick={copyPhone}
            className="group inline-flex items-center gap-2 text-smoke hover:text-bone transition-colors text-xs font-mono border border-line/60 rounded-full px-4 py-3"
          >
            <span>Copy Phone</span>
            {copiedPhone ? (
              <Check className="w-3.5 h-3.5 text-ember" />
            ) : (
              <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
            )}
          </button>
        </div>

        {/* Info card */}
        <div className="mt-16 p-6 rounded-lg border border-line/60 bg-ink/70 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-ember font-bold mb-2">
            Location & Relocation
          </p>
          <p className="text-bone/85 text-sm flex items-center gap-2">
            <MapPin className="w-4 h-4 text-ember shrink-0" />
            {profile.location}
          </p>
          <p className="text-xs text-smoke mt-2 leading-relaxed">
            Available for full-time AI/ML, Data Analyst, Software Engineering roles, or freelance technical engagements.
          </p>
        </div>

        {/* Socials / Direct links */}
        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-3 border-t border-line/70 pt-8">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-smoke hover:text-ember transition-colors"
            >
              {s.label}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[11px] tracking-[0.2em] uppercase text-smoke">
          <span>© 2025 {profile.fullName}. Bengaluru, India.</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
            {profile.availability}
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 hover:text-bone transition-colors"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5 text-ember" />
          </button>
        </div>
      </div>
    </footer>
  );
}
