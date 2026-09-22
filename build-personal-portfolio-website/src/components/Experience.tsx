import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import { experienceData } from "../data";
import { SectionHeading } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="px-5 md:px-10 py-24 md:py-36 border-t border-line">
      <SectionHeading index="03" label="Work Experience" title="Practical Industry Experience" />

      <div className="max-w-5xl mx-auto">
        {experienceData.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="border border-line/80 bg-coal/40 rounded-lg p-6 md:p-10 relative overflow-hidden"
          >
            {/* Accent border strip */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-ember" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-full bg-ember/10 border border-ember/30 text-ember">
                    <Briefcase className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-display font-extrabold uppercase text-2xl md:text-3xl text-bone">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-ember font-semibold mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-smoke bg-ink/80 px-4 py-2 rounded-full border border-line w-fit">
                <Calendar className="w-3.5 h-3.5 text-ember" />
                <span>{exp.period}</span>
              </div>
            </div>

            <p className="text-bone/85 leading-relaxed text-base md:text-lg mb-8 max-w-4xl">
              {exp.description}
            </p>

            <div>
              <p className="text-xs uppercase tracking-widest text-smoke font-semibold mb-3">
                Focus Areas & Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-full bg-ink border border-line text-bone font-mono"
                  >
                    <CheckCircle className="w-3 h-3 text-ember" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
