function Hero() {
  return (
    <section
      id="home"
      className="container mt-28 flex flex-col gap-12 py-24 md:mt-32 md:py-32 lg:py-40 relative"
    >
      <div className="flex items-center gap-2 mb-[-2rem]">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
        <span className="font-mono text-xs text-green-500 tracking-widest uppercase">
          SYS.STATUS: ONLINE // NET.ADMIN
        </span>
      </div>
      <p className="text-sm uppercase tracking-wider text-violentBlue font-medium dark:text-violet-400">
        AUTOMATION SPECIALIST / NETWORK TECHNICIAN / PROJECT MANAGER
      </p>
      <div className="flex flex-col gap-10 md:flex-row md:items-center">
        <div className="flex flex-col max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight heading-font dark:text-white">
            Knight Marc Xavier
          </h1>
          <p className="mt-4 text-lg text-black/70 leading-relaxed font-normal dark:text-white/70">
            Detail-oriented IT professional specializing in engineering automated workflows, maintaining robust network infrastructures, and leading technical projects to successful delivery.
          </p>

        </div>
        <div className="w-full max-w-xs md:max-w-sm relative group">
          <div className="absolute inset-0 bg-violentBlue/20 rounded-3xl blur-2xl group-hover:bg-violentBlue/40 transition-colors duration-500 dark:bg-violentBlue/30 dark:group-hover:bg-violentBlue/50"></div>
          <img
            src="/profile.png"
            alt="Portrait of Knight Marc Xavier C. Ballao"
            className="w-full rounded-3xl shadow-lg object-cover aspect-[3/4] border border-white/10 dark:border-white/20 relative z-10 filter dark:brightness-90"
          />
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-sm bg-violentBlue px-6 py-3 text-white text-sm font-semibold tracking-tight shadow-lg shadow-violentBlue/20 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] dark:hover:neon-glow hover:bg-[#3043e0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violentBlue focus-visible:ring-offset-2 border border-transparent font-mono"
        >
          [View Projects]
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-sm border border-black dark:border-white/50 px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violentBlue focus-visible:ring-offset-2 font-mono dark:text-white"
        >
          &gt; Hire Me_
        </a>
      </div>
    </section>
  );
}

export default Hero;

