import { motion } from 'framer-motion';

function VideoShowcase() {
  // Replace YOUR_VIDEO_ID below with your actual unlisted YouTube Video ID or full embed link
  const embedUrl = 'https://www.youtube.com/embed/YOUR_VIDEO_ID';

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
          Custom Blend Engine Demonstration
        </h2>
        <p className="text-sm text-black/60 dark:text-white/60">
          A video walk-through demonstrating the automated backend blend engine, accompanied by a clean English technical execution summary.
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
            <iframe
              className="w-full h-full border-0"
              src={embedUrl}
              title="Custom Blend Engine Technical Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <span className="font-mono text-xs text-black/50 dark:text-white/50 text-center">
            * Note: To swap with your unlisted YouTube video ID, update `YOUR_VIDEO_ID` in `VideoShowcase.jsx`.
          </span>
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
            <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-mono font-semibold text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/20">
              ENGLISH TECHNICAL BREAKDOWN
            </span>
            <h3 className="text-xl font-semibold heading-font dark:text-white">
              Backend Execution & Data Flow
            </h3>
          </div>

          <div className="space-y-4 text-sm text-black/75 dark:text-white/80 leading-relaxed">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-cyan-500 mt-2 shrink-0"></div>
              <div>
                <strong className="block text-black dark:text-white font-mono text-xs uppercase tracking-wide">1. Automated Ingestion & Webhooks</strong>
                Receives incoming request payloads instantly via webhooks, validating data structure and client parameters.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-cyan-500 mt-2 shrink-0"></div>
              <div>
                <strong className="block text-black dark:text-white font-mono text-xs uppercase tracking-wide">2. Rule-Based Blend Engine Processing</strong>
                Executes core blend algorithms to calculate custom ratio parameters, process inventory variables, and format system outputs dynamically.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-cyan-500 mt-2 shrink-0"></div>
              <div>
                <strong className="block text-black dark:text-white font-mono text-xs uppercase tracking-wide">3. Infrastructure Orchestration</strong>
                Leverages containerized microservices and automated pipeline triggers for uninterrupted execution with zero operational downtime.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-cyan-500 mt-2 shrink-0"></div>
              <div>
                <strong className="block text-black dark:text-white font-mono text-xs uppercase tracking-wide">4. Measurable Business Outcome</strong>
                Drastically eliminates manual processing overhead, ensures consistency across ordering systems, and accelerates turnaround times for clients.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default VideoShowcase;
