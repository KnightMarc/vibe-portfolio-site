import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Enterprise Workflow Automation',
    shortDescription: 'Designed and deployed operational workflows using n8n, Google Calendar, and Telegram APIs to drastically reduce manual coordination.',
    challenge: 'Manual appointment scheduling and conflicting availability caused inefficiencies and required significant manual oversight.',
    approach: 'Analyzed workflow bottlenecks and selected n8n, Google Calendar, and Telegram APIs for seamless integration.',
    solution: 'Engineered an automated calendar management system with intelligent auto-replies to handle appointment conflicts.',
    results: 'Streamlined weekly schedule monitoring and drastically reduced manual coordination for the CEO.',
    tags: ['n8n', 'Zapier', 'API Integration', 'Automation'],
  },
  {
    id: 2,
    title: 'UniCapp Interactive Ordering System',
    shortDescription: 'Led the end-to-end development of an interactive visual ordering system utilizing React Native and Firebase.',
    challenge: 'Needed to coordinate a team to build an interactive ordering system under budget constraints and tight deadlines.',
    approach: 'Applied Agile project management principles, managed sprint deadlines, and created the System Requirements Specification (SRS).',
    solution: 'Led the development of frontend and backend infrastructure using React Native, Expo, and Firebase.',
    results: 'Delivered architectural design and comprehensive technical documentation on schedule, meeting internal sprint goals.',
    tags: ['Agile', 'Project Management', 'Technical Documentation'],
  },
  {
    id: 3,
    title: 'Network Infrastructure & Hardware Servicing',
    shortDescription: 'Proven expertise as a Certified CSS NC-II Technician in assembling and maintaining PC hardware and networking systems.',
    challenge: 'Ensuring reliable hardware performance, optimal network connectivity, and minimal downtime in varied computing environments.',
    approach: 'Followed strict CSS NC-II certification standards for diagnostics, hardware assembly, and network setup.',
    solution: 'Assembled/disassembled PC hardware, configured routers, set up LANs, and performed RJ45 cable capping.',
    results: 'Maintained robust, secure, and optimized local network environments across Windows and Linux operating systems.',
    tags: ['LAN Setup', 'Router Configuration', 'Hardware Servicing'],
  },
];

function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col gap-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:border-violentBlue/50 dark:bg-darkCard/50 dark:border-white/10 dark:backdrop-blur-md dark:hover:neon-glow group ${expandedId === project.id ? 'lg:col-span-2' : ''}`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold heading-font dark:text-white group-hover:text-violentBlue transition-colors duration-300">
                {project.title}
              </h3>
              <span className="h-3 w-3 rounded-full bg-violentBlue dark:shadow-[0_0_8px_rgba(58,79,255,0.8)]"></span>
            </div>
            
            <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
              {project.shortDescription}
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

            <AnimatePresence>
              {expandedId === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden border-t border-black/10 dark:border-white/10 mt-4 pt-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h4 className="font-semibold text-black dark:text-white mb-2 uppercase tracking-wide text-xs text-violentBlue dark:text-violet-400">The Challenge</h4>
                      <p className="text-black/70 dark:text-white/70 leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white mb-2 uppercase tracking-wide text-xs text-violentBlue dark:text-violet-400">The Approach</h4>
                      <p className="text-black/70 dark:text-white/70 leading-relaxed">{project.approach}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white mb-2 uppercase tracking-wide text-xs text-violentBlue dark:text-violet-400">The Solution</h4>
                      <p className="text-black/70 dark:text-white/70 leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white mb-2 uppercase tracking-wide text-xs text-violentBlue dark:text-violet-400">The Results</h4>
                      <p className="text-black/70 dark:text-white/70 leading-relaxed">{project.results}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-auto pt-2">
              <button
                onClick={() => toggleExpand(project.id)}
                type="button"
                className="text-sm font-semibold text-violentBlue transition-all duration-200 ease-out hover:text-black dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violentBlue focus-visible:ring-offset-2 font-mono"
              >
                {expandedId === project.id ? '< Close details_' : '> View case study_'}
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
