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
          I help brands and teams craft focused digital products. This placeholder paragraph is ready for your story, highlighting your expertise, background, and the value you bring to clients and collaborators.
        </p>
      </div>
    </section>
  );
}

export default About;

