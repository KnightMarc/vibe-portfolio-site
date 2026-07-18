import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Enterprise Workflow Automation',
    description:
      'Engineered an automated calendar management system and intelligent auto-reply mechanisms to handle appointment conflicts. Designed and deployed operational workflows using n8n, Google Calendar, and Telegram APIs to drastically reduce manual coordination as an AI Automation Intern.',
    tags: ['n8n', 'Zapier', 'API Integration', 'Automation'],
  },
  {
    title: 'UniCapp Interactive Ordering System',
    description:
      'Led the end-to-end development of an interactive visual ordering system utilizing React Native and Firebase. Applied Agile project management principles to coordinate team tasks, ensure comprehensive technical documentation, and successfully meet internal sprint deadlines as a Project Manager.',
    tags: ['Agile', 'Project Management', 'Technical Documentation'],
  },
  {
    title: 'Network Infrastructure & Hardware Servicing',
    description:
      'Proven expertise as a Certified CSS NC-II Technician in assembling and disassembling PC hardware, configuring routers, setting up Local Area Networks (LAN), and performing RJ45 cable capping. Proficient in diagnosing and maintaining both Windows and Linux operating systems.',
    tags: ['LAN Setup', 'Router Configuration', 'Hardware Servicing'],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="container flex flex-col gap-12 border-t border-black/10 py-16 md:py-20 mt-24 md:mt-28 dark:border-white/10"
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold heading-font dark:text-white">Projects & Expertise</h2>
        <p className="text-sm text-black/60 dark:text-white/60">
          A showcase of my work spanning AI workflow automations, complex technical project management, and hardware/network infrastructure setups.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col gap-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-violentBlue/50 dark:bg-darkCard/50 dark:border-white/10 dark:backdrop-blur-md dark:hover:neon-glow group"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold heading-font dark:text-white group-hover:text-violentBlue transition-colors duration-300">
                {project.title}
              </h3>
              <span className="h-3 w-3 rounded-full bg-violentBlue dark:shadow-[0_0_8px_rgba(58,79,255,0.8)]"></span>
            </div>
            <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full bg-violentBlue/10 px-3 py-1 text-xs font-medium text-violentBlue dark:bg-violentBlue/20 dark:text-violet-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-2">
              <button
                type="button"
                className="text-sm font-semibold text-violentBlue transition-all duration-200 ease-out hover:text-black dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violentBlue focus-visible:ring-offset-2 font-mono"
              >
                &gt; View details_
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

