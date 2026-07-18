import { motion } from 'framer-motion';

function About() {
  return (
    <section
      id="about"
      className="container grid gap-8 border-t border-black/10 py-16 md:grid-cols-3 md:py-20 mt-24 dark:border-white/10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-2"
      >
        <h2 className="text-2xl font-semibold heading-font dark:text-white">About</h2>
        <p className="text-sm text-black/60 mt-4 mb-4 dark:text-white/60">
          Technical Precision Meets Creative Execution
        </p>
        <div className="block shrink-0 mt-2">
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
        <div className="space-y-3">
          <p className="text-lg leading-relaxed text-black/75 dark:text-white/80">
            As a 3rd-year BSIT student and certified professional (CompTIA ITF+, CSS NC-II), I bridge the gap between complex technical infrastructure and operational efficiency. My expertise spans across designing seamless AI-driven workflow automations (n8n, Zapier), configuring and maintaining reliable network systems, and applying Agile project management principles to coordinate teams and deliver scalable tech solutions.
          </p>
          <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
            Whether I’m automating repetitive processes, servicing hardware and local area networks, or managing high-level software operations, my goal is to provide the reliable technical backbone your business needs to grow without friction. I thrive on translating technical complexity into actionable, successful projects.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;

