import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Database,
  Brain,
  Cloud,
  Users,
  Award,
  Globe2,
  Trophy,
} from "lucide-react";
import {
  skillCategories,
  certifications,
  spokenLanguages,
  achievements,
} from "../data";
import { SectionHeading } from "./ui";

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 className="w-5 h-5 text-ember" />,
  "Frontend & Mobile": <Layout className="w-5 h-5 text-ember" />,
  "Backend & Databases": <Database className="w-5 h-5 text-ember" />,
  "AI, ML & Analytics": <Brain className="w-5 h-5 text-ember" />,
  "Cloud, DevOps & Tools": <Cloud className="w-5 h-5 text-ember" />,
  "Soft Skills": <Users className="w-5 h-5 text-ember" />,
};

export default function Skills() {
  return (
    <section id="skills" className="px-5 md:px-10 py-24 md:py-36 bg-coal/30 border-y border-line">
      <SectionHeading index="04" label="Technical Arsenal" title="Skills, Tools & Certifications" />

      {/* Grid of skills */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="border border-line/70 bg-ink/60 rounded-lg p-6 hover:border-ember/50 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 rounded-md bg-coal border border-line group-hover:border-ember/40 transition-colors">
                {categoryIcons[cat.category] || <Code2 className="w-5 h-5 text-ember" />}
              </span>
              <h3 className="font-display font-bold uppercase tracking-tight text-lg text-bone">
                {cat.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-full bg-coal border border-line/80 text-bone/90 font-mono hover:text-ember hover:border-ember/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications & Spoken Languages */}
      <div className="mt-16 grid lg:grid-cols-12 gap-8">
        {/* Certifications */}
        <div className="lg:col-span-7 border border-line/70 bg-ink/60 rounded-lg p-6 md:p-8">
          <div className="flex items-center gap-2.5 mb-6">
            <Award className="w-5 h-5 text-ember" />
            <h3 className="font-display font-bold uppercase tracking-tight text-xl text-bone">
              Licenses & Certifications
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="border border-line/50 rounded p-4 bg-coal/40 hover:border-ember/40 transition-colors"
              >
                <span className="text-[10px] tracking-wider uppercase text-ember font-mono block mb-1">
                  {cert.tag}
                </span>
                <h4 className="font-display font-bold text-base text-bone">{cert.name}</h4>
                <p className="text-xs text-smoke mt-1">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Spoken Languages & Activities */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="border border-line/70 bg-ink/60 rounded-lg p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <Globe2 className="w-5 h-5 text-ember" />
              <h3 className="font-display font-bold uppercase tracking-tight text-xl text-bone">
                Languages Spoken
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {spokenLanguages.map((lang) => (
                <div
                  key={lang.name}
                  className="border border-line/50 p-3 rounded bg-coal/40"
                >
                  <p className="font-bold text-bone text-sm">{lang.name}</p>
                  <p className="text-[11px] text-smoke mt-0.5">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-line/70 bg-ink/60 rounded-lg p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <Trophy className="w-5 h-5 text-ember" />
              <h3 className="font-display font-bold uppercase tracking-tight text-xl text-bone">
                Achievements & Activities
              </h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((ach) => (
                <li key={ach.title} className="text-sm">
                  <p className="font-semibold text-bone">{ach.title}</p>
                  <p className="text-smoke text-xs mt-0.5 leading-relaxed">
                    {ach.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
