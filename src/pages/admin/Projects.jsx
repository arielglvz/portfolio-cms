import ProjectForm from "@/features/projects/components/ProjectForm"
import {
  deleteProject,
  getProjects,
} from "@/features/projects/services/projectService"
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

  const handleProjectDeleted = async (projectId) => {
    try {
      await deleteProject(projectId)

      const data = await getProjects()
      setProjects(data)

      if (selectedProject?.id === projectId) {
        setSelectedProject(null)
      }
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
          <div key={project.id} className="p-3 flex flex-col gap-3">
            <h2 className="text-3xl">{project.title}</h2>

            <div className="flex gap-2">
              <button
                className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xs cursor-pointer"
                onClick={() => selectProject(project.id)}
              >
                Edit
              </button>
              <button
                className="p-2 bg-orange-600 hover:bg-orange-500 text-white rounded-xs cursor-pointer"
                onClick={() => setSelectedProject(null)}
              >
                Cancel Editing
              </button>
              <button
                className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-xs cursor-pointer"
                onClick={() => handleProjectDeleted(project.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
