import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { education } from "../data";
import { SectionHeading } from "./ui";

export default function Education() {
  return (
    <section id="education" className="px-5 md:px-10 py-24 md:py-36">
      <SectionHeading index="05" label="Academic Background" title="Education & Qualifications" />

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="border border-line/80 bg-coal/30 rounded-lg p-6 md:p-8 flex flex-col justify-between hover:border-ember/50 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-ember/5 rounded-full blur-2xl group-hover:bg-ember/10 transition-colors" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="p-2.5 rounded-full bg-coal border border-line text-ember">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-smoke font-mono">
                  <Calendar className="w-3.5 h-3.5 text-ember" />
                  {edu.period}
                </span>
              </div>

              <h3 className="font-display font-extrabold uppercase text-xl md:text-2xl text-bone leading-snug">
                {edu.degree}
              </h3>
              <p className="text-sm md:text-base text-smoke mt-2 font-medium">
                {edu.institution}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember/15 border border-ember/30 text-ember text-xs font-mono font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>{edu.score}</span>
              </div>

              <p className="mt-6 text-sm text-bone/80 leading-relaxed border-t border-line/50 pt-4">
                {edu.highlight}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
