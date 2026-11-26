import ProjectCard from "@/features/projects/components/ProjectCard"
import { getProjects } from "@/features/projects/services/projectService"
import { useEffect, useState } from "react"

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProjects()

        if (error) throw error

        setProjects(data ?? [])
      } catch (err) {
        console.error(err)
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [])

  return (
    <section className="mx-auto max-w-6xl space-y-6 px-6 py-20">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio.
      </p>

      {isLoading ? (
        <p>Loading projects...</p>
      ) : error ? (
        <p className="text-red-500 text-sm">{error}</p>
      ) : projects.length === 0 ? (
        <p>No projects available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => {
            const { technologies } = project

            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={technologies}
              />
            )
          })}
        </div>
      )}
    </section>
  )
}

export default Projects
