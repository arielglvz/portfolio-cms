import { getProjects } from "@/features/projects/services/projectService"
import { useEffect, useState } from "react"

const Projects = () => {
  const [projects, setProjects] = useState([])

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
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
        </div>
      ))}
    </div>
  )
}
export default Projects
