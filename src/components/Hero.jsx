function Hero() {
  return (
    <section
      id="home"
      className="container flex flex-col gap-12 py-24 md:py-32 lg:py-40"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-violentBlue font-semibold">
        Portfolio / Designer / Developer
      </p>
      <div className="flex flex-col gap-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight heading-font">
          Hi, I’m Knight Marc Xavier C. Ballao — a BSIT graduate specializing in
          Network Administration.
        </h1>
        <p className="text-lg text-black/70 leading-relaxed">
          I build modern, practical solutions using Vibe Coding and I’m driven
          to bring new ideas into startups and real-world projects.
        </p>
        <p className="text-base font-semibold text-black/80">
          Building smart solutions with bold ideas.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-full bg-violentBlue px-6 py-3 text-white text-sm font-semibold tracking-tight shadow-lg shadow-violentBlue/20 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violentBlue focus-visible:ring-offset-2"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-sm font-semibold tracking-tight transition hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violentBlue focus-visible:ring-offset-2"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}

export default Hero;

