const ProjectCard = ({ title, description, technologies }) => {
  return (
    <div className="border p-4 rounded-md">
      <h2 className="font-bold">{title}</h2>
      <p className="text-base">{description}</p>
      <ul className="flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <li key={technology} className="text-xs border rounded-sm px-2 py-1">
            {technology}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ProjectCard
