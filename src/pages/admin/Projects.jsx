import ProjectForm from "@/features/projects/components/ProjectForm"
import { getProjects } from "@/features/projects/services/projectService"
import { useEffect, useState } from "react"

const Projects = () => {
  const [projects, setProjects] = useState([])

  const handleProjectCreated = async () => {
    try {
      const data = await getProjects()
      setProjects(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects()
        setProjects(data)
      } catch (err) {
        console.error(err)
      }
    }

    loadProjects()
  }, [])

  return (
    <div>
      <h1>Manage Projects</h1>

      <ProjectForm onProjectCreated={handleProjectCreated} />

      {/* Project List */}
      <div className="pt-10">
        <hr />
        {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Projects
