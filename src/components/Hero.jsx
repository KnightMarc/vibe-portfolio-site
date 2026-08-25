import { motion } from 'framer-motion';

const telemetryStats = [
  { label: 'Pipeline Reliability', value: '99.9%', tag: 'Docker / n8n' },
  { label: 'Automated Workflows', value: '30+', tag: 'n8n & APIs' },
  { label: 'Infrastructure Nodes', value: '100+', tag: 'CSS NC-II Certified' },
];

const techPills = ['Docker', 'n8n', 'React Native', 'Firebase', 'ngrok', 'Cisco / LAN', 'Linux'];

function Hero() {
  return (
    <section
      id="home"
      className="container mt-20 flex flex-col gap-10 py-16 md:mt-28 md:py-24 lg:py-32 relative"
    >
      {/* System Status Banner */}
      <div className="flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
        <span className="font-mono text-xs text-emerald-500 tracking-widest uppercase font-semibold">
          SYS.STATUS: ONLINE // IT INFRASTRUCTURE & AUTOMATION SPECIALIST
        </span>
      </div>

      <div className="flex flex-col gap-10 md:flex-row md:items-center justify-between">
        <div className="flex flex-col max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-violentBlue font-mono font-semibold dark:text-violet-400 mb-2">
            Knight Marc Xavier C. Ballao
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight heading-font dark:text-white">
            Architecting Resilient Infrastructure & Automated Workflows.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-black/75 leading-relaxed font-normal dark:text-white/75">
            Specializing in self-hosted <strong>n8n pipelines</strong>, <strong>Docker containerization</strong>, enterprise <strong>networking (CSS NC-II)</strong>, and cross-platform app engineering.
          </p>

          {/* Micro Tech Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {techPills.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs font-mono text-black/80 dark:text-white/80 border border-black/5 dark:border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-violentBlue px-6 py-3 text-white text-sm font-semibold tracking-tight shadow-lg shadow-violentBlue/20 transition-all duration-200 hover:-translate-y-0.5 dark:hover:neon-glow hover:bg-[#3043e0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violentBlue font-mono"
            >
              [View Featured Projects]
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-black/20 dark:border-white/40 px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violentBlue font-mono dark:text-white"
            >
              &gt; Initiate Contact_
            </a>
          </div>
        </div>

        {/* Profile Image Card */}
        <div className="w-full max-w-xs relative group shrink-0 self-center md:self-auto">
          <div className="absolute inset-0 bg-violentBlue/20 rounded-3xl blur-2xl group-hover:bg-violentBlue/40 transition-colors duration-500 dark:bg-violentBlue/30 dark:group-hover:bg-violentBlue/50"></div>
          <img
            src="/profile.png"
            alt="Portrait of Knight Marc Xavier C. Ballao"
            className="w-full rounded-3xl shadow-xl object-cover aspect-[3/4] border border-white/10 dark:border-white/20 relative z-10 filter dark:brightness-90"
          />
        </div>
      </div>

      {/* Telemetry Impact Metrics Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm dark:bg-darkCard/60 dark:border-white/10 backdrop-blur-md"
      >
        {telemetryStats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-violentBlue dark:text-violet-400">
              {stat.value}
            </span>
            <span className="text-xs font-semibold text-black/80 dark:text-white/80 uppercase tracking-wider font-mono">
              {stat.label}
            </span>
            <span className="text-[11px] font-mono text-black/50 dark:text-white/50">
              // {stat.tag}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Hero;
