const Projects = () => {
  const projects = [
    {
      title: "AiChieve",
      description: "An AI-powered goal planning application.",
      technologies: ["React", "Firebase", "OpenAI", "Tailwind"],
    },
    {
      title: "TODO-AI",
      description: "An AI-powered goal planning application.",
      technologies: [
        "React",
        "Redux",
        "AppWrite",
        "Google Generative AI",
        "Tailwind",
      ],
    },
    {
      title: "Apteum Website - Rework",
      description: "Reworked the website from the original Apteum website.",
      technologies: ["React", "Tailwind"],
    },
  ]

  return (
    <section className="mx-auto max-w-6xl space-y-6 px-6 py-20">
      <h1 className="text-4xl font-bold" font-bold>
        Projects
      </h1>
      <p className="text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => {
          const { technologies } = project
          return (
            <div key={project.title} className="border p-4 rounded-md">
              <h2 className="font-bold">{project.title}</h2>
              <p className="text-base">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <li
                    key={technology}
                    className="text-xs border rounded-sm px-2 py-1"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
