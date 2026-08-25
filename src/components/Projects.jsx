import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Unicapp: Interactive Visual Ordering System',
    shortDescription: 'Interactive mobile & visual ordering application engineered with React Native, Firebase real-time database, and rule-based AI recommendation logic.',
    challenge: 'Traditional mobile ordering interfaces lacked real-time dynamic visual customization and personalized recommendations under constrained mobile hardware resources.',
    approach: 'Architected a modular component library using React Native, integrated Firebase for instant state synchronization, and built a rule-based AI engine for dynamic menu pairing.',
    solution: 'Engineered cross-platform mobile frontend with Expo, real-time Firebase backend services, and custom rule evaluation algorithms for menu customization.',
    results: 'Delivered intuitive visual ordering workflows, smooth state persistence, and a highly responsive cross-platform user experience.',
    tags: ['React Native', 'Firebase', 'Rule-Based AI'],
    tagBg: 'bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300 border border-purple-500/20',
    githubUrl: 'https://github.com/KnightMarc/UNICAPP-Initial',
    actionText: 'View Repository on GitHub',
  },
  {
    id: 2,
    title: 'CSS NC-II Enterprise Networking Module',
    shortDescription: 'Comprehensive enterprise network infrastructure design, hardware servicing protocol, and administrative guide following TESDA CSS NC-II national standards.',
    challenge: 'Designing a standardized, failure-resistant local area network (LAN) setup with complete hardware diagnostic procedures and administrative documentation.',
    approach: 'Structured network topology schematics, IP address allocation schemes, router/switch configuration scripts, and step-by-step assembly/capping procedures.',
    solution: 'Produced a comprehensive administrative PDF manual detailing enterprise hardware setup, VLAN configuration, router maintenance, and system troubleshooting.',
    results: 'Established a repeatable, production-ready networking guide and testing framework adopted for enterprise systems servicing.',
    tags: ['LAN Setup', 'Router Configuration', 'Enterprise Hardware'],
    tagBg: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-500/20',
    pdfUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing',
    actionText: 'Download / View Administrative Guide (PDF)',
  },
  {
    id: 3,
    title: 'SynerGrid Enterprise Workflow Automation',
    shortDescription: 'Self-hosted n8n automation pipelines containerized with Docker and securely exposed via ngrok endpoints to streamline enterprise scheduling.',
    challenge: 'Manual appointment management, fragmented API services, and self-hosted infrastructure requirements demanded automated synchronization without high cloud overhead.',
    approach: 'Deployed self-hosted n8n instances inside isolated Docker containers, established secure ngrok tunnels, and integrated Telegram & Google APIs.',
    solution: 'Engineered end-to-end automated pipelines featuring collision detection, automated auto-replies, and multi-platform trigger handling.',
    results: 'Eliminated manual scheduling bottlenecks, guaranteed zero-downtime microservice orchestration, and significantly boosted administrative efficiency.',
    tags: ['n8n', 'Docker', 'ngrok', 'Automation'],
    tagBg: 'bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/20',
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
      className="container flex flex-col gap-12 border-t border-black/10 py-16 md:py-20 mt-20 dark:border-white/10"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold text-violentBlue dark:text-violet-400 tracking-wider uppercase">
            // 04. PROJECTS & CASE STUDIES
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold heading-font dark:text-white">Featured Builds & Engineering</h2>
        <p className="text-sm text-black/60 dark:text-white/60">
          Selected technical projects highlighting mobile app engineering, enterprise networking modules, and containerized n8n workflow automations.
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
            className="flex flex-col gap-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:border-violentBlue/50 dark:bg-darkCard/50 dark:border-white/10 dark:backdrop-blur-md dark:hover:neon-glow group relative"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold heading-font dark:text-white group-hover:text-violentBlue transition-colors duration-300">
                {project.title}
              </h3>
              <span className="h-3 w-3 rounded-full bg-violentBlue dark:shadow-[0_0_8px_rgba(58,79,255,0.8)] shrink-0"></span>
            </div>
            
            <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`inline-block rounded-full px-3 py-1 text-xs font-mono font-medium ${project.tagBg}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons for GitHub / PDF */}
            <div className="flex flex-wrap gap-3 pt-1">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-black/5 dark:bg-white/10 px-4 py-2 text-xs font-mono font-semibold text-black dark:text-white transition-all hover:bg-violentBlue hover:text-white dark:hover:bg-violentBlue dark:hover:text-white border border-black/10 dark:border-white/10"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  {project.actionText}
                </a>
              )}

              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-black/5 dark:bg-white/10 px-4 py-2 text-xs font-mono font-semibold text-black dark:text-white transition-all hover:bg-violentBlue hover:text-white dark:hover:bg-violentBlue dark:hover:text-white border border-black/10 dark:border-white/10"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                  </svg>
                  {project.actionText}
                </a>
              )}
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
                  <div className="grid grid-cols-1 gap-4 text-sm">
                    <div>
                      <h4 className="font-mono font-semibold text-xs text-violentBlue dark:text-violet-400 mb-1 uppercase tracking-wider">The Challenge</h4>
                      <p className="text-black/70 dark:text-white/70 leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-mono font-semibold text-xs text-violentBlue dark:text-violet-400 mb-1 uppercase tracking-wider">The Approach</h4>
                      <p className="text-black/70 dark:text-white/70 leading-relaxed">{project.approach}</p>
                    </div>
                    <div>
                      <h4 className="font-mono font-semibold text-xs text-violentBlue dark:text-violet-400 mb-1 uppercase tracking-wider">The Solution</h4>
                      <p className="text-black/70 dark:text-white/70 leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-mono font-semibold text-xs text-violentBlue dark:text-violet-400 mb-1 uppercase tracking-wider">The Results</h4>
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
                className="text-sm font-semibold text-violentBlue transition-all duration-200 hover:text-black dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violentBlue font-mono"
              >
                {expandedId === project.id ? '< Close details_' : '> View case study details_'}
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
