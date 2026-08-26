import { motion } from 'framer-motion';

function VideoShowcase({ videoSrc = 'https://www.youtube.com/embed/V8QI__Y7-u4' }) {
  // If videoSrc is a YouTube/Vimeo link, render an <iframe>.
  // If videoSrc is a local file (e.g. '/css-video-demo.mp4'), render an HTML5 <video> player!
  const isEmbed = videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be') || videoSrc.includes('vimeo.com');

  return (
    <section
      id="showcase"
      className="container flex flex-col gap-10 border-t border-black/10 py-16 md:py-20 mt-20 dark:border-white/10"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold text-violentBlue dark:text-violet-400 tracking-wider uppercase">
            // 03. TECHNICAL SHOWCASE
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold heading-font dark:text-white">
          CSS NC-II & Enterprise Networking Demonstration
        </h2>
        <p className="text-sm text-black/60 dark:text-white/60">
          A video walk-through demonstrating standardized enterprise local area network (LAN) cabling, router/switch configuration, and system servicing protocols.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 items-center">
        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col gap-2"
        >
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-black/10 shadow-lg dark:border-white/20 bg-black">
            {isEmbed ? (
              <iframe
                className="w-full h-full border-0"
                src={videoSrc}
                title="CSS NC-II Enterprise Networking Technical Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                className="w-full h-full object-contain"
                controls
                playsInline
                preload="metadata"
                src={videoSrc}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </motion.div>

        {/* English Workflow Summary */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col gap-5 rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:bg-darkCard/50 dark:border-white/10 dark:backdrop-blur-md"
        >
          <div className="space-y-2 border-b border-black/10 dark:border-white/10 pb-4">
            <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-mono font-semibold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-500/20">
              TESDA CSS NC-II TECHNICAL BREAKDOWN
            </span>
            <h3 className="text-xl font-semibold heading-font dark:text-white">
              Enterprise Network & Servicing Execution
            </h3>
          </div>

          <div className="space-y-4 text-sm text-black/75 dark:text-white/80 leading-relaxed">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
              <div>
                <strong className="block text-black dark:text-white font-mono text-xs uppercase tracking-wide">1. Hardware Diagnostics & Assembly</strong>
                Executes component verification, motherboard cabling, power diagnostics, and failure-proof system assembly under national standards.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
              <div>
                <strong className="block text-black dark:text-white font-mono text-xs uppercase tracking-wide">2. LAN Topology & Capping</strong>
                Crimps and tests straight-through and crossover UTP cables, verifying continuity and signal stability across enterprise workstation nodes.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
              <div>
                <strong className="block text-black dark:text-white font-mono text-xs uppercase tracking-wide">3. Router & Switch Configuration</strong>
                Configures IP address schemes, subnet masks, gateway routes, DHCP pools, and security policies on enterprise router hardware.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
              <div>
                <strong className="block text-black dark:text-white font-mono text-xs uppercase tracking-wide">4. System Deployment & Maintenance</strong>
                Deploys OS installations, driver provisioning, and automated backup routines to guarantee enterprise uptime.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default VideoShowcase;
