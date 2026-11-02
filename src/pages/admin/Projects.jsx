import ProjectForm from "@/features/projects/components/ProjectForm"
import { getProjects } from "@/features/projects/services/projectService"
import { useEffect, useState } from "react"

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)

  const handleProjectSaved = async () => {
    try {
      const data = await getProjects()
      setProjects(data)
      setSelectedProject(null)
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

  const selectProject = (id) => {
    const selected = projects.find((project) => project.id === id)
    setSelectedProject(selected)
  }

  return (
    <div>
      <h1>Manage Projects</h1>

      <ProjectForm
        key={selectedProject?.id ?? "new"}
        project={selectedProject}
        onProjectCreated={handleProjectSaved}
      />

      {/* Project List */}
      <div className="pt-10">
        <hr />
        {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>

            <button onClick={() => selectProject(project.id)}>Edit</button>
            <button onClick={() => setSelectedProject(null)}>
              Cancel Editing
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
