function About() {
  return (
    <section
      id="about"
      className="container grid gap-8 border-t border-black/10 py-16 md:grid-cols-3 md:py-20"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold heading-font">About</h2>
        <p className="text-sm text-black/60">Short snapshot, quick context.</p>
      </div>
      <div className="md:col-span-2">
        <p className="text-lg leading-relaxed text-black/75">
          I’m a fresh BSIT graduate with a focus on network administration and
          AI-assisted development. I enjoy turning concepts into efficient,
          real-world applications — from small tools to startup-ready projects.
          I’m always exploring new technologies and improving my craft through
          hands-on building, testing, and continuous learning.
        </p>
      </div>
    </section>
  );
}

export default About;

