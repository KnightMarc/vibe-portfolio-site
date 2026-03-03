function About() {
  return (
    <section
      id="about"
      className="container grid gap-8 border-t border-black/10 py-16 md:grid-cols-3 md:py-20 mt-24"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold heading-font">About</h2>
        <p className="text-sm text-black/60 mt-4 mb-4">
          A quick snapshot of who I am and how I can help.
        </p>
        <div className="block shrink-0 mt-2">
          <img
            src="/profile.png"
            alt="Portrait of Knight Marc Xavier C. Ballao"
            className="h-24 w-24 rounded-full object-cover shadow-md border border-black/10"
          />
        </div>
      </div>
      <div className="md:col-span-2 space-y-4 md:mt-0 mt-4">
        <div className="space-y-3">
          <p className="text-lg leading-relaxed text-black/75">
            I’m a tech-enabled virtual assistance. I
            enjoy turning concepts into efficient, real-world systems — from
            simple tools to startup-ready workflows.
          </p>
          <p className="text-sm leading-relaxed text-black/70">
            As an aspiring Virtual Assistant, I help with email and calendar
            management, research, documentation, basic design and content
            support, and organizing information so it’s easy to act on. I care
            about being proactive, detail-oriented, and easy to work with in
            remote, async teams.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

