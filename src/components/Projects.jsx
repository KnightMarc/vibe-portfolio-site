const projects = [
  {
    title: 'Project One',
    description:
      'Placeholder description for a featured build. Summarize outcome and value.',
    tags: ['React', 'Vite', 'TailwindCSS'],
  },
  {
    title: 'Project Two',
    description:
      'High-level highlight of what was delivered. Keep this concise and bold.',
    tags: ['Node.js', 'Automation', 'Networking'],
  },
  {
    title: 'Project Three',
    description:
      'Add a short note on tech, role, or impact. Swap with your real work.',
    tags: ['AI / Vibe Coding', 'React', 'APIs'],
  },
  {
    title: 'Project Four',
    description: 'Another placeholder card ready for real case study details.',
    tags: ['TailwindCSS', 'Design Systems'],
  },
  {
    title: 'Project Five',
    description: 'Brief copy about the solution, process, or metrics.',
    tags: ['Networking', 'Automation'],
  },
  {
    title: 'Project Six',
    description: 'Optional extra card to round out the grid with variety.',
    tags: ['React', 'AI / Vibe Coding'],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="container flex flex-col gap-12 border-t border-black/10 py-16 md:py-20 mt-24 md:mt-28"
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold heading-font">Projects</h2>
        <p className="text-sm text-black/60">
          A quick grid of recent work — swap in your real case studies.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md hover:border-violentBlue/50"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold heading-font">
                {project.title}
              </h3>
              <span className="h-3 w-3 rounded-full bg-violentBlue"></span>
            </div>
            <p className="text-sm leading-relaxed text-black/70">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full bg-violentBlue/10 px-3 py-1 text-xs font-medium text-violentBlue"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-2">
              <button
                type="button"
                className="text-sm font-semibold text-violentBlue transition-all duration-200 ease-out hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violentBlue focus-visible:ring-offset-2"
              >
                View details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

