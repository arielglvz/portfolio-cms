import {
  createProject,
  updateProject,
} from "@/features/projects/services/projectService"
import { useState } from "react"

const ProjectForm = ({ project, onProjectCreated }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [formData, setFormData] = useState(() => ({
    title: project?.title ?? "",
    description: project?.description ?? "",
    technologies: project?.technologies?.join(", ") ?? "",
    url: project?.url ?? "",
    github_url: project?.github_url ?? "",
    featured: project?.featured ?? false,
    display_order: project?.display_order ?? 1,
  }))

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError(null)

    try {
      const projectData = {
        ...formData,
        // title: formData.title.trim() || null,
        technologies: formData.technologies
          .split(",")
          .map((technology) => technology.trim())
          .filter(Boolean),
        description: formData.description.trim() || null,
        url: formData.url.trim() || null,
        github_url: formData.github_url.trim() || null,
        display_order: Number(formData.display_order),
      }

      const savedProject = project
        ? await updateProject(project.id, projectData)
        : await createProject(projectData)

      await onProjectCreated()

      console.log("Saved project: ", savedProject)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Project Title</label>
        <input
          id="title"
          className="border"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="technologies">Technologies (comma-separated)</label>
        <input
          id="technologies"
          className="border"
          name="technologies"
          value={formData.technologies}
          onChange={handleChange}
          placeholder="React, Supabase, Tailwind CSS"
          required
        />
      </div>

      <div>
        <label htmlFor="url">Project URL</label>
        <input
          id="url"
          className="border"
          name="url"
          type="url"
          value={formData.url}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="github_url">GitHub URL</label>
        <input
          id="github_url"
          className="border"
          name="github_url"
          type="url"
          value={formData.github_url}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="featured">
          <input
            id="featured"
            className="border"
            name="featured"
            type="checkbox"
            checked={formData.featured}
            onChange={handleChange}
          />
          Featured project
        </label>
      </div>

      <div>
        <label htmlFor="display_order">Display order</label>
        <input
          id="display_order"
          className="border"
          name="display_order"
          type="number"
          min="1"
          value={formData.display_order}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading
          ? project
            ? "Saving..."
            : "Creating..."
          : project
            ? "Save Changes"
            : "Create Project"}
      </button>

      {error && <p role="alert">{error}</p>}
    </form>
  )
}
export default ProjectForm
