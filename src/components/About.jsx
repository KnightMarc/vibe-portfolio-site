import { motion } from 'framer-motion';

function About() {
  return (
    <section
      id="about"
      className="container grid gap-8 border-t border-black/10 py-16 md:grid-cols-3 md:py-20 mt-20 dark:border-white/10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-3"
      >
        <span className="font-mono text-xs font-semibold text-violentBlue dark:text-violet-400 tracking-wider uppercase">
          // 01. ABOUT
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold heading-font dark:text-white">
          Background & Impact
        </h2>
        <p className="text-sm text-black/60 dark:text-white/60">
          Technical Precision Meets Infrastructure Automation
        </p>
        <div className="block shrink-0 mt-4">
          <img
            src="/profile.png"
            alt="Portrait of Knight Marc Xavier C. Ballao"
            className="h-24 w-24 rounded-full object-cover shadow-md border border-black/10 dark:border-white/20 filter dark:brightness-90"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:col-span-2 space-y-4 md:mt-0 mt-4"
      >
        <div className="space-y-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:bg-darkCard/50 dark:border-white/10 backdrop-blur-md">
          <p className="text-base sm:text-lg leading-relaxed text-black/80 dark:text-white/85">
            As an <strong>IT Infrastructure & Automation Specialist</strong> and certified technician (<strong>CompTIA ITF+</strong>, <strong>CSS NC-II</strong>), I specialize in architecting resilient system architectures, containerized workflow pipelines, and enterprise-grade networking solutions.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-black/70 dark:text-white/70">
            In my recent role at <strong>SynerGrid LLC</strong>, I managed self-hosted <strong>n8n workflow pipelines</strong>, implemented <strong>Docker containerization</strong> for high-availability microservices, and configured secure <strong>ngrok endpoints</strong> to enable seamless external integration. Whether automating complex backend operations or engineering secure local area networks, my focus is delivering high-performance, well-documented, and scalable infrastructure.
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-mono font-medium text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300">
              DevOps & Containerization
            </span>
            <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-mono font-medium text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
              Enterprise Networking (CSS NC-II)
            </span>
            <span className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-xs font-mono font-medium text-purple-600 dark:bg-purple-500/20 dark:text-purple-300">
              App Development & AI Rules
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
