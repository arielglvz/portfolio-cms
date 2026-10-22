import { createProject } from "@/features/projects/services/projectService"
import { useState } from "react"

const ProjectForm = ({ onProjectCreated }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    url: "",
    github_url: "",
    featured: false,
    display_order: 1,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    console.log(name, type, value)
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

      const project = await createProject(projectData)

      await onProjectCreated()

      setFormData({
        title: "",
        description: "",
        technologies: "",
        url: "",
        github_url: "",
        featured: false,
        display_order: 1,
      })

      console.log("Created project: ", project)
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
          name="display_order"
          type="number"
          min="1"
          value={formData.display_order}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Project"}
      </button>

      {error && <p role="alert">{error}</p>}
    </form>
  )
}
export default ProjectForm
