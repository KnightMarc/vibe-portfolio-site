import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'CompTIA IT Fundamentals (ITF+)',
    issuer: 'CompTIA International',
    badgeText: 'INTERNATIONAL CERTIFICATION',
    code: 'FC0-U61',
    description:
      'Demonstrated foundational proficiency across core IT concepts, hardware infrastructure, software development principles, database concepts, and security protocols.',
    skills: ['IT Infrastructure', 'Security Best Practices', 'Networking Concepts', 'System Diagnostics'],
    badgeBg: 'bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/20',
  },
  {
    title: 'Computer Systems Servicing NC-II',
    issuer: 'TESDA National Certification',
    badgeText: 'NATIONAL CERTIFICATION',
    code: 'CSS NC-II',
    description:
      'Certified technical mastery in assembling computer hardware, installing operating systems and server software, configuring network systems, and maintaining enterprise LAN environments.',
    skills: ['Enterprise LAN Setup', 'Hardware Assembly & Servicing', 'Router Configuration', 'Network Capping'],
    badgeBg: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-500/20',
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="container flex flex-col gap-10 border-t border-black/10 py-16 md:py-20 mt-20 dark:border-white/10"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold text-violentBlue dark:text-violet-400 tracking-wider uppercase">
            // 02. CERTIFICATIONS
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold heading-font dark:text-white">
          Certifications & Industry Standards
        </h2>
        <p className="text-sm text-black/60 dark:text-white/60">
          Verified technical credentials validating enterprise networking proficiency, IT infrastructure standards, and system servicing rigor.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-violentBlue/50 dark:bg-darkCard/50 dark:border-white/10 dark:backdrop-blur-md dark:hover:neon-glow relative overflow-hidden group"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-mono font-semibold ${cert.badgeBg}`}>
                  {cert.badgeText}
                </span>
                <span className="text-xs font-mono text-black/50 dark:text-white/50">
                  CODE: {cert.code}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-semibold heading-font dark:text-white group-hover:text-violentBlue transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono font-medium text-violentBlue dark:text-violet-400">
                  {cert.issuer}
                </p>
              </div>

              <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-black/5 px-2.5 py-1 text-xs font-mono text-black/75 dark:bg-white/10 dark:text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
